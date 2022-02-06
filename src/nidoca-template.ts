import {css, html, TemplateResult, LitElement, PropertyValues} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {query} from "lit/decorators.js";
import {MOBILE_MAX_WIDTH, NidocaTheme, TABLET_MAX_WIDTH, TABLE_MIN_WIDTH} from ".";

@customElement("nidoca-template")
export class NidocaTemplate extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-direction: row;
    }

    .slotHeader {
      display: flex;
      align-items: center;
    }

    #header {
    }

    .right {
      width: 100%;
    }

    #content {
      width: 100%;
      display: flex;
      flex-direction: column;
      color: var(--app-color-background);
      background-color: var(--app-color-background-background);
    }

    #content.menuClosed {
    }

    #sidebar {
      display: block;
      color: var(--app-color-primary);
      background-color: var(--app-color-primary-background);
      min-height: 100%;
      max-height: 100%;
    }

    #sidebar.menuClosed {
      transition: all 0.35s ease;
    }

    @media only screen and (min-width: ${TABLE_MIN_WIDTH}px) and (max-width: ${TABLET_MAX_WIDTH}px) {
      #content {
      }
    }

    @media only screen and (max-width: ${MOBILE_MAX_WIDTH}px) {
      #content {
      }
    }

    @media screen and (min-width: ${MOBILE_MAX_WIDTH}px) {
      #content {
        transition: margin-left 0.35s linear;
      }
    }
  `;

  @property({type: Boolean})
  navigationClosed: boolean = false;

  @property({type: Boolean})
  prominent: boolean = false;

  @query("#header")
  private headerElement: HTMLElement | undefined;

  @query("#sidebar")
  private sidebarElement: HTMLElement | undefined;

  @query("#content")
  private contentElement: HTMLElement | undefined;

  constructor() {
    super();
    document.getElementsByTagName("html")[0].setAttribute("oncontextmenu", "return false"); // avoid right click context menu
  }

  protected updated(_changedProperties: PropertyValues): void {
    super.updated(_changedProperties);
    /*
    new Promise((resolve) => requestAnimationFrame(resolve)).then(() => {
      if (this.headerElement != undefined) {
        const height = this.headerElement.offsetHeight;
        const topStyle = "top:".concat(String(height)).concat("px;");
        const paddingTopStyle = "padding-top:".concat(String(height)).concat("px;");
        console.debug("set header height to corresponding elements: %s", topStyle);
        if (this.sidebarElement != undefined) {
          this.sidebarElement.setAttribute("style", topStyle);
        }
        if (this.contentElement != undefined) {
          this.contentElement.setAttribute("style", paddingTopStyle);
        }
      }
    });
     */
  }

  render(): TemplateResult {
    return html`
      <slot id="sidebar" class="${this.navigationClosed ? "menuClosed" : ""}" name="sidebar"></slot>

      <div class="right">
        <nidoca-top-app-bar
          id="header"
          class="${this.navigationClosed ? "menuClosed" : ""}"
          .prominent="${this.prominent}"
          theme="${NidocaTheme.PRIMARY}"
        >
          <span slot="left">
            <slot class="slotHeader" name="topLeft"></slot>
          </span>
          <span slot="center">
            <slot class="slotHeader" name="topCenter"></slot>
          </span>
          <span slot="right">
            <slot class="slotHeader" name="topRight"></slot>
          </span>
          <span style="width: 100%;" slot="prominent">
            <slot class="slotHeader" name="prominent"></slot>
          </span>
        </nidoca-top-app-bar>

        <slot id="content" class="${this.navigationClosed ? "menuClosed" : ""}" name="content"></slot>
      </div>
    `;
  }
}
