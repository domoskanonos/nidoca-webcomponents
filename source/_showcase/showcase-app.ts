import { customElement, html, TemplateResult } from 'lit-element';
import { RouterService } from '@domoskanonos/frontend-basis';
import { I18nService } from '@domoskanonos/frontend-basis/source/i18n-service';
import { HttpClientService } from '@domoskanonos/frontend-basis/source/http-client-service';
import { AbstractApp } from '../abstract-app';
import messageDE from './message-de.json';
import messageEN from './message-en.json';

import './page-introduction';
import './page-get-started';
import './page-imprint';
import './page-color.ts';
import './page-grid.ts';
import './page-input.ts';
import './page-transition.ts';
import './page-button.ts';
import './page-layout.ts';
import './page-icon.ts';
import './page-rich-media.ts';
import './page-form.ts';
import './page-typography.ts';
import './showcase-app.ts';

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
         case 'grid':
            return html`
               <page-grid></page-grid>
            `;
         case 'pagecolor':
            return html`
               <page-color></page-color>
            `;
         case 'pageicon':
            return html`
               <page-icon></page-icon>
            `;
         case 'pagebutton':
            return html`
               <page-button></page-button>
            `;
         case 'pagetransition':
            return html`
               <page-transition></page-transition>
            `;
         case 'pagetable':
            return html`
               <page-table></page-table>
            `;
         case 'pagerichmedia':
            return html`
               <page-rich-media></page-rich-media>
            `;
         case 'pageinput':
            return html`
               <page-inputfield></page-inputfield>
            `;
         case 'pagetypography':
            return html`
               <page-typography></page-typography>
            `;
         case 'pagelayout':
            return html`
               <page-layout></page-layout>
            `;
         case 'pageform':
            return html`
               <page-form></page-form>
            `;
         case 'pageimprint':
            return html`
               <page-imprint></page-imprint>
            `;
         case 'getStarted':
            return html`
               <page-get-started></page-get-started>
            `;
         case '':
         case 'dashboard':
         default:
            return html`
               <page-introduction></page-introduction>
            `;
      }
   }

   getAppTitle(): string {
      return 'WC-Atomic Template';
   }
}
