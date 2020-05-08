import { css, customElement, html, property, unsafeCSS } from 'lit-element';
import { LitElement } from 'lit-element';
import { BasicService } from '@domoskanonos/frontend-basis';
import { FlexAlignItems, FlexContainerProperties, FlexJustifyContent, FlexWrap } from '../flex-container/component';
import { SpacerSize, TypographyType, VisibleType } from '..';

const componentCSS = require('./component.css');

export class ButtonType {
   static PRIMARY = 'PRIMARY';
   static SECONDARY = 'SECONDARY';
}

@customElement('nidoca-button')
export class ButtonComponent extends LitElement {
   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   static EVENT_CLICK: string = 'component-button-click';

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
      BasicService.getUniqueInstance().dispatchSimpleCustomEvent(this, ButtonComponent.EVENT_CLICK, this);
   }
}
