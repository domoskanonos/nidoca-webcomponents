/**
import Keycloak, {KeycloakConfig} from "keycloak-js";

const cl = Keycloak(<KeycloakConfig>{clientId: "postgrest", realm: "master", url: "https://89.58.33.189:8443/auth"});

console.log(cl.idToken);
cl.init({})
  .then(function (authenticated) {
    console.log(authenticated);
    //alert(authenticated ? "authenticated" : "not authenticated");
  })
  .catch(function () {
    alert("failed to initialize");
  });

   */

import KcAdminClient from "@keycloak/keycloak-admin-client";
// To configure the client, pass an object to override any of these  options:
// {
//   baseUrl: 'http://127.0.0.1:8080/auth',
//   realmName: 'master',
//   requestConfig: {
//     /* Axios request config options https://github.com/axios/axios#request-config */
//   },
// }
const kcAdminClient = new KcAdminClient({
  baseUrl: "https://89.58.33.189:8443/auth",
  realmName: "master",
});

// Authorize with username / password

export class PostgRESTClient {
  constructor(private host: string) {
    console.log("GOGOGO");
    /**
    const headers: HeadersInit = {};
    //headers["Accept-Encoding"] = "*";
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    const requestOptions: RequestInit = {
      headers: headers,
      method: "POST",
    };
    fetch("https://89.58.33.189:8443/auth/realms/master/protocol/openid-connect/token", requestOptions).then(
      (response) => {
        console.info("response status: ", response.status);
      }
    );

     */
  }

  /**
   *
   * @returns
   */

  public async login(username: string, password: string) {
    console.log(`login ${username}`);
    try {
      await kcAdminClient.auth({
        username: username,
        password: password,
        grantType: "password",
        clientId: "postgrest",
      });
    } catch (error) {
      console.log(`Login false: ${error}`);
      return false;
    }
    return true;
  }

  public async persist(path: string, item: any): Promise<any> {
    const url: string = this.host.concat(path);
    const resp = await this.request(url, "POST", "application/json; charset=utf-8", item);
    console.log("persist item, value: %s", JSON.stringify(item));
    return this.parse(await resp.text())[0];
  }

  public async update(path: string, id: any, item: any): Promise<boolean> {
    const url: string = this.host.concat(path).concat("?id=eq.".concat(id));
    console.debug("update item value: %s", JSON.stringify(item));
    const resp = await this.request(url, "PUT", "application/json; charset=utf-8", item);
    console.log("item updated ? ".concat(String(resp.status)));
    return resp.status == 200;
  }

  public async delete(path: string, id: any): Promise<boolean> {
    const url: string = this.host.concat(path).concat("?id=eq.").concat(id);
    const resp = await this.request(url, "DELETE", "application/json; charset=utf-8", undefined);
    console.debug("delete item for id= %s", id);
    return resp.status == 200;
  }

  public async search(path: string, params: string): Promise<any[]> {
    const url: string = this.host.concat(path).concat(params);

    const resp = await this.request(url, "GET", "application/json; charset=utf-8", undefined);

    return this.parse(await resp.text());
  }

  public async request(url: string, method: string, contentType: string, body: any): Promise<Response> {
    const headers: HeadersInit = {};
    headers["Accept-Encoding"] = "*";
    headers["Content-Type"] = contentType;
    headers["Prefer"] = "return=representation";
    headers["Authorization"] = `Bearer ${kcAdminClient.accessToken}`;

    const requestOptions: RequestInit = {
      headers: headers,
      method: method,
      body: JSON.stringify(body),
    };
    const response = await fetch(url, requestOptions);
    console.info("response status: ", response.status);
    return response;
  }

  public parse(json: string): any {
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
}
