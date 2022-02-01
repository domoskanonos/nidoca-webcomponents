import {css, html, TemplateResult, LitElement} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {NidocaTypographyType} from ".";

@customElement("nidoca-article")
export class NidocaArticle extends LitElement {
    static styles = css`
    :host {
      display: block;
    }
    slot {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: flex-start;
    }
  `;


    @property({type: String})
    overline: string = "";

    @property({type: String})
    title: string = "";

    @property({type: String})
    summary: string = "";

    @property({type: String})
    text: string = "";

    render(): TemplateResult {
        return html`
            <div style="display:flex; flex-direction:column;">
                <slot name="caption"></slot>
                ${this.overline ? html`
                    <nidoca-text .type="${NidocaTypographyType.OVERLINE}">${this.overline}</nidoca-text> ` : html``}
                <slot name="title"></slot>
                ${this.title ? html`
                    <nidoca-text .type="${NidocaTypographyType.H2}">${this.title}</nidoca-text> ` : html``}
                <slot name="summary"></slot>
                ${this.summary
                        ? html`
                            <nidoca-text .type="${NidocaTypographyType.BODY2}">${this.summary}</nidoca-text> `
                        : html``}
                <slot name="text"></slot>
                ${this.text ? html`
                    <nidoca-text .type="${NidocaTypographyType.BODY1}">${this.text}</nidoca-text>` : html``}
                <slot></slot>
            </div>
        `;
    }
}
