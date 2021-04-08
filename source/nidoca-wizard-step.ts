import {css, customElement, html, property, LitElement, TemplateResult} from 'lit-element';
import {FlexAlignContent, FlexAlignItems, FlexDirection, FlexJustifyContent, FlexWrap, IconShadowType} from '.';
import {TypographyType} from './nidoca-typography';

export enum WizardStepState {
  CURRENT, COMPLETED, OPEN
}

@customElement('nidoca-wizard-step')
export class NidocaWizardStep extends LitElement {
  static styles = css`
    .wizard-step-connector {
      color: var(--app-color-surface);
      background-color: var(--app-color-surface-background);
      padding: var(--space-little);
    }

    .wizard-step-connector.selected {
      padding: var(--space-little);
      color: var(--app-color-primary);
      background-color: var(--app-color-primary-background);
    }
  `;

  @property()
  icon: string = '';

  @property()
  title: string = '';

  @property({type: WizardStepState})
  state: WizardStepState | undefined;

  index: number | undefined;
  first: boolean = false;

  @property({type: Boolean})
  last: boolean = false;

  render(): TemplateResult {
    return html`
        <nidoca-flex-container
          .flexDirection="${FlexDirection.ROW}"
          .flexWrap="${FlexWrap.NO_WRAP}"
          .flexJustifyContent="${FlexJustifyContent.FLEX_START}"
          .flexAlignItems="${FlexAlignItems.CENTER}"
          .flexAlignContent="${FlexAlignContent.SPACE_EVENLY}"
          containerStyle=""
          itemStyle=""
        >
        <nidoca-flex-container
        .flexDirection="${FlexDirection.COLUMN}"
        .flexWrap="${FlexWrap.NO_WRAP}"
        .flexJustifyContent="${FlexJustifyContent.SPACE_EVENLY}"
        .flexAlignItems="${FlexAlignItems.CENTER}"
        .flexAlignContent="${FlexAlignContent.SPACE_EVENLY}"
        containerStyle=""
        itemStyle=""
      >

          <nidoca-icon
            icon="${this.icon}"
            .iconShadowType="${IconShadowType.NONE}"
            .withIconSpace="${false}"
            .round="${true}"
            .clickable="${true}"
            .deactivated="${false}"
            color="${this.state == WizardStepState.COMPLETED ? 'var(--app-color-primary)' : this.state == WizardStepState.CURRENT ? 'var(--app-color-secondary)':  'var(--app-color-surface)'}"
            backgroundColor="${this.state == WizardStepState.COMPLETED
              ? 'var(--app-color-primary-background)'
              : this.state ==  WizardStepState.CURRENT ? 'var(--app-color-secondary-background)': 'var(--app-color-surface-background)'}"
            size="24"
            @nidoca-event-icon-clicked="${() => this.stepClicked()}"
            sizeUnit="px"
          >
          </nidoca-icon>

          <nidoca-typography .typographyType="${TypographyType.OVERLINE}" text="${this.title}"
          ><slot></slot>
        </nidoca-typography>


        </nidoca-flex-container>


        ${this.last ? html``: html`<nidoca-icon icon="label_important"></nidoca-icon>`}

      </nidoca-flex-container>
    `;
  }

  stepClicked() {
    let customEvent = new CustomEvent('nidoca-event-wizard-step-clicked', {
      detail: this.index,
      bubbles: true,
      composed: true,
    });
    console.debug('dispatch custom event type: %s, detail: %s', customEvent.type, JSON.stringify(customEvent.detail));
    this.dispatchEvent(customEvent);
  }
}
