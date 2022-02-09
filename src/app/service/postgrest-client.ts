export interface JWT {
  access_token: string;
  expires_in: number;
  expires_in_date: Date;
  refresh_expires_in: number;
  refresh_token: string;
  token_type: string;
  session_state: string;
  scope: string;
}

export class PostgRESTClient {
  constructor(private host: string) {}

  public async login(username: string, password: string) {
    console.log(`login ${username}`);

    const requestInit = <RequestInit>{
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
    };

    return this.authorizeRequest(requestInit);
  }

  async authorizeRequest(requestInit: RequestInit): Promise<boolean> {
    const response = await fetch(
      "https://89.58.33.189:8443/auth/realms/master/protocol/openid-connect/token",
      requestInit
    );
    if (response.status == 200) {
      const jwtToken: JWT = await response.json();
      jwtToken.expires_in_date = new Date(new Date().getTime() + jwtToken.expires_in);
      sessionStorage.setItem("token", JSON.stringify(jwtToken));
    }
    console.info("response status: ", response.status);
    return response.status == 200;
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
    await this.addAuthHeader(headers);
    const requestOptions: RequestInit = {
      headers: headers,
      method: method,
      body: JSON.stringify(body),
    };
    const response = await fetch(url, requestOptions);
    console.info("response status: ", response.status);
    return response;
  }

  async addAuthHeader(headers: Record<string, string>) {
    const tokenAsString = sessionStorage.getItem("token");
    if (tokenAsString) {
      const jwt: JWT = this.parse(tokenAsString);
      if (jwt.expires_in_date.getTime() - 1 < new Date().getTime()) {
        console.log("do");
        if (
          await this.authorizeRequest(<RequestInit>{
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            method: "POST",
            body: new URLSearchParams({
              client_id: "postgrest",
              grant_type: "refresh_token",
              refresh_token: jwt.refresh_token,
            }),
          })
        ) {
          console.log("token refresehd");
        }
      }
      headers["Authorization"] = `Bearer ${jwt.access_token}`;
    }
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
