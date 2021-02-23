import {RouterService} from '@domoskanonos/frontend-basis';
import {NidocaAbstractApp} from '@domoskanonos/nidoca-core';
import {customElement, html, TemplateResult} from 'lit-element';

@customElement('nidoca-showcase-app')
export class NidocaShowcaseApp extends NidocaAbstractApp {
  async preRender(): Promise<void> {
    return super.preRender();
  }

  renderPage(): TemplateResult {
    let path = RouterService.getUniqueInstance().getCurrentPage();
    console.log('current path: '.concat(path));
    switch (path) {
      case 'nidoca-flex-container':
        return html` <nidoca-flex-container></nidoca-flex-container> `;
      case 'nidoca-accordion':
        return html` <nidoca-accordion></nidoca-accordion> `;
      case 'nidoca-accordion-item':
        return html` <nidoca-accordion-item></nidoca-accordion-item> `;
      case 'nidoca-box':
        return html` <nidoca-box></nidoca-box> `;
      case 'nidoca-wizard':
        return html` <nidoca-wizard></nidoca-wizard> `;
      case 'nidoca-chip':
        return html` <nidoca-chip></nidoca-chip> `;
      case 'nidoca-progress':
        return html` <nidoca-progress></nidoca-progress> `;
      case 'nidoca-border':
        return html` <nidoca-border></nidoca-border> `;
      case 'nidoca-floating-container':
        return html` <nidoca-floating-container></nidoca-floating-container> `;
      case 'nidoca-button':
        return html` <nidoca-button></nidoca-button> `;
      case 'nidoca-divider':
        return html` <nidoca-divider></nidoca-divider> `;
      case 'nidoca-grid-container':
        return html` <nidoca-grid-container></nidoca-grid-container> `;
      case 'nidoca-form':
        return html` <nidoca-form></nidoca-form> `;
      case 'nidoca-form-combobox':
        return html` <nidoca-form-combobox></nidoca-form-combobox> `;
      case 'nidoca-form-text':
        return html` <nidoca-form-text></nidoca-form-text> `;
      case 'nidoca-form-date':
        return html` <nidoca-form-date></nidoca-form-date> `;
      case 'nidoca-form-inputframe':
        return html` <nidoca-form-inputframe></nidoca-form-inputframe> `;
      case 'nidoca-icon':
        return html` <nidoca-icon></nidoca-icon> `;
      case 'nidoca-rich-media':
        return html` <nidoca-rich-media></nidoca-rich-media> `;
      case 'nidoca-captcha':
        return html` <nidoca-captcha></nidoca-captcha> `;
      case 'nidoca-link':
        return html` <nidoca-link></nidoca-link> `;
      case 'nidoca-list':
        return html` <nidoca-list></nidoca-list> `;
      case 'nidoca-list-item':
        return html` <nidoca-list-item></nidoca-list-item> `;
      case 'nidoca-top-app-bar':
        return html` <nidoca-top-app-bar></nidoca-top-app-bar> `;
      case 'nidoca-navigation':
        return html` <nidoca-navigation></nidoca-navigation> `;
      case 'nidoca-search-bar':
        return html` <nidoca-search-bar></nidoca-search-bar> `;
      case 'nidoca-navigation-link':
        return html` <nidoca-navigation-link></nidoca-navigation-link> `;
      case 'nidoca-visible':
        return html` <nidoca-visible></nidoca-visible> `;
      case 'nidoca-navigation-section':
        return html` <nidoca-navigation-section></nidoca-navigation-section> `;
      case 'nidoca-table':
        return html` <nidoca-table></nidoca-table> `;
      case 'nidoca-spacer':
        return html` <nidoca-spacer></nidoca-spacer> `;
      case 'nidoca-tabs':
        return html` <nidoca-tabs></nidoca-tabs> `;
      case 'nidoca-tab':
        return html` <nidoca-tab></nidoca-tab> `;
      case 'nidoca-tab-content':
        return html` <nidoca-tab-content></nidoca-tab-content> `;
      case 'nidoca-typography':
        return html` <nidoca-typography></nidoca-typography> `;
      case 'nidoca-dialog':
        return html` <nidoca-dialog></nidoca-dialog> `;
      case 'nidoca-showcase':
        return html` <nidoca-showcase></nidoca-showcase> `;
      case 'nidoca-showcase-dashboard-page':
      default:
        return html` <nidoca-showcase-dashboard-page></nidoca-showcase-dashboard-page> `;
    }
  }

  getAppTitle(): string {
    return 'nidoca showcase';
  }
}
