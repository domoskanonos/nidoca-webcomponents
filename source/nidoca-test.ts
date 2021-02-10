import {css, customElement, html, property, unsafeCSS} from 'lit-element';
import {LitElement} from 'lit-element';
import {ButtonType, NidocaButton} from "./nidoca-button";
import {NidocaLink, NidocaLinkInterface} from "./nidoca-link";
import {KeyValuePair} from "@domoskanonos/frontend-basis";

@customElement('nidoca-core')
export class NidocaTest extends LitElement {
    static styles = css`
   
  `;

    render() {

        this.ccc();
        return html`


      <nidoca-link text="Mein Button"
      ></nidoca-link>
      
     
      
      
    `;
    }

    static enumToComboboxItems(enumeration: any): KeyValuePair[] {
        let options: KeyValuePair[] = [];
        Object.keys(enumeration).forEach((key) => {
            options.push(<KeyValuePair>{key: key, value: enumeration[key]});
        });
        return options;
    }

    public ccc():void {


       NidocaTest.enumToComboboxItems(<NidocaLinkInterface>{}).forEach(value => {console.log(value)});

        let ownKeys = Reflect.ownKeys(new NidocaLink());
        let x :any = Object.getOwnPropertyDescriptor(new NidocaLink(), "_changedProperties");
        if(x){

            for (const value of x.value) {
                //console.log(value);

            }

        }
        Object.getOwnPropertyNames(new NidocaLink()).forEach(value => {
            console.log(value);
        })
    }
}
