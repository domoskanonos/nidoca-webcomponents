import {NidocaTemplate, ProgressType} from '@domoskanonos/nidoca-core';
import {customElement, html, property, TemplateResult} from 'lit-element';

@customElement('nidoca-progress-showcase-page')
export class NidocaProgressShowcasePage extends NidocaTemplate {
  @property()
  progressType: ProgressType | undefined | null = undefined;

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
