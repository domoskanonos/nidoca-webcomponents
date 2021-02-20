import {NidocaTemplate} from '@domoskanonos/nidoca-core';
import {customElement, html, LitElement, property, TemplateResult} from 'lit-element';

@customElement('nidoca-top-app-bar-showcase-page')
export class NidocaTopAppBarShowcasePage extends NidocaTemplate {
  @property()
  leftComponents: LitElement[] | undefined | null = [];

  @property()
  mainComponents: LitElement[] | undefined | null = [];

  @property()
  rightComponents: LitElement[] | undefined | null = [];

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
