import {customElement, html, TemplateResult} from 'lit-element';
import {AccordionType} from './nidoca-accordion';
import {NidocaTemplate} from './nidoca-template';

@customElement('nidoca-showcase')
export class NidocaShowcase extends NidocaTemplate {
  getContent(): TemplateResult {
    return html`
      <nidoca-captcha></nidoca-captcha>
      <nidoca-accordion accordionType="${AccordionType.MULTI}">
        <nidoca-accordion-item header="Accordion 1" .opened="${true}"> <nidoca-rich-media></nidoca-rich-media> </nidoca-accordion-item>
        <nidoca-accordion-item header="Accordion 1"> <nidoca-rich-media></nidoca-rich-media> </nidoca-accordion-item>
      </nidoca-accordion>
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
