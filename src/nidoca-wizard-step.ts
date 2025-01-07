import { css, html, TemplateResult, LitElement } from 'lit';
import { NidocaHtml } from './abstract/nidoca-html';

import { customElement } from 'lit/decorators.js';
import { property } from 'lit/decorators.js';
import { NidocaIconShadowType } from './nidoca-icon-extended';


export enum WizardStepState {
  current,
  completed,
  open,
  finish,
}

@customElement('nidoca-wizard-step')
export class NidocaWizardStep extends NidocaHtml {
  static styles = css`
    .wizard-step-connector {
      color: var(--app-color-surface);
      background-color: var(--app-color-surface-background);
      padding: var(--space);
    }

    .wizard-step-connector.selected {
      padding: var(--space);
      color: var(--mdc-theme-on-primary);
      background-color: var(--app-text-color-primary);
    }
  `;

  @property({ type: String })
  icon: string = '';

  @property({ type: String })
  primaryText: string = '';

  @property({ type: Number })
  state: WizardStepState | undefined;

  @property({ type: Boolean })
  isLast: boolean = false;

  index: number | undefined;
  first: boolean = false;

  render(): TemplateResult {
    return html`
      <div
        style="display:flex;flex-direction:row;flex-wrap:nowrap;align-items:flex-start;justify-content:space-evenly;align-content:space-evenly;"
      >
        <div
          style="display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;justify-content:flex-start;align-content:space-evenly;"
        >
          <nidoca-icon
            icon="${this.icon}"
            .iconShadowType="${NidocaIconShadowType.none}"
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

          ${this.isLast
        ? html``
        : html`<nidoca-icon color="${this.determineBackgroundColor(this.state)}" icon="label_important">
              </nidoca-icon>`}
        </div>
        <nidoca-text style="width:48px;" text="${this.primaryText}"><slot></slot> </nidoca-text>
      </div>
    `;
  }

  private determineBackgroundColor(state: WizardStepState | undefined): string {
    return state == WizardStepState.completed
      ? 'var(--app-color-text-primary)'
      : state == WizardStepState.current
        ? 'var(--app-color-secondary-background)'
        : 'var(--app-color-surface-background)';
  }

  private determineColor(state: WizardStepState | undefined): string {
    return state == WizardStepState.finish
      ? 'var(--app-color-success)'
      : state == WizardStepState.completed
        ? 'var(--mdc-theme-on-primary)'
        : state == WizardStepState.current
          ? 'var(--app-color-text-secondary)'
          : 'var(--app-color-text-surface)';
  }

  stepClicked() {
    const customEvent = new CustomEvent('nidoca-event-wizard-step-clicked', {
      detail: this.index,
      bubbles: true,
      composed: true,
    });
    console.debug('dispatch custom event type: %s, detail: %s', customEvent.type, JSON.stringify(customEvent.detail));
    this.dispatchEvent(customEvent);
  }
}
