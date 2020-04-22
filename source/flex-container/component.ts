import {css, customElement, html, property, query, unsafeCSS, LitElement} from 'lit-element';
import {BasicService} from '@domoskanonos/frontend-basis';

const componentCSS = require('./component.css');

export class ContainerClazzValues {
    static CONTAINER_WIDTH_MIN_CONTENT = 'CONTAINER_WIDTH_MIN_CONTENT';
    static CONTAINER_WIDTH_AUTO = 'CONTAINER_WIDTH_AUTO';
    static CONTAINER_WIDTH_100 = 'CONTAINER_WIDTH_100';
    static CONTAINER_WIDTH_75 = 'CONTAINER_WIDTH_75';
    static CONTAINER_WIDTH_50 = 'CONTAINER_WIDTH_50';
    static CONTAINER_WIDTH_25 = 'CONTAINER_WIDTH_25';
    static CONTAINER_HEIGHT_100 = 'CONTAINER_HEIGHT_100';
    static TABLET_MAX_WIDTH = 'TABLET_MAX_WIDTH';
    static SMARTPHONE_MAX_WIDTH = 'SMARTPHONE_MAX_WIDTH';
    static SMARTPHONE_HORIZONTAL_PADDING = 'SMARTPHONE_HORIZONTAL_PADDING';
    static SMARTPHONE_VERTICAL_PADDING = 'SMARTPHONE_VERTICAL_PADDING';
    static TABLET_HORIZONTAL_PADDING = 'TABLET_HORIZONTAL_PADDING';
    static TABLET_VERTICAL_PADDING = 'TABLET_VERTICAL_PADDING';
    static HOVER = 'HOVER';
}

export class ItemClazzValues {
    static TABLET_MAX_WIDTH = 'TABLET_MAX_WIDTH';
    static SMARTPHONE_MAX_WIDTH = 'SMARTPHONE_MAX_WIDTH';
    static KEYLINE_ALIGNMENT_HORIZONTAL = 'KEYLINE_ALIGNMENT_HORIZONTAL';
    static KEYLINE_ALIGNMENT_VERTICAL = 'KEYLINE_ALIGNMENT_VERTICAL';
    static KEYLINE_ALIGNMENT_BOTH = 'KEYLINE_ALIGNMENT_BOTH';
    static KEYLINE_SIZE_ZERO = 'PADDING_ZERO';
    static KEYLINE_SIZE_LITTLE = 'PADDING_LITTLE';
    static KEYLINE_SIZE_SMALL = 'PADDING_SMALL';
    static KEYLINE_SIZE_MEDIUM = 'PADDING_MEDIUM';
    static KEYLINE_SIZE_BIG = 'PADDING_BIG';
    static KEYLINE_SIZE_MAX = 'PADDING_MAX';
}

export class FlexDirection {
    static ROW = 'row';
    static ROW_REVERSE = 'rowData-reverse';
    static COLUMN = 'column';
    static COLUMN_REVERSE = 'column-reverse';
}

export class FlexWrap {
    static WRAP = 'wrap';
    static NO_WRAP = 'nowrap';
    static WRAP_REVERSE = 'flexWrap-reverse';
}

export class FlexJustifyContent {
    static FLEX_START = 'flex-start';
    static FLEX_END = 'flex-end';
    static CENTER = 'center';
    static SPACE_BETWEEN = 'space-between';
    static SPACE_AROUND = 'space-around';
    static SPACE_EVENLY = 'space-evenly';
}

export class AlignItems {
    static FLEX_START = 'flex-start';
    static FLEX_END = 'flex-end';
    static CENTER = 'center';
    static STRETCH = 'stretch';
    static START = 'start';
    static END = 'end';
    static BASELINE = 'baseline';
    static FIRST_BASELINE = 'first baseline';
    static LAST_BASLINE = 'last baseline';
    static SAFE = 'safe';
    static UNSAFE = 'unsafe';
}

