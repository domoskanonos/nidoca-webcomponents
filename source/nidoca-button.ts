import { css, customElement, html, property, unsafeCSS } from 'lit-element';
import { LitElement } from 'lit-element';
import { BasicService } from '@domoskanonos/frontend-basis';
import { FlexAlignItems, FlexContainerProperties, FlexJustifyContent, FlexWrap } from './nidoca-flex-container';
import {VisibleType} from "./nidoca-visible";
import {SpacerSize} from "./nidoca-spacer";
import {TypographyType} from "./nidoca-typography";

export enum ButtonType {
   PRIMARY = 'PRIMARY',
   SECONDARY = 'SECONDARY',
}

@customElement('nidoca-button')
export class NidocaButton extends LitElement {
   static styles = css`
      .BUTTON {
         cursor: pointer;
         text-transform: uppercase;
         box-sizing: border-box;
         font-family: inherit;
         text-align: center;
         vertical-align: center;
         line-height: 48px;
      }

      .PRIMARY {
         background-color: var(--app-color-primary-background);
         color: var(--app-color-primary);
      }
      ::slotted(.PRIMARY:hover),
      .PRIMARY:hover,
      ::slotted(.PRIMARY:active),
      .PRIMARY:active {
         background-color: var(--app-color-primary-background-dark);
         color: var(--app-color-primary-dark);
      }

      .SECONDARY {
         background-color: var(--app-color-secondary-background);
         color: var(--app-color-secondary);
      }
      ::slotted(.SECONDARY:hover),
      .SECONDARY:hover,
      ::slotted(.SECONDARY:active),
      .SECONDARY:active {
         background-color: var(--app-color-secondary-background-dark);
         color: var(--app-color-secondary-dark);
      }

      @media only screen and (orientation: portrait) {
         button,
         .btn {
            width: 100%;
         }
      }
   `;

   @property()
   buttonType: ButtonType = ButtonType.PRIMARY;

   @property()
   leadingIcon: string = '';

   @property()
   text: string = '';

   render() {
      return html`
         <nidoca-ripple>
            <nidoca-flex-container
               class="BUTTON ${this.buttonType}"
               @click="${() => {
                  this.clicked();
               }}"
               .flexContainerProperties="${[FlexContainerProperties.CONTAINER_WIDTH_AUTO]}"
               flexWrap="${FlexWrap.NO_WRAP}"
               .flexJustifyContent="${FlexJustifyContent.CENTER}"
               .flexAlignItems="${FlexAlignItems.CENTER}"
            >
               <nidoca-visible
                  visibleType="${BasicService.getUniqueInstance().isNotBlank(this.leadingIcon)
                     ? VisibleType.NORMAL
                     : VisibleType.HIDE}"
               >
                  <nidoca-icon icon="${this.leadingIcon}"> </nidoca-icon>
               </nidoca-visible>
               <nidoca-visible
                  visibleType="${BasicService.getUniqueInstance().isBlank(this.leadingIcon)
                     ? VisibleType.NORMAL
                     : VisibleType.HIDE}"
                  ><nidoca-spacer spacerSize="${SpacerSize.MEDIUM}"></nidoca-spacer
               ></nidoca-visible>
               <nidoca-typography text="${this.text}" typographyType="${TypographyType.BUTTON}"></nidoca-typography>
               <nidoca-spacer spacerSize="${SpacerSize.MEDIUM}"></nidoca-spacer>
               <slot></slot>
            </nidoca-flex-container>
         </nidoca-ripple>
      `;
   }

   clicked() {
      BasicService.getUniqueInstance().dispatchSimpleCustomEvent(this, 'nidoca-event-button-clicked', this);
   }
}
