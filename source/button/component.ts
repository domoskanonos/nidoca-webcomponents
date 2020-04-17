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
               colorScheme="${this.buttonType == ButtonType.CONTAINED ? ColorScheme.PRIMARY_SCHEME : ColorScheme.DEFAULT_SCHEME}"
            >
               ${this.buttonType == ButtonType.TEXT
                  ? html`
                       <component-typography
                          .typographyType="${TypographyType.OVERLINE}"
                          text="${this.text}"
                       ></component-typography>
                    `
                  : html`
                       <component-flex-container
                          .containerClazzes="${[ContainerClazzValues.CONTAINER_WIDTH_AUTO, ContainerClazzValues.HOVER, ContainerClazzValues.MAX_HEIGHT]}"
                          flexWrap="${FlexWrap.NO_WRAP}"
                          .flexJustifyContent="${FlexJustifyContent.CENTER}"
                          .alignItems="${AlignItems.STRETCH}"
                       >
                          <component-icon
                             .rendered="${BasicService.getUniqueInstance().isNotBlank(this.leadingIcon)}"
                             icon="${this.leadingIcon}"
                          >
                          </component-icon>
                          <component-typography text="${this.text}"></component-typography>
                          <slot></slot>
                       </component-flex-container>
                    `}
            </effect-color>
         </div>
      `;
   }

   async clicked() {
      BasicService.getUniqueInstance().dispatchSimpleCustomEvent(this, ButtonComponent.EVENT_CLICK, this);
   }
}
