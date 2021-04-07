import {css, customElement, html, property, LitElement, TemplateResult} from 'lit-element';
import {FlexAlignContent, FlexAlignItems, FlexDirection, FlexJustifyContent, FlexWrap, IconShadowType} from '.';
import {TypographyType} from './nidoca-typography';

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

  @property({type: Boolean})
  selected: boolean = false;

  index: number | undefined;

  render(): TemplateResult {
    return html`
      <nidoca-flex-container
        .devices="${[]}"
        .flexDirection="${FlexDirection.COLUMN}"
        .flexWrap="${FlexWrap.NO_WRAP}"
        .flexJustifyContent="${FlexJustifyContent.SPACE_EVENLY}"
        .flexAlignItems="${FlexAlignItems.CENTER}"
        .flexAlignContent="${FlexAlignContent.SPACE_EVENLY}"
        containerStyle=""
        itemStyle=""
      >
        <nidoca-flex-container
          .devices="${[]}"
          .flexDirection="${FlexDirection.ROW}"
          .flexWrap="${FlexWrap.NO_WRAP}"
          .flexJustifyContent="${FlexJustifyContent.FLEX_START}"
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
            color="${this.selected ? 'var(--app-color-primary)' : 'var(--app-color-surface)'}"
            backgroundColor="${this.selected
              ? 'var(--app-color-primary-background)'
              : 'var(--app-color-surface-background)'}"
            size="24"
            @nidoca-event-icon-clicked="${() => this.stepClicked()}"
            sizeUnit="px"
          >
          </nidoca-icon>

          <div class="wizard-step-connector${this.selected ? ' selected' : ''}"></div>
        </nidoca-flex-container>

        <nidoca-typography .typographyType="${TypographyType.OVERLINE}" text="${this.title}"
          ><slot></slot>
        </nidoca-typography>
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
