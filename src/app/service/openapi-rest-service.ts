import {OpenApiService} from "./openapi-service";

export class OpenApiRestService {

    constructor(private openApiService : OpenApiService){

    }

    async searchByPath(key: string): Promise<any> {
        console.log(key);
    const url: string = this.openApiService.getPathUrl(key);

    const headers: any = {};
    headers["Accept"] = "*";
    headers["Accept-Encoding"] = "*";
    //headers["Authorization"] = "Bearer ".concat(token);
    //headers["Content-Type"] = "application/x-www-form-urlencoded";
    console.debug("headers: " + JSON.stringify(headers));
    const requestOptions: RequestInit = {
      headers: headers,
      method: "GET",
    };

    return await (await fetch(url, requestOptions)).json();
  }

}
