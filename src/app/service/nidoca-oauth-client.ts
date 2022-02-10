export interface MtlsEndpointAliases {
  token_endpoint: string;
  revocation_endpoint: string;
  introspection_endpoint: string;
  device_authorization_endpoint: string;
  registration_endpoint: string;
  userinfo_endpoint: string;
  pushed_authorization_request_endpoint: string;
  backchannel_authentication_endpoint: string;
}

export interface Issuer {
  issuer: string;
  authorization_endpoint: string;
  token_endpoint: string;
  introspection_endpoint: string;
  userinfo_endpoint: string;
  end_session_endpoint: string;
  frontchannel_logout_session_supported: boolean;
  frontchannel_logout_supported: boolean;
  jwks_uri: string;
  check_session_iframe: string;
  grant_types_supported: string[];
  response_types_supported: string[];
  subject_types_supported: string[];
  id_token_signing_alg_values_supported: string[];
  id_token_encryption_alg_values_supported: string[];
  id_token_encryption_enc_values_supported: string[];
  userinfo_signing_alg_values_supported: string[];
  request_object_signing_alg_values_supported: string[];
  request_object_encryption_alg_values_supported: string[];
  request_object_encryption_enc_values_supported: string[];
  response_modes_supported: string[];
  registration_endpoint: string;
  token_endpoint_auth_methods_supported: string[];
  token_endpoint_auth_signing_alg_values_supported: string[];
  introspection_endpoint_auth_methods_supported: string[];
  introspection_endpoint_auth_signing_alg_values_supported: string[];
  authorization_signing_alg_values_supported: string[];
  authorization_encryption_alg_values_supported: string[];
  authorization_encryption_enc_values_supported: string[];
  claims_supported: string[];
  claim_types_supported: string[];
  claims_parameter_supported: boolean;
  scopes_supported: string[];
  request_parameter_supported: boolean;
  request_uri_parameter_supported: boolean;
  require_request_uri_registration: boolean;
  code_challenge_methods_supported: string[];
  tls_client_certificate_bound_access_tokens: boolean;
  revocation_endpoint: string;
  revocation_endpoint_auth_methods_supported: string[];
  revocation_endpoint_auth_signing_alg_values_supported: string[];
  backchannel_logout_supported: boolean;
  backchannel_logout_session_supported: boolean;
  device_authorization_endpoint: string;
  backchannel_token_delivery_modes_supported: string[];
  backchannel_authentication_endpoint: string;
  backchannel_authentication_request_signing_alg_values_supported: string[];
  require_pushed_authorization_requests: boolean;
  pushed_authorization_request_endpoint: string;
  mtls_endpoint_aliases: MtlsEndpointAliases;
}

export interface JWT {
  access_token: string;
  expires_in: number;
  expires_in_date: Date;
  refresh_expires_in: number;
  refresh_expires_in_date: Date;
  refresh_token: string;
  token_type: string;
  session_state: string;
  scope: string;
}

const {fetch: origFetch} = window;
window.fetch = async (input: RequestInfo, init?: RequestInit): Promise<Response> => {
  const token = NidocaOAuthClient.getToken();
  if ((await NidocaOAuthClient.isLoggedIn()) && init && init.headers && token) {
    const originHeadersInit: Record<string, string> = <Record<string, string>>init.headers;
    originHeadersInit["Authorization"] = `Bearer ${token.access_token}`;
  }
  const response = await origFetch(input, init);
  response
    .clone()
    .json()
    .catch((err) => console.error(err));
  return response;
};

export class NidocaOAuthClient {
  private static token_key: string = "token";
  private static issuer_key: string = "issuer";

  public static async init(issuerUrl: string): Promise<boolean> {
    const response = await fetch(issuerUrl, <RequestInit>{
      headers: {},
      method: "GET",
      body: undefined,
    });
    NidocaOAuthClient.setIssuer(await response.json());
    return response.status == 200;
  }

  private static setIssuer(issuer: Issuer) {
    sessionStorage.setItem(NidocaOAuthClient.issuer_key, JSON.stringify(issuer));
  }

  private static getIssuer(): Issuer | undefined {
    const issuerAsString = sessionStorage.getItem(NidocaOAuthClient.issuer_key);
    if (issuerAsString) {
      const issuer: Issuer = NidocaOAuthClient.parse(issuerAsString);
      return issuer;
    }
    return undefined;
  }

  private static setToken(jwtToken: JWT) {
    jwtToken.expires_in_date = new Date(new Date().getTime() + jwtToken.expires_in);
    jwtToken.refresh_expires_in_date = new Date(new Date().getTime() + jwtToken.refresh_expires_in);
    sessionStorage.setItem(NidocaOAuthClient.token_key, JSON.stringify(jwtToken));
  }

  public static getToken(): JWT | undefined {
    const tokenAsString = sessionStorage.getItem(NidocaOAuthClient.token_key);
    if (tokenAsString) {
      const jwt: JWT = NidocaOAuthClient.parse(tokenAsString);
      return jwt;
    }
    return undefined;
  }

  private static parse(json: string): any {
    const regexISO = /(\d{4}-\d{2}-\d{2})[A-Z]+(\d{2}:\d{2}:\d{2}).([0-9+-:]+)/;
    const regexJavaLocalDate = /(\d{4}-\d{2}-\d{2})/;
    const regexs: any[] = [regexISO, regexJavaLocalDate];
    return JSON.parse(json, function (_key, value) {
      if (typeof value === "string") {
        for (let i = 0; i < regexs.length; i++) {
          const regex = regexs[i];
          const isoMatched = regex.exec(value);
          if (isoMatched) {
            value = new Date(value);
            break;
          }
        }
      }
      return value;
    });
  }

  public static async isLoggedIn(): Promise<boolean> {
    const jwt: JWT | undefined = this.getToken();
    if (jwt && jwt.expires_in_date.getTime() - 1 > new Date().getTime()) {
      return true;
    }
    const issuer = NidocaOAuthClient.getIssuer();
    if (issuer && jwt) {
      const response = await origFetch(issuer.token_endpoint, <RequestInit>{
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        method: "POST",
        body: new URLSearchParams({
          client_id: "postgrest",
          grant_type: "refresh_token",
          refresh_token: jwt.refresh_token,
        }),
      });

      NidocaOAuthClient.setToken(await response.json());
      return response.status == 200;
    }
    return false;
  }

  public static async login(username: string, password: string) {
    console.log(`login ${username}`);
    const issuer = NidocaOAuthClient.getIssuer();
    if (issuer) {
      const response = await origFetch(issuer.token_endpoint, <RequestInit>{
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        method: "POST",
        body: new URLSearchParams({
          grant_type: "password",
          client_id: "postgrest",
          username: username,
          password: password,
        }),
      });
      if (response.status == 200) {
        const jwtToken: JWT = await response.json();
        this.setToken(jwtToken);
      }
      console.info("login response status: ", response.status);
      return response.status == 200;
    }
    return false;
  }
}
