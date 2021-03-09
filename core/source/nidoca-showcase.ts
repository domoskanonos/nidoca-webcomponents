import {css, customElement, html, TemplateResult} from 'lit-element';
import {LitElement} from 'lit-element';
import {SpacerAlignment, SpacerSize} from './nidoca-spacer';
import {TextType} from './nidoca-form-text';
import {FormOutputData} from './nidoca-form-abstract-input-element';
import {FlexContainerProperties, FlexItemProperties, TypographyType} from '.';
import {NidocaTemplate} from './nidoca-template';

@customElement('nidoca-showcase')
export class NidocaShowcase extends NidocaTemplate {
  getContent(): TemplateResult {
    return html`
      <nidoca-progress>dsoidjf</nidoca-progress>
      
      
      <nidoca-code>class java {}</nidoca-code>
      
      <nidoca-form-switch></nidoca-form-switch>
      
      <nidoca-box cssStyle="height:600px; width:100%">
        <nidoca-table></nidoca-table>
      </nidoca-box>
      
      
      
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
