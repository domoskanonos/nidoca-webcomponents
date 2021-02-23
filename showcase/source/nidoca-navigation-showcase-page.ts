import {NavigationStyle} from '@domoskanonos/nidoca-core';
import {customElement, html, property, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-navigation-showcase-page')
export class NidocaNavigationShowcasePage extends NidocaShowcaseTemplate {
  @property()
  closed: boolean | undefined | null = false;

  @property()
  navigationType: string | undefined | null = '';

  @property()
  navigationStyle: NavigationStyle | undefined | null = undefined;

  getMainComponent(): TemplateResult {
    return html``;
  }
}
