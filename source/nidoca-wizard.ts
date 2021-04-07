import {css, customElement, html, property, LitElement, TemplateResult} from 'lit-element';
import {FlexAlignContent, FlexAlignItems, FlexDirection, FlexJustifyContent, FlexWrap} from '.';
import {NidocaWizardStep} from './nidoca-wizard-step';

@customElement('nidoca-wizard')
export class NidocaWizard extends LitElement {
  static styles = css``;

  render(): TemplateResult {
    return html`
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
        <slot @slotchange="${(event: Event) => this.slotChanged(event)}"></slot>
      </nidoca-flex-container>
    `;
  }

  slotChanged(event: Event) {
    let slotElement: HTMLSlotElement = <HTMLSlotElement>event.target;
    if (slotElement == undefined) {
      return;
    }
    let elements: Element[] = slotElement.assignedElements();
    for (let index = 0; index < elements.length; index++) {
      let element: Element = elements[index];
      if (element instanceof NidocaWizardStep) {
        var xxx = document.createElement('div');
        //xxx.setAttribute("style","padding-right:110px;");
        console.log('jdoifjdoifj');
        //element.parentElement?.appendChild(xxx);
        let classList = element.classList;
        if (!classList.contains('flexItem')) {
          //classList.add('flexItem');
        }
        if (!classList.contains('flexItemDevice')) {
          //classList.add('flexItemDevice');
        }
      }
    }
  }
}
