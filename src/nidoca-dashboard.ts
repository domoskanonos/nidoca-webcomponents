import { css, html, TemplateResult, LitElement } from 'lit';
import { NidocaHtml } from './abstract/nidoca-html';
import { customElement } from 'lit/decorators.js';
import { property } from 'lit/decorators.js';

export interface Card {
  imgSrc: string;
  title: string;
  description: string;
}

export interface CardEvent {
  index:number;
  card:Card;
}

@customElement('nidoca-dashboard')
export class NidocaDashboard extends NidocaHtml {
  static styles = css`
    
    :host {
      display: block;
    }

    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: var(--space-2);
      max-width:1007px;
      margin: 0 auto;
    }

    .item {
      flex: 0 0 calc(50% - var(--space-2));
      box-sizing: border-box;
      cursor: pointer;
    }

    @media only screen and (max-width: 512px) {
      .item {
        flex: 0 0 calc(100% - var(--space-2));
      }
    }

  `;

  @property({ type: Array })
  cards: Card[] = [];

  render(): TemplateResult {
    return html`
      <div class="container">
        ${this.cards.map((card:Card) => html`
          <nidoca-card class="item" @click="${(card) => this.clicked()}">
          <nidoca-ripple>
          <nidoca-img 
            src="${card.imgSrc}" 
            alt="${card.title}" ></nidoca-img>
          <nidoca-box>
            <nidoca-text-h6>${card.title}</nidoca-text-h6>
            <nidoca-text-body>${card.description}</nidoca-text-body>
            </nidoca-box>
            </nidoca-ripple>
      </nidoca-card>
      `)}
      </div>
    `;
  }

  clicked(card: Card) {
    this.dispatchEvent(
      new CustomEvent('nidoca-event-dashboard-card-clicked', {
        detail: <CardEvent>{index:-1,card: card},
        bubbles: true,
        composed: true,
      })
    );
  }


}