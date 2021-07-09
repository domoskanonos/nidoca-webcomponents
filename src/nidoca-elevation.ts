import {html, LitElement, TemplateResult, css, PropertyValues} from "lit";
import {customElement} from "lit/decorators/custom-element";
import {property} from "lit/decorators/property";
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

  @property({type: Object})
  associatedElement: HTMLElement | undefined;

  @property({type: Object})
  content: TemplateResult | undefined;

  render(): TemplateResult {
    return html`
      <nidoca-visible
        visibleType="${this.show ? VisibleType.NORMAL : VisibleType.HIDE}"
        @mouseout="${() => this.dispachtEvent()}"
      >
        <div class="elevationContainer" style="${this.calculatePositionStyle(this.associatedElement)}">
          <nidoca-border>
            ${this.content}
            <slot></slot>
          </nidoca-border>
        </div>
      </nidoca-visible>
    `;
  }

  calculatePositionStyle(basedOnComponent: HTMLElement | undefined): string {
    let style: string = "top:0;left:0;";
    if (basedOnComponent) {
      const rect = basedOnComponent.getBoundingClientRect();
      style = `top:${rect.bottom}px;left:${rect.left}px;`;
      console.log(rect.top, rect.right, rect.bottom, rect.left);
    }
    return style;
  }

  updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);

    document.addEventListener("click", (me: MouseEvent) => {
      const rect = this.associatedElement?.getBoundingClientRect();
      if (rect) {
        if (rect.top > me.clientY || rect.right < me.clientX || rect.left > me.clientX || rect.bottom < me.clientY) {
          this.dispachtEvent();
          console.log("iosdjiosdjio");
        }
      }
      me.stopPropagation();
    });
    changedProperties.forEach((oldValue, propName) => {
      if (propName == "associatedElement") {
        console.debug(`${this.tagName} : property ${String(propName)} changed. oldValue: ${oldValue}`);
        if (this.associatedElement) {
          this.associatedElement.addEventListener("mouseout", () => {
            //this.throwMousOutEvent();
          });
        }
      }
    });
  }

  dispachtEvent(): void {
    this.dispatchEvent(
      new CustomEvent("nidoca-elevation-event-closeme", {
        detail: this,
        bubbles: true,
        composed: true,
      })
    );
  }
}
