import { css, customElement, html, property, unsafeCSS, LitElement } from 'lit-element';
import { BasicService } from '@domoskanonos/frontend-basis';

const componentCSS = require('./component.css');

export enum GridJustifyItems {
   START = 'start',
   END = 'end',
   CENTER = 'center',
   STRETCH = 'stretch'
}

export enum GridAlignItems {
   START = 'start',
   END = 'end',
   CENTER = 'center',
   STRETCH = 'stretch'
}

@customElement('nidoca-grid-container')
export class NidocaGrid extends LitElement {
   static styles = css`
      ${unsafeCSS(componentCSS)}
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
   height: string = 'min-content';

   @property()
   minHeight: string = 'min-content';

   render() {
      return html`
         <div
            class="GRID_CONTAINER"
            style="${this.toGridJustifyItems(this.gridJustifyItems)}${this.toGridAlignItems(
               this.gridAlignItems
            )}${this.toGridTemplateRowsStyle(this.gridTemplateRows)}${this.toGridTemplateColumnsStyle(
               this.gridTemplateColumns
            )}${this.toHeightStyle(this.height)}${this.toMinHeightStyle(this.minHeight)}"
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

   private toGridJustifyItems(gridJustifyItems: string) {
      return BasicService.getUniqueInstance().isNotBlank(gridJustifyItems)
         ? 'justify-items:'.concat(gridJustifyItems).concat(';')
         : '';
   }

   private toGridAlignItems(gridAlignItems: string) {
      return BasicService.getUniqueInstance().isNotBlank(gridAlignItems) ? 'align-items:'.concat(gridAlignItems).concat(';') : '';
   }
}
