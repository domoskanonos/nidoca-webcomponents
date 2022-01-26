import {css, html, TemplateResult, LitElement} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {NidocaTypographyType} from ".";

@customElement("nidoca-article")
export class NidocaArticle extends LitElement {
  static styles = css`
    slot {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: flex-start;
    }
  `;

  @property({type: String})
  title: string = "";

  @property({type: String})
  summary: string = "";

  @property({type: String})
  text: string = "";

  render(): TemplateResult {
    return html`
      <div style="display:flex; flex-direction:column;">
        <slot name="title"></slot>
        ${this.title
          ? html`<nidoca-typography .typographyType="${NidocaTypographyType.H2}">${this.title}</nidoca-typography>
              <nidoca-layout-spacer bottom="var(--space-medium)"></nidoca-layout-spacer>`
          : html``}
        <slot name="summary"></slot>${this.summary
          ? html`<nidoca-typography .typographyType="${NidocaTypographyType.BODY1}"
                ><i>${this.summary}</i></nidoca-typography
              >
              <nidoca-layout-spacer bottom="var(--space-medium)"></nidoca-layout-spacer>`
          : html``}
        <slot name="text"></slot>
        ${this.text
          ? html`<nidoca-typography .typographyType="${NidocaTypographyType.BODY1}">${this.text}</nidoca-typography>`
          : html``}
        <slot></slot>
      </div>
    `;
  }
}
