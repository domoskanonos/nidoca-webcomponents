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
import './page-code.ts';
import './page-grid.ts';
import './page-dialog.ts';
import './page-border.ts';
import './page-input.ts';
import './page-link.ts';
import './page-list.ts';
import './page-table.ts';
import './page-accordion.ts';
import './page-floating.ts';
import './page-tabs.ts';
import './page-ripple.ts';
import './page-divider.ts';
import './page-visible.ts';
import './page-spacer.ts';
import './page-transition.ts';
import './page-button.ts';
import './page-flex.ts';
import './page-box.ts';
import './page-icon.ts';
import './page-rich-media.ts';
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
         case 'pagegrid':
            return html`
               <page-grid></page-grid>
            `;
         case 'pagebox':
            return html`
               <page-box></page-box>
            `;
         case 'pageborder':
            return html`
               <page-border></page-border>
            `;
         case 'pagefloating':
            return html`
               <page-floating></page-floating>
            `;
         case 'pagedialog':
            return html`
               <page-dialog></page-dialog>
            `;
         case 'pageicon':
            return html`
               <page-icon></page-icon>
            `;
         case 'pagedivider':
            return html`
               <page-divider></page-divider>
            `;
         case 'pageaccordion':
            return html`
               <page-accordion></page-accordion>
            `;
         case 'pageripple':
            return html`
               <page-ripple></page-ripple>
            `;
         case 'pagetabs':
            return html`
               <page-tabs></page-tabs>
            `;
         case 'pagelink':
            return html`
               <page-link></page-link>
            `;
         case 'pagetable':
            return html`
               <page-table></page-table>
            `;
         case 'pagebutton':
            return html`
               <page-button></page-button>
            `;
         case 'pagelist':
            return html`
               <page-list></page-list>
            `;
         case 'pagetransition':
            return html`
               <page-transition></page-transition>
            `;
         case 'pagetable':
            return html`
               <page-table></page-table>
            `;
         case 'pagecode':
            return html`
               <page-code></page-code>
            `;
         case 'pagespacer':
            return html`
               <page-spacer></page-spacer>
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
         case 'pagevisible':
            return html`
               <page-visible></page-visible>
            `;
         case 'getStarted':
            return html`
               <page-get-started></page-get-started>
            `;
         case '':
         case 'introduction':
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
