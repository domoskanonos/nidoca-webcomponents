export interface Server {
  url: string;
  description: string;
}

export interface Contact {
  name: string;
}

export interface Info {
  version: string;
  title: string;
  description: string;
  contact: Contact;
}

export interface Path {
  get: any;
  post: any;
  put: any;
  delete: any;
}

export interface OpenApiInterface {
  openapi: string;
  servers: Server[];
  info: Info;
  paths: never;
}

export class OpenApiService {
  private _openApiDefintion: OpenApiInterface | undefined;

  public get openApiDefintion(): OpenApiInterface {
    if (this._openApiDefintion == undefined) {
      throw new Error("please use init function first.");
    }
    return this._openApiDefintion;
  }
  public set openApiDefintion(value: OpenApiInterface) {
    this._openApiDefintion = value;
  }

  init(url: string): void {
    let a;
    (async function () {
      a = await (await fetch(url, {method: "GET"})).json();
    })();

    console.log(a);
    this._openApiDefintion = a;
  }

  getPathKeys(): string[] {
    return Object.keys(this.openApiDefintion.paths);
  }

  getPathObjects(): Path[] {
    const retval: Path[] = [];
    this.getPathKeys().map((key: string) => {
      retval.push(this.openApiDefintion?.paths[key]);
    });
    return retval;
  }

  getPathUrl(key: string): string {
    return this.openApiDefintion.servers[0].url.concat(key);
  }

  getPathObject(key: string): Path {
    return this.openApiDefintion?.paths[key];
  }
}
