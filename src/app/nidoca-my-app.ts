import {html, LitElement, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";

@customElement("nidoca-my-app")
export class NidocaMyApp extends LitElement {
  render(): TemplateResult {
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


        <span slot="content">Hallo



        <nidoca-code>

        https://domoskanonos.github.io/nidoca-documentation/webcomponents/nidoca-webcomponents.js


        https://domoskanonos.github.io/nidoca-documentation/webcomponents/nidoca.css


        </nidoca-code>




        </span>
      </nidoca-template>
    `;
  }
}
