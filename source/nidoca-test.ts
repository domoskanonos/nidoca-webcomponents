import {css, customElement, html, property, unsafeCSS} from 'lit-element';
import {LitElement} from 'lit-element';
import {InputfieldMode, InputfieldType} from "./nidoca-inputfield";

@customElement('nidoca-test')
export class NidocaTest extends LitElement {
    static styles = css`
   
  `;

    render() {
        return html`
      
      <nidoca-icon
            clickable="true"
            icon="filter_list"
            title="njiuhuihuihuihui"
            .deactivated="${true}"
          ></nidoca-icon>
      
     
      
      
    `;
    }


}
