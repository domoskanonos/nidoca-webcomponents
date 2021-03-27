import {customElement, html, TemplateResult} from 'lit-element';
import {IconShadowType} from '.';
import {AccordionType} from './nidoca-accordion';
import {NidocaTemplate} from './nidoca-template';

@customElement('nidoca-showcase')
export class NidocaShowcase extends NidocaTemplate {
  getContent(): TemplateResult {
    return html`
      <nidoca-wizard>
        <nidoca-wizard-step icon="home" .selected="${true}"></nidoca-wizard-step>
        <nidoca-wizard-step icon="home"></nidoca-wizard-step>
        <nidoca-wizard-step icon="home"></nidoca-wizard-step>
        <nidoca-wizard-step icon="home"></nidoca-wizard-step>
      </nidoca-wizard>


      <nidoca-top-app-bar>
          <div slot="leftComponents">j</div>
          <div slot="mainComponents">justifyj</div>
          <div slot="rightComponents">j</div>
          <div slot="prominentComponents">j</div>
          </nidoca-top-app-bar>
    `;
  }

  getSidebarContent(): TemplateResult {
    return html`
      <nidoca-navigation
        @nidoca-event-link-clicked="${(event: CustomEvent) => this.navigationLinkClicked(event)}"
        .closed="${this.navigationClosed}"
      >
      </nidoca-navigation>
    `;
  }

  navigationLinkClicked(event: CustomEvent<any>): void {
    console.warn('Method not implemented. event detail: %s' + event.detail);
  }
}
