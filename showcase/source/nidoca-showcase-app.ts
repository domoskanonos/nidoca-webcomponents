import {RouterService} from '@domoskanonos/frontend-basis';
import {NidocaAbstractApp} from '@domoskanonos/nidoca-core';
import {customElement, html, TemplateResult} from 'lit-element';

@customElement('nidoca-showcase-app')
export class NidocaShowcaseApp extends NidocaAbstractApp {
  constructor() {
    super();
    RouterService.getUniqueInstance().subscribe(() => {
      this.requestUpdate().then(() => {
        console.log('requestUpdated completed');
      });
    });
  }

  async preRender(): Promise<void> {
    return super.preRender();
  }

  renderPage(): TemplateResult {
    let path = RouterService.getUniqueInstance().getCurrentPage();
    console.log('current path: '.concat(path));
    switch (path) {
      case 'nidoca-spacer':
        return html` <nidoca-spacer-showcase-page></nidoca-spacer-showcase-page> `;
      case 'nidoca-flex-container':
        return html` <nidoca-flex-container-showcase-page></nidoca-flex-container-showcase-page> `;
      case 'nidoca-floating-container':
        return html` <nidoca-floating-container-showcase-page></nidoca-floating-container-showcase-page> `;
      case 'nidoca-accordion':
        return html` <nidoca-accordion-showcase-page></nidoca-accordion-showcase-page> `;
      case 'nidoca-accordion-item':
        return html` <nidoca-accordion-item-showcase-page></nidoca-accordion-item-showcase-page> `;
      case 'nidoca-wizard':
        return html` <nidoca-wizard-showcase-page></nidoca-wizard-showcase-page> `;
      case 'nidoca-chip':
        return html` <nidoca-chip-showcase-page></nidoca-chip-showcase-page> `;
      case 'nidoca-code':
        return html` <nidoca-code-showcase-page></nidoca-code-showcase-page> `;
      case 'nidoca-progress':
        return html` <nidoca-progress-showcase-page></nidoca-progress-showcase-page> `;
      case 'nidoca-border':
        return html` <nidoca-border-showcase-page></nidoca-border-showcase-page> `;
      case 'nidoca-button':
        return html` <nidoca-button-showcase-page></nidoca-button-showcase-page> `;
      case 'nidoca-divider':
        return html` <nidoca-divider-showcase-page></nidoca-divider-showcase-page> `;
      case 'nidoca-form':
        return html` <nidoca-form-showcase-page></nidoca-form-showcase-page> `;
      case 'nidoca-form-combobox':
        return html` <nidoca-form-combobox-showcase-page></nidoca-form-combobox-showcase-page> `;
      case 'nidoca-form-text':
        return html` <nidoca-form-text-showcase-page></nidoca-form-text-showcase-page> `;
      case 'nidoca-form-date':
        return html` <nidoca-form-date-showcase-page></nidoca-form-date-showcase-page> `;
      case 'nidoca-form-switch':
        return html` <nidoca-form-switch-showcase-page></nidoca-form-switch-showcase-page> `;
      case 'nidoca-form-inputframe':
        return html` <nidoca-form-inputframe-showcase-page></nidoca-form-inputframe-showcase-page> `;
      case 'nidoca-icon':
        return html` <nidoca-icon-showcase-page></nidoca-icon-showcase-page> `;
      case 'nidoca-rich-media':
        return html` <nidoca-rich-media-showcase-page></nidoca-rich-media-showcase-page> `;
      case 'nidoca-captcha':
        return html` <nidoca-captcha-showcase-page></nidoca-captcha-showcase-page> `;
      case 'nidoca-link':
        return html` <nidoca-link-showcase-page></nidoca-link-showcase-page> `;
      case 'nidoca-list':
        return html` <nidoca-list-showcase-page></nidoca-list-showcase-page> `;
      case 'nidoca-list-item':
        return html` <nidoca-list-item-showcase-page></nidoca-list-item-showcase-page> `;
      case 'nidoca-top-app-bar':
        return html` <nidoca-top-app-bar-showcase-page></nidoca-top-app-bar-showcase-page> `;
      case 'nidoca-navigation':
        return html` <nidoca-navigation-showcase-page></nidoca-navigation-showcase-page> `;
      case 'nidoca-search-bar':
        return html` <nidoca-search-bar-showcase-page></nidoca-search-bar-showcase-page> `;
      case 'nidoca-navigation-link':
        return html` <nidoca-navigation-link-showcase-page></nidoca-navigation-link-showcase-page> `;
      case 'nidoca-visible':
        return html` <nidoca-visible-showcase-page></nidoca-visible-showcase-page> `;
      case 'nidoca-navigation-section':
        return html` <nidoca-navigation-section-showcase-page></nidoca-navigation-section-showcase-page> `;
      case 'nidoca-table':
        return html` <nidoca-table-showcase-page></nidoca-table-showcase-page> `;
      case 'nidoca-tabs':
        return html` <nidoca-tabs-showcase-page></nidoca-tabs-showcase-page> `;
      case 'nidoca-tab':
        return html` <nidoca-tab-showcase-page></nidoca-tab-showcase-page> `;
      case 'nidoca-tab-content':
        return html` <nidoca-tab-content-showcase-page></nidoca-tab-content-showcase-page> `;
      case 'nidoca-typography':
        return html` <nidoca-typography-showcase-page></nidoca-typography-showcase-page> `;
      case 'nidoca-dialog':
        return html` <nidoca-dialog-showcase-page></nidoca-dialog-showcase-page> `;
      case 'nidoca-showcase':
        return html` <nidoca-showcase-showcase-page></nidoca-showcase-showcase-page> `;
      case 'nidoca-showcase-get-started-page':
        return html` <nidoca-showcase-get-started-page></nidoca-showcase-get-started-page> `;
      case 'nidoca-showcase-dashboard-page':
      default:
        return html` <nidoca-showcase-dashboard-page></nidoca-showcase-dashboard-page> `;
    }
  }

  getAppTitle(): string {
    return 'nidoca showcase';
  }
}
