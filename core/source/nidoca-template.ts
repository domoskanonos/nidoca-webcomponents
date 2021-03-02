import {css, html, property, query, TemplateResult, LitElement} from 'lit-element';

export abstract class NidocaTemplate extends LitElement {

    static styles = css`
  
    #header {
      position: fixed;
      width: 100%;
      height: 60px;
      z-index: 1;
      background-color: var(--app-color-primary-background);
      color: var(--app-color-primary);
    }

    #content {
    position: fixed;
      top: 60px;
      min-height: 100%;
      width: 100%;
    }

    #content.menuClosed {
      margin-left: 0;
      opacity: 1;
      transition: all 0.35s ease;
    }

    #sidebar {z-index: 1;
     position: fixed;
     width:300px;
      top: 60px;
      min-height: 100%;
      background-color: var(--app-color-primary-background);
      transition: all 0.35s linear;
    }

    #sidebar.menuClosed {
      width: 0px;

      transition: all 0.35s ease;
    }

    @media screen and (min-width: 521px) {
      #content {
        transition: margin-left 0.35s linear;
        margin-left: 300px;
      }
    }
  `;

    @property()
    navigationClosed: boolean = true;

    @query('#top')
    private topElement: HTMLElement | undefined;
    @query('#left')
    private leftElement: HTMLElement | undefined;
    @query('#main')
    private mainElement: HTMLElement | undefined;

    render(): TemplateResult {
        return html`
            <div id="header" class="${this.navigationClosed ? 'menuClosed' : ''}">${this.getHeaderContent()}</div>
            <div id="sidebar" class="${this.navigationClosed ? 'menuClosed' : ''}">${this.getSidebarContent()}</div>
            <div id="content" class="${this.navigationClosed ? 'menuClosed' : ''}">${this.getContent()}</div>
        `;
    }

    getHeaderContent(): TemplateResult {
        return html`
            <nidoca-icon
                    icon="${this.navigationClosed ? 'menu' : 'clear' }"
                    .clickable="${true}"
                    @nidoca-event-icon-clicked="${() => this.toogleNavigation()}"
            ></nidoca-icon>`;
    }

    getSidebarContent(): TemplateResult {
        return html`
            <nidoca-navigation
                    @nidoca-event-link-clicked="${(event: CustomEvent) => this.navigationLinkClicked(event)}"
                    .closed="${this.navigationClosed}"
            >
            </nidoca-navigation>`;
    }

    getContent(): TemplateResult {
        return html``;
    }

    navigationLinkClicked(event: CustomEvent<any>): void {
        console.warn('Method not implemented. event detail: %s' + event.detail);
    }

    private toogleNavigation(): void {
        console.log('toogle navigation.');
        this.navigationClosed = !this.navigationClosed;
    }
}
