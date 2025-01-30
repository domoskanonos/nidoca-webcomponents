import { customElement, property, state } from "lit/decorators.js";
import { html } from "lit";
import { NidocaHtml } from "../abstract/nidoca-html";

@customElement('nidoca-generic-crud')
export class NidocaGenericCRUD extends NidocaHtml {

    @state()
    listView: boolean = true;

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
            console.log('Item changed crud:', this.item);
            this.title = (this.item as any).constructor.name;
        }
        if (changedProperties.has('key')) {
            // TODO: Implement key change
        }
    }

    protected render(): unknown {
        console.log('render generic crud' + JSON.stringify(this.data));
        return html`
        <nidoca-generic-edit .item="${this.item}" key="${this.key}" title="${this.title}"></nidoca-generic-edit>
        <nidoca-generic-list-search .data="${this.data}"></nidoca-generic-list-search>`;
    }



    /**
     * 
     *         <nidoca-list-item
        @click="${() => this.itemClicked(item)}"
        theme="${this.theme}"
        primaryText="${item.name || ''}"
        secondaryText="${item.email || ''}"
        tertiaryText="${item.phone || ''}"
        infoText="${item.energy || ''}"
      >
        <nidoca-img-round
          width="64px"
          height="64px"
          slot="left"
          src="${item.image ? item.image : NidocaImgHelper.renderImgText(item.name)}"
        ></nidoca-img-round>
        <nidoca-icon slot="right" icon=""></nidoca-icon>
      </nidoca-list-item>
     * 
     */

}