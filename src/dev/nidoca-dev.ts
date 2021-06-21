import {customElement, html, LitElement, property, TemplateResult} from "lit-element";
import {FlexAlignContent, TypographyType} from "..";
import {BorderProperty} from "../nidoca-border";
import {FlexAlignItems, FlexJustifyContent} from "../nidoca-flex-container";

@customElement("nidoca-dev")
export class NidocaShowcase extends LitElement {
  @property({type: Boolean})
  prominent: boolean = false;

  render(): TemplateResult {
    return html`
      <nidoca-template .prominent="${this.prominent}">
        <nidoca-typography slot="topCenter" typographyType="${TypographyType.BODY1}"
          >nidoca framework</nidoca-typography
        >
        <nidoca-icon
          slot="topRight"
          icon="search"
          @nidoca-event-icon-clicked="${() => (this.prominent = !this.prominent)}"
        ></nidoca-icon>
        <nidoca-icon slot="topRight" icon="person"></nidoca-icon>
        <nidoca-icon slot="topRight" icon="share"></nidoca-icon>
        <nidoca-icon slot="topRight" icon="more_vert"></nidoca-icon>

        <nidoca-form-text name="search" slot="prominent"></nidoca-form-text>

        <nidoca-layout-section slot="content">
          <nidoca-rich-media src="http://picsum.photos/800/600"> </nidoca-rich-media>
          <nidoca-spacer>
            <nidoca-typography typographyType="${TypographyType.H1}">Lorem ipsum dolor sit amet</nidoca-typography>

            <nidoca-typography typographyType="${TypographyType.BODY1}"
              >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
              aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
              gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</nidoca-typography
            >
            <nidoca-button>Lorem Ipsum</nidoca-button>
          </nidoca-spacer>
        </nidoca-layout-section>

        <nidoca-layout-section slot="content">
          <nidoca-spacer>
            <nidoca-typography typographyType="${TypographyType.H3}">Lorem ipsum dolor sit amet</nidoca-typography>

            <nidoca-typography typographyType="${TypographyType.BODY1}"
              >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </nidoca-typography>
          </nidoca-spacer>
          <nidoca-rich-media src="http://picsum.photos/400/550"> </nidoca-rich-media>
          <nidoca-rich-media src="http://picsum.photos/400/570"> </nidoca-rich-media>
          <nidoca-rich-media src="http://picsum.photos/400/500"> </nidoca-rich-media>
        </nidoca-layout-section>
      </nidoca-template>
    `;
  }
}
