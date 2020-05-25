import { css, customElement, html, property, query, LitElement } from 'lit-element';
import { BasicService } from '@domoskanonos/frontend-basis';

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
    TABLET_VERTICAL_PADDING = 'TABLET_VERTICAL_PADDING',
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
    KEYLINE_SIZE_MAX = 'KEYLINE_SIZE_MAX',
}

export enum FlexDirection {
    ROW = 'row',
    ROW_REVERSE = 'rowData-reverse',
    COLUMN = 'column',
    COLUMN_REVERSE = 'column-reverse',
}

export enum FlexWrap {
    WRAP = 'wrap',
    NO_WRAP = 'nowrap',
    WRAP_REVERSE = 'flexWrap-reverse',
}

export enum FlexJustifyContent {
    FLEX_START = 'flex-start',
    FLEX_END = 'flex-end',
    CENTER = 'center',
    SPACE_BETWEEN = 'space-between',
    SPACE_AROUND = 'space-around',
    SPACE_EVENLY = 'space-evenly',
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
    UNSAFE = 'unsafe',
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
    UNSAFE = 'unsafe',
}

@customElement('nidoca-flex-container')
export class NidocaFlex extends LitElement {
    static styles = css`
        :host,
        *,
        ::slotted(*) {
            box-sizing: border-box;
            color: inherit;
            background-color: inherit;
        }

        .FLEX_CONTAINER,
        ::slotted(.FLEX_CONTAINER) {
            margin: auto;
            display: flex;
        }

        .CONTAINER_WIDTH_MIN_CONTENT,
        ::slotted(.CONTAINER_WIDTH_MIN_CONTENT) {
            width: min-content;
            height: min-content;
        }

        .CONTAINER_HEIGHT_100,
        ::slotted(.CONTAINER_HEIGHT_100) {
            height: 100%;
        }

        .CONTAINER_WIDTH_AUTO,
        ::slotted(.CONTAINER_WIDTH_AUTO) {
            width: auto;
        }

        .CONTAINER_WIDTH_100,
        ::slotted(.CONTAINER_WIDTH_100) {
            width: 100%;
        }

        .CONTAINER_WIDTH_75,
        ::slotted(.CONTAINER_WIDTH_75) {
            width: 75%;
        }

        .CONTAINER_WIDTH_50,
        ::slotted(.CONTAINER_WIDTH_50) {
            width: 50%;
        }

        .CONTAINER_WIDTH_25,
        ::slotted(.CONTAINER_WIDTH_25) {
            width: 25%;
        }

        .FLEX_ITEM,
        ::slotted(.FLEX_ITEM) {
            box-sizing: border-box;
            overflow: auto;
        }

        .KEYLINE_SIZE_LITTLE,
        ::slotted(.KEYLINE_SIZE_LITTLE) {
            padding-right: var(--space-little);
            padding-bottom: var(--space-little);
        }

        .KEYLINE_SIZE_SMALL,
        ::slotted(.KEYLINE_SIZE_SMALL) {
            padding-right: var(--space-small);
            padding-bottom: var(--space-small);
        }

        .KEYLINE_SIZE_MEDIUM,
        ::slotted(.KEYLINE_SIZE_MEDIUM) {
            padding-right: var(--space-medium);
            padding-bottom: var(--space-medium);
        }

        .KEYLINE_SIZE_BIG,
        ::slotted(.KEYLINE_SIZE_BIG) {
            padding-right: var(--space-big);
            padding-bottom: var(--space-big);
        }

        .KEYLINE_SIZE_MAX,
        ::slotted(.KEYLINE_SIZE_MAX) {
            padding-right: var(--space-max);
            padding-bottom: var(--space-max);
        }

        .KEYLINE_ALIGNMENT_HORIZONTAL,
        ::slotted(.KEYLINE_ALIGNMENT_HORIZONTAL) {
            padding-bottom: 0;
        }

        .KEYLINE_ALIGNMENT_VERTICAL,
        ::slotted(.KEYLINE_ALIGNMENT_VERTICAL) {
            padding-right: 0;
        }

        .KEYLINE_SIZE_ALIGNMENT_BOTH,
        ::slotted(.KEYLINE_SIZE_ALIGNMENT_BOTH) {
            padding: 0;
        }

        @media only screen and (max-width: 1280px) and (orientation: portrait) {
            .FLEX_CONTAINER.TABLET_HORIZONTAL_PADDING {
                padding-left: var(--space-normal);
                padding-right: var(--space-normal);
            }

            .FLEX_CONTAINER.TABLET_VERTICAL_PADDING {
                padding-top: var(--space-normal);
                padding-bottom: var(--space-normal);
            }

            .FLEX_CONTAINER.TABLET_MAX_WIDTH,
            ::slotted(.FLEX_CONTAINER.TABLET_MAX_WIDTH) {
                width: 100%;
            }

            ::slotted(.FLEX_ITEM.TABLET_MAX_WIDTH),
            .FLEX_ITEM.TABLET_MAX_WIDTH {
                flex-basis: 100% !important;
                max-width: 100% !important;
            }
        }

        @media only screen and (max-width: 768px) and (orientation: portrait) {
            .FLEX_CONTAINER.SMARTPHONE_HORIZONTAL_PADDING {
                padding-left: var(--space-big);
                padding-right: var(--space-big);
            }

            .FLEX_CONTAINER.SMARTPHONE_VERTICAL_PADDING {
                padding-top: var(--space-big);
                padding-bottom: var(--space-big);
            }

            .FLEX_CONTAINER.SMARTPHONE_MAX_WIDTH,
            ::slotted(.FLEX_CONTAINER.SMARTPHONE_MAX_WIDTH) {
                width: 100%;
            }

            ::slotted(.FLEX_ITEM.SMARTPHONE_MAX_WIDTH),
            .FLEX_ITEM.SMARTPHONE_MAX_WIDTH {
                flex-basis: 100% !important;
                max-width: 100% !important;
            }
        }
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
                style="flex-direction: ${this.flexDirection}; flex-wrap: ${this.flexWrap}; justify-content: ${this.flexJustifyContent}; align-items: ${this.flexAlignItems}; align-content: ${this
                    .flexAlignContent};"
            >
                <slot id="slotElement" @slotchange="${(event: Event) => this.slotChanged(event)}"></slot>
            </div>
        `;
    }

    protected update(changedProperties: Map<PropertyKey, unknown>): void {
        super.update(changedProperties);
        if (changedProperties.get('flexItemBasisValue') != undefined || changedProperties.get('flexItemBasisValues') != undefined || changedProperties.get('flexItemProperties') != undefined) {
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
        return 'flex-basis: '.concat(flexBasisValue).concat(';max-width: ').concat(flexBasisValue);
    }

    toContainerPropertiesString(flexContainerPropertieses: string[]) {
        let containerClazzString: string = 'FLEX_CONTAINER';
        flexContainerPropertieses.forEach((clazz) => {
            containerClazzString = containerClazzString.concat(' ').concat(clazz);
        });
        return containerClazzString;
    }
}
