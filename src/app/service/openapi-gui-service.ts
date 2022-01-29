import {NidocaListItem} from "../..";
import {OpenApiRestService} from "./openapi-rest-service";
import {OpenApiService, Path} from "./openapi-service";

export class OpenApiGuiService {
  private openApiService: OpenApiService = new OpenApiService();
  private openApiRestClient: OpenApiRestService = new OpenApiRestService(this.openApiService);

  init(url: string): boolean {
    this.openApiService.init(url);

    return true;
  }

  getMenuListItems(): NidocaListItem[] {
    const retval: NidocaListItem[] = [];
    this.openApiService.getPathObjects().forEach((path: Path) => {
      console.log(path.get);
    });
    return retval;
  }
}
