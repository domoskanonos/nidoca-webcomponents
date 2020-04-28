import { css, customElement, html, property, unsafeCSS } from 'lit-element';
import { LitElement } from 'lit-element';
import { BasicService } from '@domoskanonos/frontend-basis';
import { AlignItems, ContainerProperties, FlexJustifyContent, FlexWrap } from '../flex-container/component';
import { SpacerSize, TypographyType, VisibleType } from '..';

const componentCSS = require('./component.css');

export class ButtonType {
   static PRIMARY = 'PRIMARY';
   static SECONDARY = 'SECONDARY';
}

@customElement('component-button')
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
         <effect-ripple>
            <component-flex-container
               class="BUTTON ${this.buttonType}"
               @click="${() => {
                  this.clicked();
               }}"
               .containerProperties="${[ContainerProperties.CONTAINER_WIDTH_AUTO]}"
               flexWrap="${FlexWrap.NO_WRAP}"
               .flexJustifyContent="${FlexJustifyContent.CENTER}"
               .alignItems="${AlignItems.CENTER}"
            >
               <component-visible
                  visibleType="${BasicService.getUniqueInstance().isNotBlank(this.leadingIcon)
                     ? VisibleType.NORMAL
                     : VisibleType.HIDE}"
               >
                  <component-icon icon="${this.leadingIcon}"> </component-icon>
               </component-visible>
               <component-visible
                  visibleType="${BasicService.getUniqueInstance().isBlank(this.leadingIcon)
                     ? VisibleType.NORMAL
                     : VisibleType.HIDE}"
                  ><component-spacer spacerSize="${SpacerSize.MEDIUM}"></component-spacer
               ></component-visible>
               <component-typography text="${this.text}" typographyType="${TypographyType.BUTTON}"></component-typography>
               <component-spacer spacerSize="${SpacerSize.MEDIUM}"></component-spacer>
               <slot></slot>
            </component-flex-container>
         </effect-ripple>
      `;
   }

   clicked() {
      BasicService.getUniqueInstance().dispatchSimpleCustomEvent(this, ButtonComponent.EVENT_CLICK, this);
   }
}
