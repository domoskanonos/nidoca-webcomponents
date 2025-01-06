import { LitElement, html, css, nothing, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { NidocaImg } from './nidoca-img';
import { NidocaHtml } from './nidoca-html';
import { NidocaTheme } from './nidoca-meta';
import { NidocaImgHelper } from './nidoca-webcomponents';

@customElement('nidoca-api-list')
export class NidocaApiList extends NidocaHtml {

  @property({ type: NidocaTheme, converter: String })
  theme: string = NidocaTheme.primary;

  @property({ type: String }) endpoint = '';

  @property({ type: String }) primaryTextField = '';
  @property({ type: String }) secondaryTextField = '';
  @property({ type: String }) groupByField = '';

  @property({ type: String }) imgSrcField = '';
  @property({ type: String }) rightIcon = '';

  @state() data: any[] = [];

  connectedCallback() {
    super.connectedCallback();
    this.fetchData();
  }

  async fetchData() {
    if (!this.endpoint) return;
    try {
      const response = await fetch(this.endpoint);
      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.status}`);
      }
      this.data = await response.json();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  render() {
    // Noch keine Daten -> Ladeanzeige
    if (!this.data.length) {
      return html`<p>Loading data...</p>`;
    }

    // Prüfen, ob Gruppierung notwendig
    if (!this.groupByField) {
      // KEINE Gruppierung (Originalcode)
      return html`
            <nidoca-list theme="${this.theme}">
              ${this.data.map((item) => html`
                <nidoca-list-item
                  @click="${() => this.itemClicked(item)}"
                  theme="${this.theme}"
                  primaryText="${item[this.primaryTextField] || ''}"
                  secondaryText="${item[this.secondaryTextField] || ''}"
                >
                  <nidoca-img-round width="64px" width="64px" slot="left" src="${this.imgSrcField}"></nidoca-img-round>
                  <nidoca-icon slot="right" icon="chevron_right"></nidoca-icon>
                </nidoca-list-item>
              `)}
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
                  ${groupItems.map((item) => html`
                    <nidoca-list-item
                      @click="${() => this.itemClicked(item)}"
                      theme="${this.theme}"
                      primaryText="${item[this.primaryTextField] || ''}"
                      secondaryText="${item[this.secondaryTextField] || ''}"
                    >
                      <nidoca-img-round width="64px" width="64px" slot="left" src="${this.renderImg(item[this.primaryTextField] || '', item[this.imgSrcField])}"></nidoca-img-round>
                      <nidoca-icon slot="right" icon="${this.rightIcon}"></nidoca-icon>
                    </nidoca-list-item>
                  `)}
                </nidoca-list>
              `;
      })}
          `;
    }
  }
  renderImg(text: string, base64encodedImg: string): string {
    if (base64encodedImg == undefined || base64encodedImg == null || base64encodedImg == '') {
      return NidocaImgHelper.generateImageBase64(text, '#555555', '#ffffff');
    } else { return base64encodedImg }
  }

  itemClicked(item: any) {
    this.dispatchEvent(
      new CustomEvent('nidoca-event-nidoca-api-list-item-clicked', {
        detail: item,
        bubbles: true,
        composed: true,
      })
    );
  }

  static example(slotName: string = ''): TemplateResult {
    return html`
          <nidoca-api-list 
            theme="primary"
            slot="${slotName}"
            endpoint="http://localhost:3000/recommended_actions"
            primaryTextField="action_title"
            rightIcon="chevron_right"
            secondaryTextField="action_description"
            groupByField="goal_title"
            imgSrcField="action_image"
            groupByField="action_energy"
          >
          </nidoca-api-list>
        `;
  }
}
