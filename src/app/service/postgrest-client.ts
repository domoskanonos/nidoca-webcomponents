export class PostgRESTClient {
  constructor(private host: string, private path: string) {}

  public async persist(item: any): Promise<any> {
    const url: string = this.host.concat(this.path);
    const resp = await this.request(url, "POST", "application/json; charset=utf-8", item);
    console.log("persist item, value: %s", JSON.stringify(item));
    return this.parse(await resp.text())[0];
  }

  public async update(id: any, item: any): Promise<boolean> {
    const url: string = this.host.concat(this.path).concat("?id=eq.".concat(id));
    console.debug("update item value: %s", JSON.stringify(item));
    const resp = await this.request(url, "PUT", "application/json; charset=utf-8", item);
    console.log("item updated ? ".concat(String(resp.status)));
    return resp.status == 204;
  }

  public async delete(id: any): Promise<boolean> {
    const url: string = this.host.concat(this.path).concat("?id=eq.").concat(id);
    const resp = await this.request(url, "DELETE", "application/json; charset=utf-8", undefined);
    console.debug("delete item for id= %s", id);
    return resp.status == 200;
  }

  public async search(params: string): Promise<any[]> {
    const url: string = this.host.concat(this.path).concat(params);

    const resp = await this.request(url, "GET", "application/json; charset=utf-8", undefined);

    return this.parse(await resp.text());
  }

  public async request(url: string, method: string, contentType: string, body: any): Promise<Response> {
    const headers: HeadersInit = {};
    headers["Accept-Encoding"] = "*";
    headers["Content-Type"] = contentType;
    headers["Prefer"] = "return=representation";
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
