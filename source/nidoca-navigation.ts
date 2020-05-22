import { css, customElement, html, LitElement, property } from 'lit-element';

export enum NavigationType {
   DISMISSIBLE = 'DISMISSIBLE',
   PERMANENT = 'PERMANENT',
   MODAL = 'MODAL',
}

@customElement('nidoca-navigation')
export class NidocaNavigation extends LitElement {
   static styles = css`
      .NAVIGATION {
         height: 100%;
         width: var(--menu-size);
         transition: left 0.25s linear;
         position: fixed;
         z-index: 10;
         top: var(--toolbar-height);
         left: 0;
         overflow-x: hidden;
         margin-top: var(--toolbar-height);
         background-color: var(--app-color-primary-background);
         color: var(--app-color-primary);
      }

      .CLOSED {
         left: calc(-1 * var(--menu-size));
         transition: left 0.25s linear;
      }

      .DISMISSIBLE {
         height: 100vh;
         width: var(--menu-size);
         transition: left 0.25s linear;
         /* position: absolute;
   z-index: 11;
   top: 0;
   left: 0; */
         top: 0px;
         overflow-x: hidden;
         margin: 0;
         transition: all 0.15s ease;
         z-index: 11;
      }
      .PERMANENT {
         height: 100vh;
         width: var(--menu-size);
         transition: left 0.25s linear;
         /* position: absolute;
   z-index: 11;
   top: 0;
   left: 0; */
         top: 0px;
         overflow-x: hidden;
         margin: 0;
         transition: all 0.35s ease;
      }
      .MODAL {
         height: 100vh;
         width: var(--menu-size);
         transition: left 0.25s linear;
         position: fixed;
         z-index: 11;
         top: 0;
         left: 0;
         overflow-x: hidden;
         margin: 0;
      }
   `;

   @property()
   closed: boolean = false;

   @property()
   navigationType: string = NavigationType.PERMANENT;

   render() {
      return html`
         <div class="NAVIGATION ${this.navigationType} ${this.closed ? 'CLOSED' : ''}">
            <slot name="contentBefore"></slot>
            <slot name="links"></slot>
            <slot name="contentAfter"></slot>
         </div>
      `;
   }
}
