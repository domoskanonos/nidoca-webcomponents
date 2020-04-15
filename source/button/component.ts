import { css, customElement, html, property, unsafeCSS } from 'lit-element';
import { LitElement } from 'lit-element';
import { BasicService } from '@domoskanonos/frontend-basis';
import { AlignItems, ContainerClazzValues, FlexWrap } from '../flex-container/component';
import { BorderType, ColorScheme } from '..';

const componentCSS = require('./component.css');

export class ButtonType {
   static CONTAINED = 'CONTAINED';
   static OUTLINED = 'OUTLINED';
   static TEXT = 'TEXT';
}

@customElement('component-button')
export class ButtonComponent extends LitElement {
   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   static EVENT_CLICK: string = 'component-button-clicked';

   @property()
   buttonType: ButtonType = ButtonType.CONTAINED;

   @property()
   leadingIcon: string = '';

   @property()
   text: string = '';

   render() {
      return html`
         <div class="BUTTON ${this.buttonType}">
            <effect-color
               colorScheme="${this.buttonType == ButtonType.CONTAINED ? ColorScheme.PRIMARY_COLOR : ColorScheme.BACKGROUND_COLOR}"
               ;
            >
               <component-border borderType="${BorderType.ALL}">
                  <component-flex-container
                     .containerClazzes="${[ContainerClazzValues.CONTAINER_100]}"
                     alignItems="${AlignItems.CENTER}"
                     flexWrap="${FlexWrap.NO_WRAP}"
                  >
                     <component-icon
                        .rendered="${BasicService.getUniqueInstance().isNotBlank(this.leadingIcon)}"
                        icon="${this.leadingIcon}"
                     >
                     </component-icon>
                     <component-container>
                        <component-typography text="${this.text}"></component-typography>
                        <slot></slot>
                     </component-container>
                  </component-flex-container>
               </component-border>
            </effect-color>
            <effect-ripple @click="${this.clicked}"> </effect-ripple>
         </div>
      `;
   }

   async clicked() {
      BasicService.getUniqueInstance().dispatchSimpleCustomEvent(this, ButtonComponent.EVENT_CLICK, this);
   }
}
