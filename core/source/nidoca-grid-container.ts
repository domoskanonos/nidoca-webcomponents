import {css, customElement, html, property, LitElement, TemplateResult} from 'lit-element';

export enum GridJustifyItems {
  START = 'start',
  END = 'end',
  CENTER = 'center',
  STRETCH = 'stretch',
}

export enum GridAlignItems {
  START = 'start',
  END = 'end',
  CENTER = 'center',
  STRETCH = 'stretch',
}

@customElement('nidoca-grid-container')
export class NidocaGrid extends LitElement {
  static styles = css`
    *,
    ::slotted(*) {
      box-sizing: border-box;
      color: inherit;
      background-color: inherit;
    }

    .GRID_CONTAINER,
    ::slotted(.GRID_CONTAINER) {
      display: grid;
      box-sizing: border-box;
    }
  `;

  @property()
  gridTemplateRows: string[] = [];

  @property()
  gridTemplateColumns: string[] = [];

  @property()
  gridJustifyItems: string = '';

  @property()
  gridAlignItems: string = '';

  @property()
  height: string = '';

  @property()
  minHeight: string = '';

  @property()
  width: string = '';

  @property()
  minWidth: string = '';

  render(): TemplateResult {
    return html`
      <div
        class="GRID_CONTAINER"
        style="${this.toGridJustifyItems(this.gridJustifyItems)}${this.toGridAlignItems(
          this.gridAlignItems
        )}${this.toGridTemplateRowsStyle(this.gridTemplateRows)}${this.toGridTemplateColumnsStyle(
          this.gridTemplateColumns
        )}${this.toHeightStyle(this.height)}${this.toMinHeightStyle(this.minHeight)}${this.toWidthStyle(
          this.width
        )}${this.toMinWidthStyle(this.minWidth)}"
      >
        <slot></slot>
      </div>
    `;
  }

  private toGridTemplateRowsStyle(gridTemplateRows: string[]) {
    let gridTemplateRowsStyle: string = '';
    if (gridTemplateRows.length > 0) {
      gridTemplateRowsStyle = 'grid-template-rows:';
      gridTemplateRows.forEach((value) => {
        gridTemplateRowsStyle = gridTemplateRowsStyle.concat(' ').concat(value);
      });
      gridTemplateRowsStyle = gridTemplateRowsStyle.concat(';');
    }
    return gridTemplateRowsStyle;
  }

  private toGridTemplateColumnsStyle(gridTemplateColumns: string[]) {
    let gridTemplateColumnsStyle: string = '';
    if (gridTemplateColumns.length > 0) {
      gridTemplateColumnsStyle = 'grid-template-columns:';
      gridTemplateColumns.forEach((value) => {
        gridTemplateColumnsStyle = gridTemplateColumnsStyle.concat(' ').concat(value);
      });
      gridTemplateColumnsStyle = gridTemplateColumnsStyle.concat(';');
    }
    return gridTemplateColumnsStyle;
  }

  private toHeightStyle(height: string) {
    return height.length > 0 ? 'height:'.concat(height).concat(';') : '';
  }

  private toMinHeightStyle(minheight: string) {
    return minheight.length > 0 ? 'min-height:'.concat(minheight).concat(';') : '';
  }

  private toWidthStyle(width: string) {
    return width.length > 0 ? 'width:'.concat(width).concat(';') : '';
  }

  private toMinWidthStyle(minwidth: string) {
    return minwidth.length > 0 ? 'min-height:'.concat(minwidth).concat(';') : '';
  }

  private toGridJustifyItems(gridJustifyItems: string) {
    return gridJustifyItems ? 'justify-items:'.concat(gridJustifyItems).concat(';') : '';
  }

  private toGridAlignItems(gridAlignItems: string) {
    return gridAlignItems ? 'align-items:'.concat(gridAlignItems).concat(';') : '';
  }
}
