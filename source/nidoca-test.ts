import {css, customElement, html, property, unsafeCSS} from 'lit-element';
import {LitElement} from 'lit-element';
import {InputfieldMode, InputfieldType} from "./nidoca-inputfield";

@customElement('nidoca-test')
export class NidocaTest extends LitElement {
    static styles = css`
   
  `;

    render() {
      
      
      this.dodo();
        return html`
      
          
          huhu
      <nidoca-search-bar
        placeholder="links"
        value="Hallo"
      ></nidoca-search-bar>
      
     
      
      
    `;
    }
    
    
    dodo():void {
      
      
      
      window.customElements.whenDefined("").then(value => {
      console.log("jidoffjdiofjidofjfio" +value);  
      });
      
      
    }


}
