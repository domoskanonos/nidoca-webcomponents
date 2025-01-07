import { css, html, LitElement, PropertyValueMap, TemplateResult } from 'lit';
import { NidocaHtml } from '../abstract/nidoca-html';

import { customElement, property } from 'lit/decorators.js';
import { guard } from 'lit/directives/guard.js';
import { repeat } from 'lit/directives/repeat.js';
import { NidocaFormText, NidocaFormTextType } from '../nidoca-form-text';

@customElement('nidoca-page-settings')
export class NidocaPageSettings extends NidocaHtml {
  static styles = css``;

  @property({ type: Array })
  cssVars: string[] = [];

  protected firstUpdated(): void {
    const getAllCSSVariableNames = (styleSheets: StyleSheetList = document.styleSheets) => {
      const cssVars: string[] = [];

      Array.from(styleSheets).forEach((styleSheet) => {
        Array.from(styleSheet.cssRules).forEach((rule: any) => {
          if (!rule || !rule['style']) {
            return;
          }

          const styleArray: string[] = rule['style'];
          Array.from(styleArray).forEach((style: string) => {
            if (style.startsWith('--') && cssVars.indexOf(style) == -1) {
              cssVars.push(style);
            }
          });
        });
      });

      return cssVars;
    };

    this.cssVars = getAllCSSVariableNames();
    console.log(this.cssVars);
  }

  render(): TemplateResult {
    return html`
      <nidoca-container>
        <nidoca-article title="CSS Variablen">
          ${guard(
      [this.cssVars],
      () =>
        html`
                ${repeat(
          this.cssVars,
          (cssVar) => html`
                    <nidoca-form-text
                      style="width:100%;padding-bottom: var(--space-3);"
                      @input="${(event: InputEvent) => {
              document.documentElement.style.setProperty(
                cssVar,
                event.target ? (<NidocaFormText>event.target).getOutputData().value : ''
              );
            }}"
                      type="${cssVar.indexOf('color') > -1 ? NidocaFormTextType.color : NidocaFormTextType.text}"
                      name="${cssVar}"
                      value="${getComputedStyle(document.documentElement).getPropertyValue(cssVar).trim()}"
                      label="${cssVar}"
                    ></nidoca-form-text>
                  `
        )}
              `
    )}
        </nidoca-article>
      </nidoca-container>
    `;
  }
}
