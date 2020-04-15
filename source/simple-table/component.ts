import {css, customElement, html, LitElement, property, unsafeCSS} from 'lit-element';
import {guard} from 'lit-html/directives/guard';
import {repeat} from 'lit-html/directives/repeat';

const componentCSS = require('./component.css');

export class SimpleTableRowData {
    columns: any[] = [];
}

@customElement('component-simple-table')
export class SimpleTableComponent extends LitElement {
    static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

    static IDENTIFIER: string = 'CodeComponent';

    @property()
    headers: string[] = [];

    @property()
    rows: SimpleTableRowData[] = [];

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
                            row.columns,
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
