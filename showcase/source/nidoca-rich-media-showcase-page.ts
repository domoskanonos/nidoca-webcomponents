import {RichMediaProperties} from '@domoskanonos/nidoca-core';
import {customElement, html, property, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-rich-media-showcase-page')
export class NidocaRichMediaShowcasePage extends NidocaShowcaseTemplate {
  @property()
  src: string | undefined | null = '';

  @property()
  richMediaType: string | undefined | null = '';

  @property()
  richMediaProperties: RichMediaProperties[] | undefined | null = [];

  getMainComponent(): TemplateResult {
    return html``;
  }
}
