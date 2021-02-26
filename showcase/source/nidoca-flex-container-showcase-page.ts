import {customElement, html, property, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-flex-showcase-page')
export class NidocaFlexShowcasePage extends NidocaShowcaseTemplate {
  @property()
  flexDirection: string | undefined | null = '';

  @property()
  flexWrap: string | undefined | null = '';

  @property()
  flexJustifyContent: string | undefined | null = '';

  @property()
  flexAlignItems: string | undefined | null = '';

  @property()
  flexAlignContent: string | undefined | null = '';

  @property()
  flexContainerProperties: string[] | undefined | null = [];

  @property()
  flexItemProperties: string[] | undefined | null = [];

  @property()
  flexItemBasisValue: string | undefined | null = '';

  @property()
  flexItemBasisValues: string[] | undefined | null = [];

  @property()
  slotElement: HTMLSlotElement | undefined | null = undefined;

  getMainComponent(): TemplateResult {
    return html``;
  }
}
