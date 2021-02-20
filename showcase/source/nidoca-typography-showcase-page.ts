import {NidocaTemplate, TypographyAlignment, TypographyType} from '@domoskanonos/nidoca-core';
import {customElement, html, property, TemplateResult} from 'lit-element';

@customElement('nidoca-typography-showcase-page')
export class NidocaTypographyShowcasePage extends NidocaTemplate {
  @property()
  typographyType: TypographyType | undefined | null = undefined;

  @property()
  typographyAlignment: TypographyAlignment | undefined | null = undefined;

  @property()
  text: string | undefined | null = '';

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
