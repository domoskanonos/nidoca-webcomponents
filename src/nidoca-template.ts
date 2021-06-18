import {css, html, property, query, TemplateResult, LitElement, PropertyValues, customElement} from "lit-element";

@customElement("nidoca-template")
export class NidocaTemplate extends LitElement {
  static styles = css`
    
    slot {
      display: flex;
      align-items:center;
    }

    #header {
      position: fixed;
      width: 100%;
      z-index: 1;
      background-color: var(--mdc-theme-primary);
      color: var(--mdc-theme-on-primary);
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
      background-color: var(--mdc-theme-primary);
      transition: all 0.35s linear;
      overflow-y: scroll;
      max-height: 100%;
    }

    #sidebar.menuClosed {
      width: 0px;
      margin-left: -300px;
      transition: all 0.35s ease;
    }

    @media screen and (min-width: 521px) {
      #content {
        transition: margin-left 0.35s linear;
        margin-left: 300px;
      }
    }
  `;

  @property({type: Boolean})
  navigationClosed: boolean = true;

  @query("#header")
  private headerElement: HTMLElement | undefined;

  @query("#sidebar")
  private sidebarElement: HTMLElement | undefined;

  @query("#content")
  private contentElement: HTMLElement | undefined;

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
      <div id="header" class="${this.navigationClosed ? "menuClosed" : ""}">
        <nidoca-top-app-bar>
          <nidoca-icon
            slot="left"
            icon="${this.navigationClosed ? "menu" : "clear"}"
            .clickable="${true}"
            @nidoca-event-icon-clicked="${() => this.toogleNavigation()}"
          ></nidoca-icon>
          <span slot="left">
            <slot name="topLeft"></slot>
          </span>
          <span slot="center">
            <slot name="topCenter"></slot>
          </span>
          <span slot="right">
            <slot name="topRight"></slot>
          </span>
        </nidoca-top-app-bar>
      </div>
      <div id="sidebar" class="${this.navigationClosed ? "menuClosed" : ""}"><slot name="sidebar"></slot></div>
      <div id="content" class="${this.navigationClosed ? "menuClosed" : ""}"><slot name="content"></slot></div>
    `;
  }

  toogleNavigation(): void {
    console.log("toogle navigation.");
    this.navigationClosed = !this.navigationClosed;
  }
}
