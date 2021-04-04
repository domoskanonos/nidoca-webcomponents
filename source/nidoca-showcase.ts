import {customElement, html, TemplateResult} from 'lit-element';
import {IconShadowType} from '.';
import {AccordionType} from './nidoca-accordion';
import { BorderProperty as BorderProperty, BorderSize, ShadowType } from './nidoca-border';
import {NidocaTemplate} from './nidoca-template';

@customElement('nidoca-showcase')
export class NidocaShowcase extends NidocaTemplate {
  getContent(): TemplateResult {
    return html`
     
  
    <br/><br/><br/><br/><br/>

    <nidoca-captcha >
    
    huih
    
    </nidoca-captcha>

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
