export interface JWT {
    token: string;
}

export class NidocaPostgrestClient {
    private static token_key: string = "token";

    public static HOST: string = "https://api.nidoca.com";

    constructor(private host: string) {
    }

    static async login(username: string, password: string): Promise<boolean> {
        console.log(`login ${username}`);
        const response = await fetch(this.HOST.concat("/rpc/login"), <RequestInit>{
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({
                email: username,
                pass: password,
            }),
        });

        if (response.status == 200) {
            const jwtToken: JWT = await response.json();
            console.log(jwtToken);
            this.setToken(jwtToken);
        }
        console.info("login response status: ", response.status);
        return response.status == 200;
    }

    private static setToken(jwtToken: JWT | undefined) {
        //jwtToken.expires_in_date = new Date(new Date().getTime() + jwtToken.expires_in);
        //jwtToken.refresh_expires_in_date = new Date(new Date().getTime() + jwtToken.refresh_expires_in);
        sessionStorage.setItem(NidocaPostgrestClient.token_key, jwtToken ? JSON.stringify(jwtToken) : "");
    }

    public static getToken(): JWT | undefined {
        const tokenAsString = sessionStorage.getItem(NidocaPostgrestClient.token_key);
        if (tokenAsString) {
            const jwt: JWT = NidocaPostgrestClient.parse(tokenAsString);
            return jwt;
        }
        return undefined;
    }

    public static async persist(path: string, item: any): Promise<any> {
        const url: string = this.HOST.concat(path);
        const resp = await this.request(url, "POST", "application/json; charset=utf-8", item);
        console.log("persist item, value: %s", JSON.stringify(item));
        return this.parse(await resp.text())[0];
    }

    public static async update(path: string, id: any, item: any): Promise<boolean> {
        const url: string = this.HOST.concat(path).concat("?id=eq.".concat(id));
        console.debug("update item value: %s", JSON.stringify(item));
        const resp = await this.request(url, "PUT", "application/json; charset=utf-8", item);
        console.log("item updated ? ".concat(String(resp.status)));
        return resp.status == 200;
    }

    public static async delete(path: string, id: any): Promise<boolean> {
        const url: string = this.HOST.concat(path).concat("?id=eq.").concat(id);
        const resp = await this.request(url, "DELETE", "application/json; charset=utf-8", undefined);
        console.debug("delete item for id= %s", id);
        return resp.status == 200;
    }

    public static async search(path: string, params: string): Promise<any[]> {
        const url: string = this.HOST.concat(path).concat(params);

        const resp = await this.request(url, "GET", "application/json; charset=utf-8", undefined);

        return this.parse(await resp.text());
    }

    public static async request(url: string, method: string, contentType: string, body: any): Promise<Response> {
        const headers: HeadersInit = {};
        headers["Accept-Encoding"] = "*";
        headers["Content-Type"] = contentType;
        headers["Prefer"] = "return=representation";
        const jwt = this.getToken();
        if (jwt) headers["Authorization"] = `Bearer ${jwt.token}`;

        const requestOptions: RequestInit = {
            headers: headers,
            method: method,
            body: JSON.stringify(body),
        };
        const response = await fetch(url, requestOptions);
        console.info("response status: ", response.status);
        return response;
    }

    public static parse(json: string): any {
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

    static isLoggedIn() {
        return this.getToken() != undefined;
    }

    static logout() {
        this.setToken(undefined);
    }
}
