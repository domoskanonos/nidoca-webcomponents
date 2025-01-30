import { customElement, state } from "lit/decorators.js";
import { html, PropertyValues } from "lit";
import { NidocaHtml } from "../abstract/nidoca-html";
import { NidocaGenericEdit, NidocaListSearch } from "../nidoca-webcomponents";

@customElement('nidoca-crud')
export class NidocaGenericCRUD extends NidocaHtml {

    @state()
    listView: boolean = true;

    @state()
    edit: NidocaGenericEdit|null = null;

    @state()
    listSearch: NidocaListSearch|null = null;


    


    render(): unknown {
        return html`<slot @slotchange="${(event: Event) => this.slotChanged(event)}"></slot>`;
    }

    updated(changedProperties: PropertyValues): void {
        super.updated(changedProperties);
        if (changedProperties.has('listSearch')) {
        }

        if(this.listView){
                
        } else {
            
        }

        
      }

    slotChanged(event: Event): void {
        const slotElement: HTMLSlotElement = <HTMLSlotElement>event.target;
        if (slotElement == undefined) {
          return;
        }
        const elements: Element[] = slotElement.assignedElements();
        for (let index = 0; index < elements.length; index++) {
          const element: Element = elements[index];

          if(element instanceof NidocaListSearch){
            this.listSearch = element;
          }

          if(element instanceof NidocaGenericEdit){
            this.edit = element;
          }

        }

      }




}