export class AlignContent {
    static FLEX_START = 'flex-start';
    static FLEX_END = 'flex-end';
    static CENTER = 'center';
    static STRETCH = 'stretch';
    static SPACE_AROUND = 'space-around';
    static SPACE_EVENLY = 'space-evenly';
    static SPACE_BETWEEN = 'space-between';
    static START = 'start';
    static END = 'end';
    static BASELINE = 'baseline';
    static FIRST_BASELINE = 'first baseline';
    static LAST_BASLINE = 'last baseline';
    static SAFE = 'safe';
    static UNSAFE = 'unsafe';
}

@customElement('component-flex-container')
export class FlexComponent extends LitElement {
    static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

    static IDENTIFIER: string = 'FlexComponent';

    @property()
    containerClazzes: string[] = [];

    @property()
    cssStyle: string = '';

    @property()
    flexDirection: string = FlexDirection.ROW;

    @property()
    flexWrap: string = FlexWrap.WRAP;

    @property()
    flexJustifyContent: string = FlexJustifyContent.FLEX_START;

    @property()
    alignItems: string = AlignItems.FLEX_START;

    @property()
    alignContent: string = AlignContent.FLEX_START;

    @property()
    itemClazzes: string[] = [];

    @property()
    itemFlexBasisValue: string = 'auto';

    @property()
    itemFlexBasisValues: string[] = [];

    @query('#slotElement')
    slotElement: HTMLSlotElement | undefined;

    render() {
        return html`
         <div
            class="${this.toContainerClazzesString(this.containerClazzes)}"
            style="flex-direction: ${this.flexDirection}; flex-wrap: ${this.flexWrap}; justify-content: ${this
            .flexJustifyContent}; align-items: ${this.alignItems}; align-content: ${this.alignContent}; ${this.cssStyle}"
         >
            <slot id="slotElement" @slotchange="${(event: Event) => this.slotChanged(event)}"></slot>
         </div>
      `;
    }

    protected update(changedProperties: Map<PropertyKey, unknown>): void {
        super.update(changedProperties);
        if (
            changedProperties.get('itemFlexBasisValue') != undefined ||
            changedProperties.get('itemFlexBasisValues') != undefined ||
            changedProperties.get('itemClazzes') != undefined
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
        classList.remove(ItemClazzValues.SMARTPHONE_MAX_WIDTH);
        classList.remove(ItemClazzValues.TABLET_MAX_WIDTH);
        classList.remove(ItemClazzValues.KEYLINE_ALIGNMENT_BOTH);
        classList.remove(ItemClazzValues.KEYLINE_ALIGNMENT_HORIZONTAL);
        classList.remove(ItemClazzValues.KEYLINE_ALIGNMENT_VERTICAL);
        classList.remove(ItemClazzValues.KEYLINE_SIZE_BIG);
        classList.remove(ItemClazzValues.KEYLINE_SIZE_LITTLE);
        classList.remove(ItemClazzValues.KEYLINE_SIZE_MAX);
        classList.remove(ItemClazzValues.KEYLINE_SIZE_MEDIUM);
        classList.remove(ItemClazzValues.KEYLINE_SIZE_SMALL);
        classList.remove(ItemClazzValues.KEYLINE_SIZE_ZERO);
        classList.add('FLEX_ITEM');
        this.itemClazzes.forEach((clazz) => {
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
        let flexBasisValue = BasicService.getUniqueInstance().getValue(this.itemFlexBasisValues[index], this.itemFlexBasisValue);
        return 'flex-basis: '
            .concat(flexBasisValue)
            .concat(';max-width: ')
            .concat(flexBasisValue);
    }

    toContainerClazzesString(containerClazzeses: string[]) {
        let containerClazzString: string = 'FLEX_CONTAINER';
        containerClazzeses.forEach((clazz) => {
            containerClazzString = containerClazzString.concat(' ').concat(clazz);
        });
        return containerClazzString;
    }
}
