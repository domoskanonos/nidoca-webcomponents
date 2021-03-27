import {css, customElement, html, property, LitElement, TemplateResult} from 'lit-element';
import {TypographyType} from './nidoca-typography';

@customElement('nidoca-wizard-step')
export class NidocaWizardStep extends LitElement {
  static styles = css`
    .WIZARD_STEP,
    ::slotted(.WIZARD_STEP) {
     
    }



  `;

  @property()
  icon: string = '';

  @property()
  title: string = '';

  @property()
  selected: boolean = false;

  render(): TemplateResult {
    return html`
      <div class="WIZARD_STEP">
        <div class="WIZARD_ICON">
          <nidoca-icon
          backgroundColor="${this.selected ? 'var(--app-color-primary-background)' : ''}"
          color="${this.selected ? 'var(--app-color-primary)' : ''}"
            icon="${this.icon}"
            .clickable="${true}"
            .round="${true}"
            @nidoca-event-icon-clicked="${() => this.dddclicked()}"
          ></nidoca-icon>
        </div>
        <div class="WIZARD_TITLE">
          <nidoca-typography .typographyType="${TypographyType.OVERLINE}" text="${this.title}"></nidoca-typography>
        </div>
      </div>
    `;
  }

  dddclicked() {
    throw new Error('Method not implemented.');
  }
}
