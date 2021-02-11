import {css, customElement, html} from 'lit-element';
import {LitElement} from 'lit-element';
import {InputfieldType, NidocaInputfield} from "./nidoca-inputfield";
import {NidocaFormCombobox} from "./nidoca-form-combobox";

@customElement('nidoca-showcase')
export class NidocaShowcase extends LitElement {
    static styles = css`
   
  `;


    render() {
        

        return html`
            <nidoca-form-combobox name="combobox"
                                  label="Combobox Label"
                                  value="${InputfieldType.TEXTAREA}"
                                  .options="${NidocaFormCombobox.enumToOptions(InputfieldType)}"
                                  required="true"
                                  
            >


            </nidoca-form-combobox>`;
    }


}
