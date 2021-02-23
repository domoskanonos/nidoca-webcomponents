import {ProgressType} from '@domoskanonos/nidoca-core';
import {customElement, html, property, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-progress-showcase-page')
export class NidocaProgressShowcasePage extends NidocaShowcaseTemplate {
  @property()
  progressType: ProgressType | undefined | null = undefined;

  getMainComponent(): TemplateResult {
    return html``;
  }
}
