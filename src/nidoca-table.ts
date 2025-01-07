import { css, html, TemplateResult, LitElement } from 'lit';
import { NidocaHtml } from './abstract/nidoca-html';

import { customElement } from 'lit/decorators.js';
import { property } from 'lit/decorators.js';
import { guard } from 'lit/directives/guard.js';
import { repeat } from 'lit/directives/repeat.js';
import { NidocaIcon } from './nidoca-icon';
import { NidocaTheme } from './nidoca-meta';

@customElement('nidoca-table')
export class NidocaTable extends NidocaHtml {
  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    table,
    ::slotted(table) {
      border-spacing: 0;
      width: 100%;
    }

    td,
    th {
      vertical-align: center;
      padding-left: var(--space-2);
      padding-right: var(--space-2);
      height: var(--height-medium);
      box-sizing: border-box;
      text-align: left;
    }
  `;

  @property({ type: Array })
  headers: any[] = ['column 1', 'column 2'];

  @property({ type: Array })
  rows: any[] = [
    ['row 1', new NidocaIcon()],
    ['row 2', new NidocaIcon()],
  ];

  @property({ type: NidocaTheme, converter: String })
  theme: string = NidocaTheme.plain;

  render(): TemplateResult {
    return html`
      <style>
        td,
        th {
          border-bottom: var(--border-width-min) solid var(--app-color-${this.theme}-border);
          border-left: var(--border-width-min) solid var(--app-color-${this.theme}-border);
        }

        tr > td:last-of-type,
        th:last-of-type {
          border-right: var(--border-width-min) solid var(--app-color-${this.theme}-border);
        }

        th {
          border-top: var(--border-width-min) solid var(--app-color-${this.theme}-border);
          background-color: var(--app-color-${this.theme}-background);
          color: var(--app-color-text-${this.theme});
        }
      </style>
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
