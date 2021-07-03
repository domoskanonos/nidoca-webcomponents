import {css, html, LitElement, TemplateResult} from "lit";
import {customElement} from "lit/decorators/custom-element";
import {
  NidocaColorScheme,
} from "..";


@customElement("nidoca-page-top-app-bar")
export class NidocaTopAppBar extends LitElement {
  static styles = css``;

  render(): TemplateResult {
    return html`
      ${[NidocaColorScheme.PRIMARY, NidocaColorScheme.SECONDARY, NidocaColorScheme.SURFACE].map(
        (colorScheme) => html`
          <nidoca-top-app-bar .prominent="${true}" .colorScheme="${colorScheme}">
            <nidoca-icon
              slot="right"
              icon="search"
            ></nidoca-icon>
            <nidoca-icon
              slot="right"
              icon="list"
            ></nidoca-icon>
            <nidoca-icon slot="topRight" icon="share"></nidoca-icon>
            <nidoca-icon
              slot="right"
              icon="more_vert"
              .clickable="${true}"
            ></nidoca-icon>

            <nidoca-search-bar slot="prominent" placeholder="Suche..."></nidoca-search-bar>
          </nidoca-top-app-bar>
        `
      )}
    `;
  }
  clicked(index: number): void {
    throw new Error("Method not implemented." + index);
  }
}
