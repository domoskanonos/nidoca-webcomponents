import {customElement, html, TemplateResult} from 'lit-element';
import {RouterService} from '@domoskanonos/frontend-basis';
import {I18nService} from "@domoskanonos/frontend-basis/source/i18n-service";
import messageDE from './message-de.json';
import messageEN from './message-en.json';

import './page-introduction';
import './page-get-started';
import './page-input.ts';
import './page-button.ts';
import './page-layout.ts';
import './page-icon.ts';
import './page-img.ts';
import './page-form.ts';
import './page-typography.ts';
import './showcase-app.ts';

import {
    HttpClientService,
} from "@domoskanonos/frontend-basis/source/http-client-service";
import {PageSettings} from "./page-settings";
import {PageColor} from "./page-color";
import {PageGrid} from "./page-grid";
import {AbstractApp} from "../abstract-app";



@customElement('app-root')
export class ShowcaseApp extends AbstractApp {

    async preRender(): Promise<void> {
        I18nService.getUniqueInstance().saveData(messageDE);
        I18nService.getUniqueInstance().saveData(messageEN, 'en-EN');


        let config = HttpClientService.getUniqueInstance().config;
        config.baseURL = 'http://v220190910399797452.supersrv.de:8099';

        return super.preRender();
    }

   renderPage(): TemplateResult {
      let path = RouterService.getUniqueInstance().getCurrentPage();
      console.log('current path: '.concat(path));
       switch (path) {
           case 'login':
           case 'settings':
               return html`
               ${new PageSettings()}
            `;
           case 'grid':
               return html`
               ${new PageGrid()}
            `;
           case 'pagecolor':
               return html`
               ${new PageColor()}
            `;
           case 'pageicon':
               return html`<page-icon></page-icon>`;
           case 'pagebutton':
               return html`<page-button></page-button>`;
           case 'pagecard':
               return html`<page-card></page-card>`;
           case 'pageprimarytitle':
               return html`<page-primary-title></page-primary-title>`;
           case 'pagetable':
               return html`<page-table></page-table>`;
           case 'pageimg':
               return html`<page-img></page-img>`;
          case 'pageelementlist':
              return html`<page-element-list></page-element-list>`;
          case 'pageinput':
              return html`<page-inputfield></page-inputfield>`;
          case 'pagetypography':
              return html`<page-typography></page-typography>`;
          case 'pagebars':
              return html`<page-bars></page-bars>`;
          case 'pagelayout':
              return html`<page-layout></page-layout>`;
          case 'pageform':
              return html`<page-form></page-form>`;
          case 'pagecc':
              return html`<page-cc></page-cc>`;
          case 'getStarted':
              return html`<page-get-started></page-get-started>`;
          case '':
          case 'dashboard':
          default:
              return html`<page-introduction></page-introduction>`;
      }
   }

    getAppTitle(): string {
        return "WC-Atomic Template";
    }
}