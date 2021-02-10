import {css, customElement, html} from 'lit-element';
import {LitElement} from 'lit-element';
import {InputfieldType, NidocaInputfield} from "./nidoca-inputfield";
import {NidocaFormCombobox} from "./nidoca-form-combobox";

@customElement('nidoca-showcase')
export class NidocaShowcase extends LitElement {
    static styles = css`
   
  `;

    render() {
        return html`<nidoca-form-combobox .options="${NidocaFormCombobox.enumToOptions(InputfieldType)}"
                           label="hallo"
                           value="${InputfieldType.TEXTAREA}">
                           
                           
                           
</nidoca-form-combobox>`;
    }


}
