import {css, customElement, html, LitElement, property, TemplateResult} from "lit";
import {guard} from "lit-html/directives/guard";
import {repeat} from "lit-html/directives/repeat";
import {NidocaIcon} from "./nidoca-icon";

@customElement("nidoca-table")
export class NidocaTable extends LitElement {
  static styles = css`
    table,
    ::slotted(table) {
      border-spacing: 0;
      width: 100%;
    }

    td,
    th {
      vertical-align: center;
      padding: var(--space-small);
      box-sizing: border-box;
      text-align: left;
      border-bottom: 1px solid var(--app-color-surface-background);
      border-left: 1px solid var(--app-color-surface-background);
    }

    tr > td:last-of-type,
    th:last-of-type {
      border-right: 1px solid var(--app-color-surface-background);
    }

    th {
      border-top: 1px solid var(--app-color-surface-background);
      background-color: var(--app-color-surface-background-dark);
      color: var(--app-color);
    }
  `;

  @property({type: Array})
  headers: any[] = ["column 1", "column 2"];

  @property({type: Array})
  rows: any[] = [
    ["row 1", new NidocaIcon()],
    ["row 2", new NidocaIcon()],
  ];

  render(): TemplateResult {
    return html`
      <div>
        <table>
          <thead>
            ${guard(
              [this.headers],
              () => html` ${repeat(this.headers, (header) => html` <th colspan="1" rowspan="1">${header}</th> `)} `
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
                          ${repeat(row, (column) => html` <td colspan="1" rowspan="1">${column}</td> `)}
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
