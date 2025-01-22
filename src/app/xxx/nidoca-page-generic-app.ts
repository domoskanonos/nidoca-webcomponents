import { customElement, property, state } from 'lit/decorators.js';
import { NidocaHtml } from '../../abstract/nidoca-html';
import { PropertyValues, TemplateResult, html } from 'lit';
import { Card, CardEvent } from '../../nidoca-dashboard';
import { GenericIndexedDB, Karmatica, Person } from '../../nidoca-webcomponents';

@customElement('nidoca-page-generic-app')
export class NidocaPageGenericApp extends NidocaHtml {

  @state()
  karmatica: Karmatica | undefined = undefined;

  @state()
  listView: boolean = true;

  @property({ type: Array })
  cards: Card[] = [
    {
      imgSrc: 'https://raw.githubusercontent.com/domoskanonos/nidoca-webcomponents/refs/heads/main/public/goal.webp',
      title: 'Ziele',
      description: 'Wir haben uns Ziele gesetzt, die wir erreichen wollen',
    },
    {
      imgSrc: 'https://raw.githubusercontent.com/domoskanonos/nidoca-webcomponents/refs/heads/main/public/friend.webp',
      title: 'Freunde',
      description: 'Wir haben Freunde, die uns bei unseren Plänen unterstützen',
    },
    {
      imgSrc: 'https://raw.githubusercontent.com/domoskanonos/nidoca-webcomponents/refs/heads/main/public/action.webp',
      title: 'Aktionen',
      description: 'Wir haben Aktionen geplant, die wir durchführen wollen',
    },
    {
      imgSrc: 'https://raw.githubusercontent.com/domoskanonos/nidoca-webcomponents/refs/heads/main/public/routine.webp',
      title: 'Routinen',
      description: 'Wir haben Routinen, die wir einhalten wollen',
    },
    {
      imgSrc: 'https://raw.githubusercontent.com/domoskanonos/nidoca-webcomponents/refs/heads/main/public/next_action.webp',
      title: 'Nächste Aktion',
      description: 'Hier gehts zu deinen nächsten Aktionen',
    },
    {
      imgSrc: 'https://raw.githubusercontent.com/domoskanonos/nidoca-webcomponents/refs/heads/main/public/habit.webp',
      title: 'Gewohnheiten',
      description: 'Hier gehts zu deinen Gewohnheiten',
    },
    {
      imgSrc: 'https://raw.githubusercontent.com/domoskanonos/nidoca-webcomponents/refs/heads/main/public/happiness.webp',
      title: 'Glück',
      description: 'Was ist eigentlich Glück',
    },
  ];

  @property({ type: Object })
  selectedCard: Card | null = this.cards[0];

  protected firstUpdated(_changedProperties: PropertyValues): void {
    const karmaticaDB = new GenericIndexedDB<Karmatica>("AppDatabase", "Karmatica", "id");
    console.log('Open karmatica');
    karmaticaDB.openDatabase().then(async () => {
      console.log('Load karmatica');
      this.karmatica = await karmaticaDB.get(1);
    });
  }

  render(): TemplateResult {
    return this.listView
      ? html`
          <person-list-crud 
            imgSrc="${this.selectedCard?.imgSrc}"
            .persons="${this.karmatica?.friends}">
          </person-list-crud>
        `
      : html`
          <nidoca-dashboard
            @nidoca-event-dashboard-card-clicked="${(event: CustomEvent) => this.cardClicked(event)}"
            .cards="${this.cards}"
          >
          </nidoca-dashboard>
        `;
  }

  private cardClicked(event: CustomEvent) {
    console.log('cardClicked');
    const cardEvent: CardEvent = event.detail;
    this.selectedCard = cardEvent.card;
    this.listView = true;
  }
}