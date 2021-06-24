import {NidocaRouter} from "@domoskanonos/nidoca-router";
import {css, customElement, html, LitElement, TemplateResult} from "lit-element";

@customElement("nidoca-elevation-settings")
export class NidocaElevationSettings extends LitElement {
  static styles = css``;
  render(): TemplateResult {
    return html`
      <nidoca-navigation slot="sidebar">
        <nidoca-navigation-link
          slot="links"
          icon="home"
          text="Home"
          href="#main"
          .rendered="${true}"
          @nidoca-event-link-clicked="${() => NidocaRouter.getUniqueInstance().navigate("main")}"
        ></nidoca-navigation-link>
        <nidoca-navigation-link
          slot="links"
          icon="home"
          text="Gallery"
          href="#main"
          .rendered="${true}"
          @nidoca-event-link-clicked="${() => NidocaRouter.getUniqueInstance().navigate("gallery")}"
        ></nidoca-navigation-link>
      </nidoca-navigation>
    `;
  }
}
