import {css, html, TemplateResult, LitElement} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";

export enum NidocaTargetType {
  BLANK = "_blank",
  SELF = "_self",
  PARENT = "_parent",
  TOP = "_top",
}

@customElement("nidoca-link")
export class NidocaLink extends LitElement {
  static styles = css`
    :host,
    ::slotted(:host) {
      display: contents;
    }
    a {
      color: inherit;
      background-color: inherit;
    }
  `;

  @property({type: String})
  text: string = "";

  @property({type: String})
  href: string = "";

  @property({type: String})
  targetType: string = NidocaTargetType.SELF;

  render(): TemplateResult {
    return html` <a href="${this.href}" .target="${this.targetType}">${this.text}<slot></slot></a> `;
  }
}
