import {css, html, TemplateResult, LitElement, PropertyValues} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {query} from "lit/decorators.js";
import {MOBILE_MAX_WIDTH, NidocaTheme, TABLET_MAX_WIDTH, TABLE_MIN_WIDTH} from ".";

@customElement("nidoca-template")
export class NidocaTemplate extends LitElement {
  static styles = css`
    .slotHeader {
      display: flex;
      align-items: center;
    }

    #header {
      position: fixed;
      width: 100%;
      z-index: 1;
      background-color: inherit;
      color: inherit;
    }

    .content {
      display: flex;
      flex-direction: column;
    }

    #content {
      overflow-y: scroll;
    }

    #content.menuClosed {
      margin-left: 0;
      opacity: 1;
      transition: all 0.35s ease;
    }

    #sidebar {
      z-index: 1;
      position: fixed;
      width: 300px;
      min-height: 100%;
      transition: all 0.35s linear;
      overflow-y: scroll;
      max-height: 100%;
    }

    #sidebar.menuClosed {
      width: 0px;
      margin-left: -300px;
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
        margin-left: 300px;
      }
    }

    .slotProminent {
      width: 100%;
    }
  `;

  @property({type: NidocaTheme, converter: String})
  theme: string = NidocaTheme.PRIMARY;

  @property({type: Boolean})
  navigationClosed: boolean = true;

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
  }

  render(): TemplateResult {
    return html`
      <style>
        #sidebar {
          color: var(--app-color-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
        }
      </style>
      <div id="header" class="${this.navigationClosed ? "menuClosed" : ""}">
        <nidoca-top-app-bar style="width:100%;" .prominent="${this.prominent}" theme="${this.theme}">
          <span slot="left">
            <slot class="slotHeader" name="topLeft"></slot>
          </span>
          <span slot="center">
            <slot class="slotHeader" name="topCenter"></slot>
          </span>
          <span slot="right">
            <slot class="slotHeader" name="topRight"></slot>
          </span>
          <span class="slotProminent" slot="prominent">
            <nidoca-layout-spacer>
              <slot class="slotHeader" name="prominent"></slot>
            </nidoca-layout-spacer>
          </span>
        </nidoca-top-app-bar>
      </div>
      <div id="sidebar" class="${this.navigationClosed ? "menuClosed" : ""}"><slot name="sidebar"></slot></div>
      <div id="content" class="${this.navigationClosed ? "menuClosed" : ""}"><slot name="content"></slot></div>
    `;
  }
}
