import {css, html, TemplateResult, LitElement} from "lit";
import {customElement} from "lit/decorators/custom-element";
import {property} from "lit/decorators/property";
import {NidocaLayoutSpacerType, NidocaLayoutSpacerSize} from "./nidoca-layout-spacer";
import {
  FlexAlignContent,
  FlexAlignItems,
  FlexDirection,
  FlexJustifyContent,
  FlexWrap,
} from "./nidoca-layout-flex-container";
import {NidocaTypographyType} from "./nidoca-typography";

@customElement("nidoca-menu-item")
export class NidocaMenuItem extends LitElement {
  static styles = css`
    .navItem {
      cursor: pointer;
    }

    ::slotted(.navItem.selected),
    .navItem.selected,
    ::slotted(.navItem:hover),
    .navItem:hover,
    ::slotted(.navItem:active),
    .navItem:active {
      color: var(--mdc-theme-on-primary-light);
      background-color: var(--app-color-primary-dark);
    }
  `;

  @property({type: String})
  icon: string = "";

  @property({type: String})
  text: string = "";

  @property({type: String})
  href: string = "";

  render(): TemplateResult {
    return html`
          <div
            class="navItem"
            class="${"TODO: RouterService.getUniqueInstance().getPath()" == this.href ? "navItem selected" : "navItem"}"
          >
            <nidoca-layout-spacer spacerSize="${NidocaLayoutSpacerSize.LITTLE}" .spacerTypes="${[NidocaLayoutSpacerType.VERTICAL]}">
              <nidoca-layout-flex-container
                @click="${() => this.linkClicked()}"
                .flexDirection="${FlexDirection.ROW}"
                .flexWrap="${FlexWrap.NO_WRAP}"
                .flexJustifyContent="${FlexJustifyContent.FLEX_START}"
                .flexAlignItems="${FlexAlignItems.CENTER}"
                .flexAlignContent="${FlexAlignContent.FLEX_START}"
                itemStyle="flex-basis: 48px auto;"
              >
                <nidoca-icon icon="${this.icon}" .withIconSpace="${false}"></nidoca-icon>
                <nidoca-layout-spacer spacerSize="${NidocaLayoutSpacerSize.LITTLE}" .spacerTypes="${[NidocaLayoutSpacerType.LEFT]}">
                  <nidoca-typography typographyType="${NidocaTypographyType.BODY1}">${this.text}</nidoca-typography>
                </nidoca-layout-spacer>
              </nidoca-layout-flex-container>
            </nidoca-layout-spacer>
          </div>
        `;
  }

  private linkClicked() {
    const customEventName = "nidoca-event-link-clicked";
    console.log("dispatch custom event: %s", customEventName);
    this.dispatchEvent(new CustomEvent(customEventName, {detail: this.href, bubbles: true, composed: true}));
  }
}
