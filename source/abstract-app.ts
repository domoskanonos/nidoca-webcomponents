import {LitElement, TemplateResult} from 'lit-element';
import {
   RouterService,
} from '@domoskanonos/frontend-basis';

export class AppData {
   name?: string;
   description?: string;
}

export abstract class AbstractApp extends LitElement {
   /**
    * doing stuff before first rendering, f.e. load data from server
    */
   public async preRender(): Promise<void> {
      return Promise.resolve();
   }

   constructor() {
      super();
      let titleTag = document.getElementsByTagName("TITLE")[0];
      titleTag.textContent = this.getAppTitle();
   }

   abstract getAppTitle(): string;

   render(): TemplateResult {
      return this.renderPage();
   }

   firstUpdated() {
      this.registerEventListener();
      RouterService.getUniqueInstance().subscribe(() => this.requestUpdate());
   }

   abstract renderPage(): TemplateResult;

   /**
    *
    * Here you can register event listener on app root component,
    * so you can catch all underlying events.
    *
    */
   protected registerEventListener(): void {
   }

   getDefaultInputData(): AppData {
      return <AppData>{};
   }

   getOutputData(): undefined {
      return undefined;
   }

   protected inputDataChanged(): void {
   }
}
