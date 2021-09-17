import {css, html, TemplateResult,LitElement} from "lit";
import {customElement, query} from "lit/decorators.js";
import {NidocaFlexLayoutAlignContent, NidocaFlexLayoutAlignItems, NidocaFlexLayoutDirection, NidocaFlexLayoutJustifyContent, NidocaFlexLayoutWrap} from ".";
import {NidocaWizardStep, WizardStepState} from "./nidoca-wizard-step";

@customElement("nidoca-wizard")
export class NidocaWizard extends LitElement {
  static styles = css``;

  @query("#wizardSlot")
  private wizardSlot: HTMLSlotElement | undefined;

  render(): any {
    return html`
      <nidoca-flex-layout
        .flexDirection="${NidocaFlexLayoutDirection.ROW}"
        .flexWrap="${NidocaFlexLayoutWrap.NO_WRAP}"
        .flexJustifyContent="${NidocaFlexLayoutJustifyContent.FLEX_START}"
        .flexAlignItems="${NidocaFlexLayoutAlignItems.FLEX_START}"
        .flexAlignContent="${NidocaFlexLayoutAlignContent.SPACE_EVENLY}"
        containerStyle=""
        itemStyle=""
        @nidoca-event-wizard-step-clicked="${(event: CustomEvent) => this.stepClicked(event)}"
      >
        <slot id="wizardSlot" @slotchange="${(event: Event) => this.slotChanged(event)}"></slot>
      </nidoca-flex-layout>
    `;
  }

  slotChanged(event: Event) {
    const slotElement: HTMLSlotElement = <HTMLSlotElement>event.target;
    if (slotElement == undefined) {
      return;
    }
    const elements: Element[] = slotElement.assignedElements();
    let selectedStepIndex: number = 0;
    for (let index = 0; index < elements.length; index++) {
      const element: Element = elements[index];
      if (element instanceof NidocaWizardStep) {
        element.index = index;
        if (element.state == WizardStepState.CURRENT) {
          selectedStepIndex = index;
        }
        if (element.index == elements.length - 1) {
          element.isLast = true;
        }
      }
    }
    this.changeState(selectedStepIndex);
  }

  stepClicked(event: CustomEvent<any>) {
    const selectedStepIndex: number = event.detail;
    console.debug("wizard step clicked, selectedStepIndex: %s", selectedStepIndex);
    this.changeState(selectedStepIndex);
  }

  changeState(selectedStepIndex: number) {
    if (this.wizardSlot) {
      const elements: Element[] = this.wizardSlot.assignedElements();
      for (let index = 0; index < elements.length; index++) {
        const element: Element = elements[index];
        if (element instanceof NidocaWizardStep) {
          if (element.index !== undefined) {
            if (element.index < selectedStepIndex) {
              element.state = WizardStepState.COMPLETED;
            } else if (element.index == selectedStepIndex) {
              element.state = WizardStepState.CURRENT;
            } else {
              element.state = WizardStepState.OPEN;
            }
          }
        }
      }
    }
  }
}
