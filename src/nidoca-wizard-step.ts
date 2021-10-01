import {css, html, TemplateResult,LitElement} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {NidocaLayoutFlexAlignContent, NidocaLayoutFlexAlignItems, NidocaLayoutFlexDirection, NidocaLayoutFlexJustifyContent, NidocaLayoutFlexWrap, NidocaIconShadowType} from ".";
import {NidocaTypographyAlignment, NidocaTypographyType} from "./nidoca-typography";

export enum WizardStepState {
  CURRENT,
  COMPLETED,
  OPEN,
  FINISH,
}

@customElement("nidoca-wizard-step")
export class NidocaWizardStep extends LitElement {
  static styles = css`
    .wizard-step-connector {
      color: var(--app-color-surface);
      background-color: var(--app-color-surface-background);
      padding: var(--space-little);
    }

    .wizard-step-connector.selected {
      padding: var(--space-little);
      color: var(--mdc-theme-on-primary);
      background-color: var(--app-color-primary);
    }
  `;

  @property({type: String})
  icon: string = "";

  @property({type: String})
  title: string = "";

  @property({type: Number})
  state: WizardStepState | undefined;

  @property({type: Boolean})
  isLast: boolean = false;

  index: number | undefined;
  first: boolean = false;

  render(): any {
    return html`
      <nidoca-layout-flex
        .flexDirection="${NidocaLayoutFlexDirection.COLUMN}"
        .flexWrap="${NidocaLayoutFlexWrap.NO_WRAP}"
        .flexJustifyContent="${NidocaLayoutFlexJustifyContent.SPACE_EVENLY}"
        .flexAlignItems="${NidocaLayoutFlexAlignItems.FLEX_START}"
        .flexAlignContent="${NidocaLayoutFlexAlignContent.SPACE_EVENLY}"
        containerStyle=""
        itemStyle=""
      >
        <nidoca-layout-flex
          .flexDirection="${NidocaLayoutFlexDirection.ROW}"
          .flexWrap="${NidocaLayoutFlexWrap.NO_WRAP}"
          .flexJustifyContent="${NidocaLayoutFlexJustifyContent.FLEX_START}"
          .flexAlignItems="${NidocaLayoutFlexAlignItems.CENTER}"
          .flexAlignContent="${NidocaLayoutFlexAlignContent.SPACE_EVENLY}"
          containerStyle=""
          itemStyle=""
        >
          <nidoca-icon
            icon="${this.icon}"
            .iconShadowType="${NidocaIconShadowType.NONE}"
            .withIconSpace="${false}"
            .round="${true}"
            .clickable="${true}"
            .deactivated="${false}"
            color="${this.determineColor(this.state)}"
            backgroundColor="${this.determineBackgroundColor(this.state)}"
            size="24"
            @nidoca-event-icon-clicked="${() => this.stepClicked()}"
            sizeUnit="px"
          >
          </nidoca-icon>

          ${this.isLast ? html`` : html`<nidoca-icon
            color="${this.determineBackgroundColor(this.state)}"
            icon="label_important">
          </nidoca-icon>`}
        </nidoca-layout-flex>
        <nidoca-typography
          style="width:48px;"
          .typographyType="${NidocaTypographyType.OVERLINE}"
          typographyAlignment="${NidocaTypographyAlignment.CENTER}"
          text="${this.title}"
          ><slot></slot>
        </nidoca-typography>
      </nidoca-layout-flex>
    `;
  }

  private determineBackgroundColor(state: WizardStepState | undefined): string {
    return state == WizardStepState.COMPLETED
      ? "var(--app-color-primary)"
      : state == WizardStepState.CURRENT
        ? "var(--app-color-secondary-background)"
        : "var(--app-color-surface-background)";
  }

  private determineColor(state: WizardStepState | undefined): string {
    return state == WizardStepState.FINISH
      ? "var(--app-color-success)"
      : state == WizardStepState.COMPLETED
      ? "var(--mdc-theme-on-primary)"
      : state == WizardStepState.CURRENT
      ? "var(--app-color-secondary)"
      : "var(--app-color-surface)";
  }

  stepClicked() {
    const customEvent = new CustomEvent("nidoca-event-wizard-step-clicked", {
      detail: this.index,
      bubbles: true,
      composed: true,
    });
    console.debug("dispatch custom event type: %s, detail: %s", customEvent.type, JSON.stringify(customEvent.detail));
    this.dispatchEvent(customEvent);
  }
}
