import {css, html, property, query, TemplateResult, LitElement} from 'lit-element';
import {TypographyType} from '.';

export abstract class NidocaTemplate extends LitElement {
  @property()
  sidebarClosed: boolean = false;

  render(): TemplateResult {
    return html`
      <style>
        .container {
          display: grid;
          width: 100vw;
          height: 100vh;
          grid-template-columns: 250px auto;
          grid-template-rows: 60px 1fr;
        }

        #header {
          background-color: var(--app-color-primary-background);
        }

        #sidebar {
          grid-row: 1 / 3;
          background-color: var(--app-color-primary-background);
        }

        #content {
          background-color: var(--app-color-background);
        }
      </style>

      <div class="container">
        <div id="sidebar">${this.getSidebar()}</div>
        <div id="header">${this.getHeader()}</div>
        <div id="content">${this.getContent()}</div>
      </div>
    `;
  }

  getContent(): TemplateResult {
    return html``;
  }

  getSidebar(): TemplateResult {
    return html``;
  }

  getHeader(): TemplateResult {
    return html`<nidoca-icon
      @nidoca-event-icon-clicked="${() => (this.sidebarClosed = !this.sidebarClosed)}"
      title="menu"
      icon="menu"
      .clickable="${true}"
    ></nidoca-icon>
    D: ${this.sidebarClosed}
    `;
  }
}
