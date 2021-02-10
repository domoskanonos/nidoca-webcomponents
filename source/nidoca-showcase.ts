import {css, customElement, html} from 'lit-element';
import {LitElement} from 'lit-element';
import {InputfieldType, NidocaInputfield} from "./nidoca-inputfield";

@customElement('nidoca-showcase')
export class NidocaShowcase extends LitElement {
    static styles = css`
   
  `;

    render() {
        return html`<nidoca-form-combobox .options="${NidocaInputfield.enumToComboboxItems(InputfieldType)}"
                           label="hallo"
                           value="${InputfieldType.TEXTAREA}">
                           
                           
                           
</nidoca-form-combobox>`;
    }


}
