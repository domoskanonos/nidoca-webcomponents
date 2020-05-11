import { css, customElement, html, LitElement, property, unsafeCSS } from 'lit-element';
import { guard } from 'lit-html/directives/guard';
import { repeat } from 'lit-html/directives/repeat';

const componentCSS = require('./component.css');

@customElement('nidoca-table')
export class NidocaTable extends LitElement {
   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   @property()
   headers: any[] = [];

   @property()
   rows: [any[]] = [[]];

   render() {
      return html`
         <div>
            <table>
               <thead>
                  ${guard(
                     [this.headers],
                     () =>
                        html`
                           ${repeat(
                              this.headers,
                              (header) =>
                                 html`
                                    <th colspan="1" rowspan="1">${header}</th>
                                 `
                           )}
                        `
                  )}
               </thead>
               <tbody>
                  ${guard(
                     [this.rows],
                     () =>
                        html`
                           ${repeat(
                              this.rows,
                              (row) =>
                                 html`
                                    <tr>
                                       ${repeat(
                                          row,
                                          (column) =>
                                             html`
                                                <td colspan="1" rowspan="1">${column}</td>
                                             `
                                       )}
                                    </tr>
                                 `
                           )}
                        `
                  )}
               </tbody>
            </table>
         </div>
      `;
   }
}
