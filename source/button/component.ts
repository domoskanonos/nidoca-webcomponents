import { css, customElement, html, property, unsafeCSS } from 'lit-element';
import { LitElement } from 'lit-element';
import { BasicService } from '@domoskanonos/frontend-basis';
import { AlignContent, AlignItems, ContainerClazzValues, FlexJustifyContent, FlexWrap } from '../flex-container/component';
import { BorderType, ColorScheme, TypographyType } from '..';

const componentCSS = require('./component.css');

export class ButtonType {
   static CONTAINED = 'CONTAINED';
   static TEXT = 'TEXT';
}

@customElement('component-button')
export class ButtonComponent extends LitElement {
   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   static EVENT_CLICK: string = 'component-button-click';

   @property()
   buttonType: ButtonType = ButtonType.CONTAINED;

   @property()
   leadingIcon: string = '';

   @property()
   text: string = '';

   render() {
      return html`
         <component-flex-container
            class="BUTTON ${this.buttonType}"
            @click="${() => {
               this.clicked();
            }}"
            .containerClazzes="${[ContainerClazzValues.CONTAINER_WIDTH_AUTO]}"
            flexWrap="${FlexWrap.NO_WRAP}"
            .flexJustifyContent="${FlexJustifyContent.CENTER}"
            .alignItems="${AlignItems.CENTER}"
         >
            <component-icon
               .rendered="${BasicService.getUniqueInstance().isNotBlank(this.leadingIcon)}"
               icon="${this.leadingIcon}"
            >
            </component-icon>
            <component-typography text="${this.text}" typographyType="${TypographyType.BUTTON}"></component-typography>
            <slot></slot>
         </component-flex-container>
      `;
   }

   clicked() {
      BasicService.getUniqueInstance().dispatchSimpleCustomEvent(this, ButtonComponent.EVENT_CLICK, this);
   }
}
