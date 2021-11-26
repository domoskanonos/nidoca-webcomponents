import {css, html, TemplateResult, LitElement} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {NidocaLayoutFlexAlignContent, NidocaLayoutFlexAlignItems, NidocaLayoutFlexDirection, NidocaLayoutFlexJustifyContent, NidocaLayoutFlexWrap} from "./nidoca-layout-flex";
import {NidocaLayoutSpacerType, NidocaLayoutSpacerSize} from "./nidoca-layout-spacer";
import {NidocaTypographyType} from "./nidoca-typography";

@customElement("nidoca-menu")
export class NidocaMenu extends LitElement {
  static styles = css``;

  @property({type: String})
  text: string = "";

  render(): TemplateResult {
    return html`
          <slot>
            
  </slot>
        `;
  }
}
