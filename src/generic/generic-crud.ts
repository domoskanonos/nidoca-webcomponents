import { customElement, property, state } from "lit/decorators.js";
import { Person } from "../app/xxx/person"; // Adjust the path as necessary
import { html } from "lit";
import { NidocaHtml } from "../abstract/nidoca-html";

@customElement('nidoca-generic-crud')
export class NidocaGenericCRUD extends NidocaHtml {

    @state()
    listView: boolean = true;

    @property({ type: String })
    imgSrc: string = '';

    @property({})
    data: any[] = [];

    @property({ type: Object })
    key: keyof any | null = null;

    @property({ type: Object })
    item: any = {};

    @property({ type: String })
    title: string = "";

    // Überwachen und Reagieren auf Änderungen an `key` oder `initObject`
    updated(changedProperties: Map<string | number | symbol, unknown>): void {
        if (changedProperties.has('item')) {
            console.log('Item changed:', this.item);
            this.title = (this.item as any).constructor.name;
        }
        if (changedProperties.has('key')) {
            // TODO: Implement key change
        }
    }

    protected render(): unknown {
        console.log('render xxx');
        return html`
        <nidoca-generic-edit .item="${this.item}" key="${this.key}" title="${this.title}">
        </nidoca-generic-edit>


                <person-list-search
            imgSrc="${this.imgSrc}" 
            .data="${this.data}">
        </person-list-search>


        
        `;
    }

}