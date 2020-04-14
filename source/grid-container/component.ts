import { css, customElement, html, property, unsafeCSS, LitElement } from 'lit-element';
import { AbstractInputData } from '../abstract-component/component';
import { BasicService } from '@domoskanonos/frontend-basis';

const componentCSS = require('./component.css');

export class GridJustifyContent {
   static START = 'start';
   static END = 'end';
   static CENTER = 'center';
   static SPACE_BETWEEN = 'space-between';
   static SPACE_AROUND = 'space-around';
   static SPACE_EVENLY = 'space-evenly';
}

export class GridAlignContent {
   static START = 'start';
   static END = 'end';
   static CENTER = 'center';
   static SPACE_BETWEEN = 'space-between';
   static SPACE_AROUND = 'space-around';
   static SPACE_EVENLY = 'space-evenly';
}

export class GridContainerInputData extends AbstractInputData {
   gridTemplateRows: string[] = [];
   gridTemplateColumns: string[] = [];
   height: string = '';
}

@customElement('component-grid-container')
export class GridComponent extends LitElement {
   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   static IDENTIFIER: string = 'GridComponent';

   @property()
   gridTemplateRows: string[] = [];

   @property()
   gridTemplateColumns: string[] = [];

   @property()
   gridJustifyContent: string = '';

   @property()
   gridAlignContent: string = '';

   @property()
   height: string = 'min-content';

   render() {
      return html`
         <div
            class="GRID_CONTAINER"
            style="${this.toGridJustifyContet(this.gridJustifyContent)}${this.toGridAlignContent(
               this.gridAlignContent
            )}${this.toGridTemplateRowsStyle(this.gridTemplateRows)}${this.toGridTemplateColumnsStyle(
               this.gridTemplateColumns
            )}${this.toHeightStyle(this.height)}"
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

   private toGridJustifyContet(gridJustifyContent: string) {
      return BasicService.getUniqueInstance().isNotBlank(gridJustifyContent)
         ? 'justify-content:'.concat(gridJustifyContent).concat(';')
         : '';
   }

   private toGridAlignContent(gridAlignContent: string) {
      return BasicService.getUniqueInstance().isNotBlank(gridAlignContent)
         ? 'align-content:'.concat(gridAlignContent).concat(';')
         : '';
   }
}
