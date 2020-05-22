import { css, customElement, html, property, query, unsafeCSS, LitElement } from 'lit-element';
import { BasicService } from '@domoskanonos/frontend-basis';

const componentCSS = require('./component.css');

export enum FlexContainerProperties {
   CONTAINER_WIDTH_MIN_CONTENT = 'CONTAINER_WIDTH_MIN_CONTENT',
   CONTAINER_WIDTH_AUTO = 'CONTAINER_WIDTH_AUTO',
   CONTAINER_WIDTH_100 = 'CONTAINER_WIDTH_100',
   CONTAINER_WIDTH_75 = 'CONTAINER_WIDTH_75',
   CONTAINER_WIDTH_50 = 'CONTAINER_WIDTH_50',
   CONTAINER_WIDTH_25 = 'CONTAINER_WIDTH_25',
   CONTAINER_HEIGHT_100 = 'CONTAINER_HEIGHT_100',
   TABLET_MAX_WIDTH = 'TABLET_MAX_WIDTH',
   SMARTPHONE_MAX_WIDTH = 'SMARTPHONE_MAX_WIDTH',
   SMARTPHONE_HORIZONTAL_PADDING = 'SMARTPHONE_HORIZONTAL_PADDING',
   SMARTPHONE_VERTICAL_PADDING = 'SMARTPHONE_VERTICAL_PADDING',
   TABLET_HORIZONTAL_PADDING = 'TABLET_HORIZONTAL_PADDING',
   TABLET_VERTICAL_PADDING = 'TABLET_VERTICAL_PADDING'
}

export enum FlexItemProperties {
   TABLET_MAX_WIDTH = 'TABLET_MAX_WIDTH',
   SMARTPHONE_MAX_WIDTH = 'SMARTPHONE_MAX_WIDTH',
   KEYLINE_ALIGNMENT_HORIZONTAL = 'KEYLINE_ALIGNMENT_HORIZONTAL',
   KEYLINE_ALIGNMENT_VERTICAL = 'KEYLINE_ALIGNMENT_VERTICAL',
   KEYLINE_ALIGNMENT_BOTH = 'KEYLINE_ALIGNMENT_BOTH',
   KEYLINE_SIZE_ZERO = 'KEYLINE_SIZE_ZERO',
   KEYLINE_SIZE_LITTLE = 'KEYLINE_SIZE_LITTLE',
   KEYLINE_SIZE_SMALL = 'KEYLINE_SIZE_SMALL',
   KEYLINE_SIZE_MEDIUM = 'KEYLINE_SIZE_MEDIUM',
   KEYLINE_SIZE_BIG = 'KEYLINE_SIZE_BIG',
   KEYLINE_SIZE_MAX = 'KEYLINE_SIZE_MAX'
}

export enum FlexDirection {
   ROW = 'row',
   ROW_REVERSE = 'rowData-reverse',
   COLUMN = 'column',
   COLUMN_REVERSE = 'column-reverse'
}

export enum FlexWrap {
   WRAP = 'wrap',
   NO_WRAP = 'nowrap',
   WRAP_REVERSE = 'flexWrap-reverse'
}

export enum FlexJustifyContent {
   FLEX_START = 'flex-start',
   FLEX_END = 'flex-end',
   CENTER = 'center',
   SPACE_BETWEEN = 'space-between',
   SPACE_AROUND = 'space-around',
   SPACE_EVENLY = 'space-evenly'
}

export enum FlexAlignItems {
   FLEX_START = 'flex-start',
   FLEX_END = 'flex-end',
   CENTER = 'center',
   STRETCH = 'stretch',
   START = 'start',
   END = 'end',
   BASELINE = 'baseline',
   FIRST_BASELINE = 'first baseline',
   LAST_BASLINE = 'last baseline',
   SAFE = 'safe',
   UNSAFE = 'unsafe'
}

