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


declare global {
}

const {fetch: origFetch} = window;
window.fetch = async (input: RequestInfo, init?: RequestInit): Promise<Response> => {
    if (init && init.headers) {
        const originHeadersInit: Record<string, string> = <Record<string, string>>init.headers;
        originHeadersInit["Authorization"] = "Bearer fdojkfoij";


    }
    console.log("fetch called with args:", input);
    const response = await origFetch(input, init);

    /* work with the cloned response in a separate promise
       chain -- could use the same chain with `await`. */
    response
        .clone()
        .json()
        .then(body => console.log("intercepted response:", body))
        .catch(err => console.error(err));
    return response;
};

export class NidocaOAuthClient {

    constructor(private host: string) {
    }

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
