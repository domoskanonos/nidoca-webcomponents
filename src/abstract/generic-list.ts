import { html, TemplateResult } from "lit-html";
import { property, state } from 'lit/decorators.js';
import { NidocaHtml } from "./nidoca-html";
import { NidocaTheme } from "../nidoca-meta";

export abstract class NidocaAbstractGenericList<T> extends NidocaHtml {

  @property({ type: NidocaTheme, converter: String })
  theme: string = NidocaTheme.surface;

  @property({ type: Array })
  textFields: string[] = [];

  @property({ type: String })
  groupByField = '';

  @property({ type: String })
  imgSrcField = '';

  @property({ type: String })
  rightIcon = '';

  @state() data: T[] = [];

  render() {
    // Noch keine Daten -> Ladeanzeige
    if (!this.data.length) {
      return html`<p>Loading data...</p>`;
    }

    // Prüfen, ob Gruppierung notwendig
    if (!this.groupByField || this.groupByField === '') {
      // KEINE Gruppierung (Originalcode)
      return html`
            <nidoca-list theme="${this.theme}">
              ${this.data.map((item: any) => this.renderListItem(item))}
            </nidoca-list>
          `;
    } else {
      // MIT Gruppierung
      const groupMap: Record<string, any[]> = this.data.reduce(
        (acc: Record<string, any[]>, item: any) => {
          const groupKey = item[this.groupByField] || 'UNBEKANNT';
          if (!acc[groupKey]) {
            acc[groupKey] = [];
          }
          acc[groupKey].push(item);
          return acc;
        },
        {}
      );

      return html`
            ${Object.keys(groupMap).map((groupValue) => {
        const groupItems = groupMap[groupValue];
        return html`
                <nidoca-list-section theme="${this.theme}">${groupValue}</nidoca-list-section>
                <nidoca-list theme="${this.theme}">
                  ${groupItems.map((item: any) => this.renderListItem(item))}
                </nidoca-list>
              `;
      })}
          `;
    }
  }

  renderListItem(item: any): TemplateResult {
    return html`
            <nidoca-list-item
              @click="${() => this.itemClicked(item)}"
              theme="${this.theme}"
              primaryText="${item[this.textFields[0]] || ''}"
              secondaryText="${item[this.textFields[1]] || ''}"
              tertiaryText="${item[this.textFields[2]] || ''}"
              infoText="${item[this.textFields[3]] || ''}"
            >
              <nidoca-img-round width="64px" width="64px" slot="left" src="${this.renderImg(item[this.textFields[0]] || '', item[this.imgSrcField])}"></nidoca-img-round>
              <nidoca-icon slot="right" icon="${this.rightIcon}"></nidoca-icon>
            </nidoca-list-item>
                  `;
  }

  renderImg(text: string, base64encodedImg: string): string {
    if (base64encodedImg == undefined || base64encodedImg == null || base64encodedImg == '') {
      return NidocaImgHelper.generateImageBase64(text, '#555555', '#ffffff');
    } else { return base64encodedImg }
  }

  abstract itemClicked(item: T): void;

}


