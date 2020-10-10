import {css, customElement, html, property, unsafeCSS} from 'lit-element';
import {LitElement} from 'lit-element';
import {InputfieldMode, InputfieldType} from "./nidoca-inputfield";

@customElement('nidoca-test')
export class NidocaTest extends LitElement {
    static styles = css`
   
  `;

    render() {
        return html`
      
      <nidoca-navigation-section
        slot="links"
        text="Test"
      ></nidoca-navigation-section>
      
     
      
      
    `;
    }


}
