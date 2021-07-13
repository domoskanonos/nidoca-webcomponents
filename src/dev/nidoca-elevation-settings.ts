import {NidocaRouter} from "@domoskanonos/nidoca-router";
import {css, html, LitElement, TemplateResult} from "lit";
import {customElement} from "lit/decorators/custom-element";

@customElement("nidoca-elevation-settings")
export class NidocaElevationSettings extends LitElement {
  static styles = css``;
  render(): TemplateResult {
    return html`
      <nidoca-menu slot="sidebar">
        <nidoca-menu-item
          slot="links"
          icon="home"
          text="Home"
          href="#main"
          .rendered="${true}"
          @nidoca-event-link-clicked="${() => NidocaRouter.getUniqueInstance().navigate("main")}"
        ></nidoca-menu-item>
        <nidoca-menu-item
          slot="links"
          icon="home"
          text="Gallery"
          href="#main"
          .rendered="${true}"
          @nidoca-event-link-clicked="${() => NidocaRouter.getUniqueInstance().navigate("gallery")}"
        ></nidoca-menu-item>
      </nidoca-menu>
    `;
  }
}
