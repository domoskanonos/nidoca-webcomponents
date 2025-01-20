import { customElement } from 'lit/decorators.js';
import { NidocaHtml } from '../abstract/nidoca-html';
import { css, html, TemplateResult } from 'lit';

@customElement('nidoca-page-generic-app')
export class NidocaPageGenericApp extends NidocaHtml {
  static styles = css`
  
  
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--space-2);


    }

    .item {


    item-align: center;
  flex: 0 0 calc(50% - var(--space-2));
    
    }
  
  `;
  render(): TemplateResult {
    return html`
    
    
    <div class="container">
    
   <nidoca-card class="item" @click="${() => this.clicked()}">
          <nidoca-img 
            src="https://raw.githubusercontent.com/domoskanonos/nidoca-webcomponents/refs/heads/main/public/goal.webp" 
            alt="Goals" ></nidoca-img>
          <nidoca-box>
            <nidoca-text-h6>Ziele</nidoca-text-h6>
            <nidoca-text-body>Wir haben uns Ziele gesetzt, die wir erreichen wollen</nidoca-text-body>
            </nidoca-box>
      </nidoca-card>

      <nidoca-card class="item" @click="${() => this.clicked()}">
          <nidoca-img 
            src="https://raw.githubusercontent.com/domoskanonos/nidoca-webcomponents/refs/heads/main/public/friend.webp" 
            alt="Firends" ></nidoca-img>
          <nidoca-box>
            <nidoca-text-h6>Freunde</nidoca-text-h6>
            <nidoca-text-body>Wir haben Freunde, die uns bei unseren Plänen unterstützen</nidoca-text-body>
            </nidoca-box>
      </nidoca-card>


      <nidoca-card class="item" @click="${() => this.clicked()}">
          <nidoca-img 
            src="https://raw.githubusercontent.com/domoskanonos/nidoca-webcomponents/refs/heads/main/public/action.webp" 
            alt="Actions" ></nidoca-img>
          <nidoca-box>
            <nidoca-text-h6>Aktionen</nidoca-text-h6>
            <nidoca-text-body>Wir haben Aktionen geplant, die wir durchführen wollen</nidoca-text-body>
            </nidoca-box>
      </nidoca-card>

      <nidoca-card class="item" @click="${() => this.clicked()}">
          <nidoca-img 
            src="https://raw.githubusercontent.com/domoskanonos/nidoca-webcomponents/refs/heads/main/public/routine.webp" 
            alt="Routines" ></nidoca-img>
          <nidoca-box>
            <nidoca-text-h6>Routinen</nidoca-text-h6>
            <nidoca-text-body>Wir haben Routinen, die wir einhalten wollen</nidoca-text-body>
            </nidoca-box>
      </nidoca-card>
    
      <nidoca-card class="item" @click="${() => this.clicked()}">
          <nidoca-img 
            src="https://raw.githubusercontent.com/domoskanonos/nidoca-webcomponents/refs/heads/main/public/routine.webp" 
            alt="Routines" ></nidoca-img>
          <nidoca-box>
            <nidoca-text-h6>Routinen</nidoca-text-h6>
            <nidoca-text-body>Wir haben Routinen, die wir einhalten wollen</nidoca-text-body>
            </nidoca-box>
      </nidoca-card>

      
    
    </div>
    
    `;
  }
  clicked() {
    throw new Error('Method not implemented.');
  }
}
