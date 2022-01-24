import {css, html, LitElement, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {NidocaDevice, NidocaTypographyType} from "../index";

@customElement("nidoca-page-settings")
export class NidocaPageSettings extends LitElement {
  static styles = css``;
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
    `;
  }
}
