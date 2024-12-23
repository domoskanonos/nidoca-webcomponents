import { LitElement, html, css, nothing, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { NidocaImg } from './nidoca-img';

@customElement('nidoca-api-list')
export class NidocaApiList extends LitElement {

    @property({ type: String }) endpoint = '';
    @property({ type: String }) primaryTextField = '';
    @property({ type: String }) secondaryTextField = '';
    @property({ type: String }) imgSrc = '';
    @state() data = [];

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
        return html`
        ${this.data.length > 0
                ? html`
              <nidoca-list theme="primary">
       ${this.data.map(
                    (item) => html`
                    <nidoca-list-item
                        @click="${() => this.itemClicked(item)}"
                          theme="primary"
                          primaryText="${item[this.primaryTextField] || ''}"
                          secondaryText="${item[this.secondaryTextField] || ''}"
                        >
                          <nidoca-img-round width="64px" width="64px" slot="left" src="${this.imgSrc}"></nidoca-img-round>
                          <nidoca-icon slot="right" icon="chevron_right"></nidoca-icon>
                        </nidoca-list-item>
                    `
                )}
           </nidoca-list>
            `
                : html`<p>Loading data...</p>`}
    `;
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
          slot="${slotName}"
            endpoint="http://localhost:3000/recommended_actions"
            primaryTextField="action_title"
            secondaryTextField="action_description"
            imgSrc="${NidocaImg.exampleImage()}">
          </nidoca-api-list>
        `;
    }

}

