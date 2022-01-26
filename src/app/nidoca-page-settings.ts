import {css, html, LitElement, TemplateResult} from "lit";
import {customElement, property} from "lit/decorators.js";
import {guard} from "lit/directives/guard.js";
import {repeat} from "lit/directives/repeat.js";
import {NidocaDevice, NidocaFormText, NidocaTextType, NidocaTypographyType} from "../index";

@customElement("nidoca-page-settings")
export class NidocaPageSettings extends LitElement {
  static styles = css``;

  @property({type: Array})
  cssVars: string[] = [];

  constructor() {
    super();
    const getAllCSSVariableNames = (styleSheets: StyleSheetList = document.styleSheets) => {
      const cssVars: string[] = [];

      Array.from(styleSheets).forEach((styleSheet) => {
        Array.from(styleSheet.cssRules).forEach((rule: any) => {
          if (!rule || !rule["style"]) {
            return;
          }

          const styleArray: string[] = rule["style"];
          Array.from(styleArray).forEach((style: string) => {
            if (style.startsWith("--") && cssVars.indexOf(style) == -1) {
              cssVars.push(style);
            }
          });
        });
      });

      return cssVars;
    };

    this.cssVars = getAllCSSVariableNames();
  }

  render(): TemplateResult {
    return html`
      <nidoca-layout-spacer .devices="${[NidocaDevice.MOBILE, NidocaDevice.TABLET]}">
        <nidoca-layout-container .devices="${[NidocaDevice.DESKTOP]}" width="50%" contentWidth="auto">
          <div style="display.flex;">
            <nidoca-layout-spacer>
              <nidoca-typography .typographyType="${NidocaTypographyType.H2}">Einstellungen</nidoca-typography>
            </nidoca-layout-spacer>
            <nidoca-layout-spacer></nidoca-layout-spacer>
            <nidoca-typography .typographyType="${NidocaTypographyType.H4}">Angaben gemäß § 5 TMG</nidoca-typography>
            <nidoca-layout-spacer></nidoca-layout-spacer>
            <nidoca-typography .typographyType="${NidocaTypographyType.BODY1}">Dominik Bruhn</nidoca-typography>
            <nidoca-typography .typographyType="${NidocaTypographyType.BODY1}"
              >Holzwickeder Straße 109c</nidoca-typography
            >
          </div>
        </nidoca-layout-container>
      </nidoca-layout-spacer>

      ${guard(
        [this.cssVars],
        () =>
          html`
            ${repeat(
              this.cssVars,
              (cssVar) => html`
                <nidoca-form-text
                  @input="${(event: InputEvent) => {
                    document.documentElement.style.setProperty(
                      cssVar,
                      event.target ? (<NidocaFormText>event.target).getOutputData().value : ""
                    );
                  }}"
                  type="${cssVar.indexOf("color") > -1 ? NidocaTextType.COLOR : NidocaTextType.TEXT}"
                  name="${cssVar}"
                  value="${getComputedStyle(document.documentElement).getPropertyValue(cssVar)}"
                  label="${cssVar}"
                ></nidoca-form-text>
              `
            )}
          `
      )}
    `;
  }
}
