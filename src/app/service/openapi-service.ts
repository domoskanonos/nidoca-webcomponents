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

export interface Paths {
  paths: [];
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
  paths: Paths;
}

export class OpenApiService {
  private openApiDefintion: OpenApiInterface = <OpenApiInterface>{};

  constructor(private url: string) {
    const responsePromise: Promise<Response> = fetch(url, {
      method: "GET",
    });
    responsePromise.then((response: Response) => {
      response.json().then((openApiDefinition: OpenApiInterface) => {
        console.info("response status: ", openApiDefinition);
        this.openApiDefintion = openApiDefinition;
      });
    });
  }

  getPathes(): Path[] {
    return this.openApiDefintion.paths.paths;
  }
}
