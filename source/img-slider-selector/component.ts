import { css, customElement, html, property, unsafeCSS, LitElement } from 'lit-element';
import { AbstractInputData } from '../abstract-component/component';
import { ImgSliderComponent, ImgSliderInputData } from '../img-slider/component';
import { RichMediaInputData } from '../rich-media/component';
import { BasicService } from '@domoskanonos/frontend-basis';

const componentCSS = require('./component.css');

export class ImgSliderSelectorInputData extends AbstractInputData {
   columnFlexBasisValues?: string[];
   imgSlider?: ImgSliderInputData;
}

@customElement('component-rich-media-slider-selector')
export class ImgSliderSelectorComponent extends LitElement {
   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   static IDENTIFIER: string = 'ImgSliderSelectorComponent';

   @property()
   sliderType: number = 1;

   @property()
   maxHeight: string = '';

   @property()
   imgs: RichMediaInputData[] = [];

   @property()
   selectedImg: RichMediaInputData = <RichMediaInputData>{};

   @property()
   columnFlexBasisValues: string[] = ['30%', '70%'];

   render() {
      return html`
         <div @component-rich-media-slider-click="${this.sliderItemClicked}" class="sliderSelector" style="height: ${this.maxHeight};">
            <component-rich-media-slider
               style="flex-basis: ${this.imgs.length > 1 ? this.columnFlexBasisValues[0] : '0%'}"
               maxSize="${this.maxHeight}"
               sliderType="${this.sliderType}"
               .imgs="${this.imgs}"
            ></component-rich-media-slider>

            <component-rich-media
               .inputData="${this.selectedImg}"
               style="flex-basis: ${this.imgs.length > 1 ? this.columnFlexBasisValues[1] : 'auto'}"
            ></component-rich-media>
         </div>
      `;
   }

   getDefaultInputData(): ImgSliderSelectorInputData {
      return <ImgSliderSelectorInputData>{
         componentIdentifier: ImgSliderSelectorComponent.IDENTIFIER,
         imgSlider: new ImgSliderComponent().getDefaultInputData()
      };
   }
   
   sliderItemClicked(event: CustomEvent) {
      let img: RichMediaInputData = <RichMediaInputData>event.detail;
      this.selectedImg = img;
   }
}