export enum FlexAlignContent {
   FLEX_START = 'flex-start',
   FLEX_END = 'flex-end',
   CENTER = 'center',
   STRETCH = 'stretch',
   SPACE_AROUND = 'space-around',
   SPACE_EVENLY = 'space-evenly',
   SPACE_BETWEEN = 'space-between',
   START = 'start',
   END = 'end',
   BASELINE = 'baseline',
   FIRST_BASELINE = 'first baseline',
   LAST_BASLINE = 'last baseline',
   SAFE = 'safe',
   UNSAFE = 'unsafe'
}

@customElement('nidoca-flex-container')
export class NidocaFlex extends LitElement {
   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   @property()
   flexDirection: string = FlexDirection.ROW;

   @property()
   flexWrap: string = FlexWrap.WRAP;

   @property()
   flexJustifyContent: string = FlexJustifyContent.FLEX_START;

   @property()
   flexAlignItems: string = FlexAlignItems.FLEX_START;

   @property()
   flexAlignContent: string = FlexAlignContent.FLEX_START;

   @property()
   flexContainerProperties: string[] = [];

   @property()
   flexItemProperties: string[] = [];

   @property()
   flexItemBasisValue: string = 'auto';

   @property()
   flexItemBasisValues: string[] = [];

   @query('#slotElement')
   slotElement: HTMLSlotElement | undefined;

   render() {
      return html`
         <div
            class="${this.toContainerPropertiesString(this.flexContainerProperties)}"
            style="flex-direction: ${this.flexDirection}; flex-wrap: ${this.flexWrap}; justify-content: ${this
               .flexJustifyContent}; align-items: ${this.flexAlignItems}; align-content: ${this.flexAlignContent};"
         >
            <slot id="slotElement" @slotchange="${(event: Event) => this.slotChanged(event)}"></slot>
         </div>
      `;
   }

   protected update(changedProperties: Map<PropertyKey, unknown>): void {
      super.update(changedProperties);
      if (
         changedProperties.get('flexItemBasisValue') != undefined ||
         changedProperties.get('flexItemBasisValues') != undefined ||
         changedProperties.get('flexItemProperties') != undefined
      ) {
         this.changeSlotComponentsStyle(this.slotElement);
      }
   }

   slotChanged(event: Event) {
      let slotElement: HTMLSlotElement = <HTMLSlotElement>event.target;
      this.changeSlotComponentsStyle(slotElement);
   }

   private changeSlotComponentsStyle(slotElement: HTMLSlotElement | undefined) {
      if (slotElement == undefined) {
         return;
      }
      let elements: Element[] = slotElement.assignedElements();
      for (let index = 0; index < elements.length; index++) {
         let element: Element = elements[index];
         this.changeItemStyle(element, index);
      }
   }

   private changeItemStyle(element: Element, index: number) {
      let classList = element.classList;
      classList.value = '';
      classList.add('FLEX_ITEM');
      this.flexItemProperties.forEach((clazz) => {
         classList.add(clazz);
      });

      let currentStyle: string | null = element.getAttribute('style');
      if (currentStyle === null) {
         element.setAttribute('style', this.getFlexItemStyle(index) + ';');
      } else {
         let currentStyles = currentStyle.split(';');
         currentStyle = '';
         currentStyles.forEach((value) => {
            if (value.length > 0 && value.lastIndexOf('flex-basis') === -1 && value.lastIndexOf('max-width') === -1) {
               currentStyle += value + ';';
            }
         });
         currentStyle += this.getFlexItemStyle(index) + ';';
         element.setAttribute('style', currentStyle);
      }
   }

   private getFlexItemStyle(index: number): string {
      let flexBasisValue = BasicService.getUniqueInstance().getValue(this.flexItemBasisValues[index], this.flexItemBasisValue);
      return 'flex-basis: '
         .concat(flexBasisValue)
         .concat(';max-width: ')
         .concat(flexBasisValue);
   }

   toContainerPropertiesString(flexContainerPropertieses: string[]) {
      let containerClazzString: string = 'FLEX_CONTAINER';
      flexContainerPropertieses.forEach((clazz) => {
         containerClazzString = containerClazzString.concat(' ').concat(clazz);
      });
      return containerClazzString;
   }
}
