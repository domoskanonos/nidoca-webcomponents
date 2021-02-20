import {NidocaTemplate, RichMediaProperties} from '@domoskanonos/nidoca-core';
import {customElement, html, property, TemplateResult} from 'lit-element';

@customElement('nidoca-rich-media-showcase-page')
export class NidocaRichMediaShowcasePage extends NidocaTemplate {
  @property()
  src: string | undefined | null = '';

  @property()
  richMediaType: string | undefined | null = '';

  @property()
  richMediaProperties: RichMediaProperties[] | undefined | null = [];

  getMainComponent(): TemplateResult {
    return html``;
  }
  getLeftNavigationContent(): TemplateResult {
    return html``;
  }
  getTopContent(): TemplateResult {
    return html``;
  }
}
