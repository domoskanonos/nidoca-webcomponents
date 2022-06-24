import {NidocaRouteListener, NidocaRouter} from "@domoskanonos/nidoca-router";
import {html, LitElement, HTMLTemplateResult} from "lit";
import {customElement, property} from "lit/decorators.js";

@customElement("nidoca-my-app")
export class NidocaMyApp extends LitElement implements NidocaRouteListener {
  @property({type: Object})
  content: TemplateResult = html``;

  constructor() {
    super();
    NidocaRouter.getUniqueInstance().subscribe(this);
    this.routeChanged(NidocaRouter.getUniqueInstance().getCurrentPage());
  }

  routeChanged(relUrl: string): void {
    switch (relUrl) {
      case "main":
      default:
        this.content = html`<nidoca-page-main></nidoca-page-main>`;
    }
  }

  render(): HTMLTemplateResult {
    return html`
      <nidoca-template>
        <nidoca-link
          slot="topRight"
          style="padding-right:var(--space-2);"
          targetType="_self"
          href="https://domoskanonos.github.io/nidoca-documentation/"
          >Homepage</nidoca-link
        >

        <nidoca-link
          slot="topRight"
          style="padding-right:var(--space-2);"
          targetType="_blank"
          href="https://domoskanonos.github.io/nidoca-documentation/typedocs/index.html"
          >Typedoc</nidoca-link
        >

        <nidoca-link
          slot="topRight"
          style="padding-right:var(--space-2);"
          targetType="_blank"
          href="https://github.com/domoskanonos/nidoca-webcomponents"
          >Github</nidoca-link
        >

        <div slot="content">${this.content}</div>

        <nidoca-menu slot="left" theme="primary">
          <nidoca-menu-item text="Start"></nidoca-menu-item>
          <nidoca-menu-area text="Framework"></nidoca-menu-area>
          <nidoca-menu-item text="Komponenten"></nidoca-menu-item>
          <nidoca-menu-area icon="gavel" text="Rechtliches"></nidoca-menu-area>
          <nidoca-menu-item text="Impressum"></nidoca-menu-item>
          <nidoca-menu-item text="Datenschutz"></nidoca-menu-item>
          <nidoca-menu-item
            text="Nutzungsbedingungen"
            @nidoca-event-menu-item-clicked="${() => {
              console.log("dlklodkji");
              NidocaRouter.getUniqueInstance().navigate("#dodod");
            }}"
          ></nidoca-menu-item>
          <nidoca-menu-area text="Sonstiges"></nidoca-menu-area>
          <nidoca-menu-item icon="home" text="Einstellungen"></nidoca-menu-item>
        </nidoca-menu>
      </nidoca-template>
    `;
  }
}
