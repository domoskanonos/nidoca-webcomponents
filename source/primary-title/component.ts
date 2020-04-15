import { css, customElement, html, property, unsafeCSS, LitElement } from 'lit-element';
import { AbstractInputData } from '../abstract-component/component';
import { TypographyInputData } from '../typography/component';
import { RichMediaInputData, SpacerAlignment, SpacerSize } from '..';
import { BasicService } from '@domoskanonos/frontend-basis';

const componentCSS = require('./component.css');

export class PrimaryTitleInputData extends AbstractInputData {
   richMedia: RichMediaInputData | undefined;
   primaryTitle: TypographyInputData | undefined;
   secondaryTitle: TypographyInputData | undefined;
}

@customElement('component-primary-title')
export class PrimaryTitleComponent extends LitElement {
   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   static IDENTIFIER: string = 'PrimaryTitleComponent';

   @property()
   richMedia: RichMediaInputData | undefined;

   @property()
   primaryTitle: TypographyInputData = new TypographyInputData();

   @property()
   secondaryTitle: TypographyInputData = new TypographyInputData();

   render() {
      return html`
         <component-flex-container
            .containerClazzes="${["CONTAINER_100"]}"
            .itemFlexBasisValues="${this.richMedia != undefined ? ['20%', '80%'] : ['100%']}"
         >
            <component-container .rendered="${this.richMedia != undefined}">
               <component-rich-media .inputData="${this.richMedia}"></component-rich-media>
            </component-container>
            <component-flex-container .containerClazzes="${["CONTAINER_100"]}" itemFlexBasisValue="100%" .>
               <component-typography .inputData="${this.primaryTitle}"></component-typography>
               <component-typography .inputData="${this.secondaryTitle}"></component-typography>
            </component-flex-container>
         </component-flex-container>
      `;
   }

   getDefaultInputData(): PrimaryTitleInputData {
      return <PrimaryTitleInputData>{
         componentIdentifier: PrimaryTitleComponent.IDENTIFIER
      };
   }
}
