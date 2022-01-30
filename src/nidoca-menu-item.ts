import {css, html, TemplateResult, LitElement} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {NidocaTypographyType} from ".";

export enum NidocaMenuItemType {
  ITEM = "item",
  SECTION = "section",
}

@customElement("nidoca-menu-item")
export class NidocaMenuItem extends LitElement {
  static styles = css`
    .container {
      display: flex;
    }
    .item {
      cursor: pointer;
    }
  `;

  @property({type: String})
  text: string = "";

  @property({type: String})
  icon: string = "";

  @property({type: String})
  type: string = NidocaMenuItemType.ITEM;

  render(): TemplateResult {
    return html`
      <div class="container ${this.type}">
        ${this.icon
          ? html` <nidoca-icon
              slot="graphic"
              icon="${this.icon}"
              style="padding-right:var(--space); font-size:var(--icon-size);"
            ></nidoca-icon>`
          : html` <nidoca-layout-spacer left="10px" right="36px"></nidoca-layout-spacer>`}
        ${this.text
          ? html`<nidoca-text
              .type="${this.type == NidocaMenuItemType.ITEM
                ? NidocaTypographyType.SUBTITLE1
                : NidocaTypographyType.CAPTION}"
              >${this.text}</nidoca-text
            >`
          : html``}
      </div>
    `;
  }
}
