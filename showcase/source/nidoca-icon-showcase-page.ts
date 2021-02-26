import {customElement, html, property, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-icon-showcase-page')
export class NidocaIconShowcasePage extends NidocaShowcaseTemplate {
  @property()
  icon: string | null | undefined = '';

  @property()
  color: string | undefined | null = '';

  @property()
  backgroundColor: string | undefined | null = '';

  @property()
  iconShadowType: string | undefined | null = '';

  @property()
  size: number | undefined | null = undefined;

  @property()
  sizeUnit: string | undefined | null = '';

  @property()
  iconTitle: string | undefined | null = '';

  @property()
  withIconSpace: boolean | undefined | null = false;

  @property()
  round: boolean | undefined | null = false;

  @property()
  clickable: boolean | undefined | null = false;

  @property()
  deactivated: boolean | undefined | null = false;

  getMainComponent(): TemplateResult {
    return html``;
  }
}
