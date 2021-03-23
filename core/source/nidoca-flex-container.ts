import {css, customElement, html, property, query, LitElement, TemplateResult} from 'lit-element';

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
export class NidocaFlexContainer extends LitElement {
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
      overflow: auto;
      box-sizing: border-boxed;
    }

    .FLEX_ITEM,
    ::slotted(.FLEX_ITEM) {
      box-sizing: border-box;
      overflow: auto;
    }
  `;

  @property()
  flexDirection: FlexDirection = FlexDirection.ROW;

  @property()
  flexWrap: FlexWrap = FlexWrap.WRAP;

  @property()
  flexJustifyContent: FlexJustifyContent = FlexJustifyContent.FLEX_START;

  @property()
  flexAlignItems: FlexAlignItems = FlexAlignItems.FLEX_START;

  @property()
  flexAlignContent: FlexAlignContent = FlexAlignContent.FLEX_START;

  @property()
  containerStyle: string = '';

  @property()
  itemStyle: string = '';

  @query('#slotElement')
  private slotElement: HTMLSlotElement | undefined;

  render(): TemplateResult {
    return html`
      <div
        class="FLEX_CONTAINER"
        style="flex-direction: ${this.flexDirection}; flex-wrap: ${this.flexWrap}; justify-content: ${this
          .flexJustifyContent}; align-items: ${this.flexAlignItems}; align-content: ${this.flexAlignContent}; ${this
          .containerStyle}"
      >
        <slot id="slotElement" @slotchange="${(event: Event) => this.slotChanged(event)}"></slot>
      </div>
    `;
  }

  protected update(changedProperties: Map<PropertyKey, unknown>): void {
    super.update(changedProperties);
    if (changedProperties.get('itemStyle') != undefined) {
      this.changeSlotComponentsStyle(this.slotElement);
    }
  }

  slotChanged(event: Event) {
    let slotElement: HTMLSlotElement = <HTMLSlotElement>event.target;
    let classList = slotElement.classList;
    classList.add('FLEX_ITEM');
    this.changeSlotComponentsStyle(slotElement);
  }

  private changeSlotComponentsStyle(slotElement: HTMLSlotElement | undefined) {
    if (slotElement == undefined) {
      return;
    }
    let elements: Element[] = slotElement.assignedElements();
    for (let index = 0; index < elements.length; index++) {
      let element: Element = elements[index];
      element.setAttribute('style', this.itemStyle);
    }
  }

}
