import {css, customElement, html, property, unsafeCSS, LitElement, TemplateResult} from "lit-element";
import {VisibleType} from ".";

@customElement("nidoca-elevation")
export class NidocaElevation extends LitElement {
  static styles = css`
    .elevationContainer {
      position: fixed;
      z-index: 999;
    }
  `;

  @property({type: Boolean})
  show: boolean = false;

  @property({type: Number})
  x: number = 0;

  @property({type: Number})
  y: number = 0;

  @property({type: Object})
  content: TemplateResult = html``;

  render(): TemplateResult {
    return html`
      <nidoca-visible visibleType="${this.show ? VisibleType.NORMAL : VisibleType.HIDE}">
        <div class="elevationContainer" style="top:${this.x};left:${this.y};">
          <nidoca-border>
            ${this.content}
            <slot></slot>
          </nidoca-border>
        </div>
      </nidoca-visible>
    `;
  }
}
