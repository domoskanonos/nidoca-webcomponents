import { customElement } from 'lit/decorators.js';
import { NidocaHtml } from '../abstract/nidoca-html';
import { Card } from '../nidoca-dashboard';
import { html, TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';

@customElement('nidoca-page-generic-app')
export class NidocaPageGenericApp extends NidocaHtml {

  @property({ type: Array })
  cards: Card[] = [
    { imgSrc: 'https://raw.githubusercontent.com/domoskanonos/nidoca-webcomponents/refs/heads/main/public/goal.webp', title: 'Ziele', description: 'Wir haben uns Ziele gesetzt, die wir erreichen wollen' },
    { imgSrc: 'https://raw.githubusercontent.com/domoskanonos/nidoca-webcomponents/refs/heads/main/public/friend.webp', title: 'Freunde', description: 'Wir haben Freunde, die uns bei unseren Plänen unterstützen' },
    { imgSrc: 'https://raw.githubusercontent.com/domoskanonos/nidoca-webcomponents/refs/heads/main/public/action.webp', title: 'Aktionen', description: 'Wir haben Aktionen geplant, die wir durchführen wollen' },
    { imgSrc: 'https://raw.githubusercontent.com/domoskanonos/nidoca-webcomponents/refs/heads/main/public/routine.webp', title: 'Routinen', description: 'Wir haben Routinen, die wir einhalten wollen' },
    { imgSrc: 'https://raw.githubusercontent.com/domoskanonos/nidoca-webcomponents/refs/heads/main/public/next_action.webp', title: 'Nächste Aktion', description: 'Hier gehts zu deinen nächsten Aktionen' },
    { imgSrc: 'https://raw.githubusercontent.com/domoskanonos/nidoca-webcomponents/refs/heads/main/public/habit.webp', title: 'Gewohnheiten', description: 'Hier gehts zu deinen Gewohnheiten' },
    { imgSrc: 'https://raw.githubusercontent.com/domoskanonos/nidoca-webcomponents/refs/heads/main/public/happiness.webp', title: 'Glück', description: 'Was ist eigentlich Glück' },
  ]

  render(): TemplateResult {
    return html`<nidoca-dashboard .cards="${this.cards}"></nidoca-dashboard>`;
  }

}
