import {css, html, LitElement, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {NidocaContainerSize, NidocaFlexLayoutAlignContent, NidocaTypographyType} from "..";
import {NidocaButtonType} from "../nidoca-button";
import {NidocaLayoutSpacerSize, NidocaLayoutSpacerType} from "../nidoca-layout-spacer";
import {DUMMY_DESCRIPTION, DUMMY_DESCRIPTION_SHORT, DUMMY_IMAGE, DUMMY_TITLE} from "./constants";

@customElement("nidoca-page-main")
export class NidocaPageMain extends LitElement {
  static styles = css``;

  render(): any {
    return html`
      <nidoca-layout-spacer .spacerSize="${NidocaLayoutSpacerSize.BIG}" .spacerTypes="${[NidocaLayoutSpacerType.TOP]}">
      </nidoca-layout-spacer>

      <nidoca-layout-container containerSize="${NidocaContainerSize._50}">
        <nidoca-typography typographyType="${NidocaTypographyType.H1}">Komponentenübersicht</nidoca-typography>

        <nidoca-layout-spacer
          .spacerSize="${NidocaLayoutSpacerSize.MEDIUM}"
          .spacerTypes="${[NidocaLayoutSpacerType.TOP, NidocaLayoutSpacerType.BOTTOM]}"
        >
          <nidoca-typography typographyType="${NidocaTypographyType.CAPTION}"
            >Hier findet ihr eine Übersicht über alle verfügbaren Komponenten. Die einzelnen Komponenten sind in
            Unterkategorien geordnet. So gibt es zum Beispiel eine Kategorie nur für Layout Komponenten und Form
            Komponententen.</nidoca-typography
          >
        </nidoca-layout-spacer>

        <nidoca-typography typographyType="${NidocaTypographyType.H3}">Nidoca Layout Komponenten</nidoca-typography>

        <nidoca-layout-spacer
          .spacerSize="${NidocaLayoutSpacerSize.MEDIUM}"
          .spacerTypes="${[NidocaLayoutSpacerType.TOP, NidocaLayoutSpacerType.BOTTOM]}"
        >
          <nidoca-typography typographyType="${NidocaTypographyType.CAPTION}"
            >Nidoca Layout Komponenten dienen der Strukturierung deiner Seite. So kannst du deine Seite konfortable
            unterteilen und die Sicht für einzelne Entgeräte wie Mobile,Tablet und Destkop flexibel
            konfigurieren.</nidoca-typography
          >
        </nidoca-layout-spacer>

        <nidoca-layout-spacer
          .spacerSize="${NidocaLayoutSpacerSize.MEDIUM}"
          .spacerTypes="${[NidocaLayoutSpacerType.TOP, NidocaLayoutSpacerType.BOTTOM]}"
        >
          <nidoca-accordion>
            <nidoca-accordion-item header="nidoca-layout-container">
              <lit-viewer>
                <nidoca-layout-container
                  .containerSize="${NidocaContainerSize._50}"
                  style="background-color: var(--app-color-secondary-background); display:block;"
                >
                  <nidoca-img src="${DUMMY_IMAGE}"> </nidoca-img>
                </nidoca-layout-container>
              </lit-viewer>
            </nidoca-accordion-item>
            <nidoca-accordion-item header="nidoca-layout-flex">
              <lit-viewer .customEventNames="${["nidoca-button-event-clicked"]}">
                <nidoca-layout-flex
                  .flexAlignContent="${NidocaFlexLayoutAlignContent.CENTER}"
                  itemStyle="flex-basis: 100%;"
                >
                  <nidoca-img src="http://lorempixel.com/320/200/"></nidoca-img>
                  <nidoca-img src="http://lorempixel.com/160/80/"></nidoca-img>
                  <nidoca-img src="http://lorempixel.com/320/200/"></nidoca-img>
                  <nidoca-img src="http://lorempixel.com/160/80/"></nidoca-img>
                  <nidoca-img src="http://lorempixel.com/320/200/"></nidoca-img>
                  <nidoca-img src="http://lorempixel.com/160/80/"></nidoca-img>
                  <nidoca-img src="http://lorempixel.com/320/200/"></nidoca-img>
                  <nidoca-img src="http://lorempixel.com/160/80/"></nidoca-img>
                  <nidoca-img src="http://lorempixel.com/320/200/"></nidoca-img>
                  <nidoca-img src="http://lorempixel.com/160/80/"></nidoca-img>
                  <nidoca-img src="http://lorempixel.com/80/80/"></nidoca-img>
                </nidoca-layout-flex>
              </lit-viewer>
            </nidoca-accordion-item>

            <nidoca-accordion-item header="nidoca-layout-floating">
              <lit-viewer>
                <nidoca-layout-floating>
                  <nidoca-icon-extended round="true" icon="home"> </nidoca-icon-extended>
                </nidoca-layout-floating>
              </lit-viewer>
            </nidoca-accordion-item>
          </nidoca-accordion>
        </nidoca-layout-spacer>

        <nidoca-typography typographyType="${NidocaTypographyType.H3}">Kleine Komponenten</nidoca-typography>

        <nidoca-layout-spacer
          .spacerSize="${NidocaLayoutSpacerSize.MEDIUM}"
          .spacerTypes="${[NidocaLayoutSpacerType.TOP, NidocaLayoutSpacerType.BOTTOM]}"
        >
          <nidoca-accordion>
            <nidoca-accordion-item header="nidoca-button">
              <lit-viewer .customEventNames="${["nidoca-button-event-clicked"]}">
                <nidoca-button
                  text="Mein Button"
                  leadingIcon="home"
                  .buttonType="${NidocaButtonType.CONTAINED}"
                ></nidoca-button>
              </lit-viewer>
            </nidoca-accordion-item>

            <nidoca-accordion-item header="nidoca-typography">
              <lit-viewer>
                <nidoca-typography
                  >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                  labore et dolore magna aliquyam erat, sed diam voluptua.</nidoca-typography
                >
              </lit-viewer>
            </nidoca-accordion-item>

            <nidoca-accordion-item header="nidoca-border">
              <lit-viewer>
                <nidoca-border style="background-color:green;">
                  <nidoca-img src="http://lorempixel.com/320/200/"></nidoca-img>
                </nidoca-border>
              </lit-viewer>
            </nidoca-accordion-item>
          </nidoca-accordion>
        </nidoca-layout-spacer>

        <nidoca-typography typographyType="${NidocaTypographyType.H3}">Inhaltskomponenten</nidoca-typography>

        <nidoca-layout-spacer
          .spacerSize="${NidocaLayoutSpacerSize.MEDIUM}"
          .spacerTypes="${[NidocaLayoutSpacerType.TOP, NidocaLayoutSpacerType.BOTTOM]}"
        >
          <nidoca-accordion>
            <nidoca-accordion-item header="nidoca-accordion">
              <lit-viewer .customEventNames="${["nidoca-button-event-clicked"]}">
                <nidoca-accordion>
                  <nidoca-accordion-item header="Accordion 1">
                    <nidoca-spacer
                      ><nidoca-typography
                        >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
                        sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                        justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                        ipsum dolor sit amet.</nidoca-typography
                      ></nidoca-spacer
                    >
                  </nidoca-accordion-item>
                  <nidoca-accordion-item header="Accordion 2">
                    <nidoca-spacer
                      ><nidoca-typography
                        >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
                        sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                        justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                        ipsum dolor sit amet.</nidoca-typography
                      ></nidoca-spacer
                    >
                  </nidoca-accordion-item>
                  <nidoca-accordion-item header="Accordion 3">
                    <nidoca-spacer
                      ><nidoca-typography
                        >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
                        sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                        justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                        ipsum dolor sit amet.</nidoca-typography
                      ></nidoca-spacer
                    >
                  </nidoca-accordion-item>
                </nidoca-accordion>
              </lit-viewer>
            </nidoca-accordion-item>








            <nidoca-accordion-item header="nidoca-search-bar">
            <lit-viewer .customEventNames="${["nidoca-search-bar-event-value-changed"]}">
              <nidoca-search-bar></nidoca-search-bar>
            </lit-viewer>
          </nidoca-accordion-item>



















          </nidoca-accordion>
        </nidoca-layout-spacer>
      </nidoca-layout-container>
    `;
  }
}
