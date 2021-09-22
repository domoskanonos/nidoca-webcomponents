import {css, html, LitElement, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {
  NidocaContainerSize,
  NidocaDateType,
  NidocaDialog,
  NidocaFlexLayoutAlignContent,
  NidocaTextType,
  NidocaTypographyType,
} from "..";
import {NidocaButton, NidocaButtonType} from "../nidoca-button";
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
            <nidoca-accordion-item header="nidoca-ripple">
              <lit-viewer .customEventNames="${[]}">
                <nidoca-ripple><nidoca-img src="http://lorempixel.com/640/480/"></nidoca-img></nidoca-ripple>
              </lit-viewer>
            </nidoca-accordion-item>

            <nidoca-accordion-item header="nidoca-transition">
              <lit-viewer .customEventNames="${[]}">
                <nidoca-transition><nidoca-img src="http://lorempixel.com/640/480/"></nidoca-img></nidoca-transition>
              </lit-viewer>
            </nidoca-accordion-item>

            <nidoca-accordion-item header="nidoca-wizard">
              <lit-viewer .customEventNames="${[]}">
                <nidoca-wizard>
                  <nidoca-wizard-step>Aufgabe 1</nidoca-wizard-step>
                  <nidoca-wizard-step>Aufgabe 2</nidoca-wizard-step>
                  <nidoca-wizard-step>Aufgabe 3</nidoca-wizard-step>
                  <nidoca-wizard-step>Aufgabe 4</nidoca-wizard-step>
                </nidoca-wizard>
              </lit-viewer>
            </nidoca-accordion-item>

            <nidoca-accordion-item header="nidoca-gallery">
              <lit-viewer .customEventNames="${[]}">
                <nidoca-gallery
                  ><nidoca-img src="http://lorempixel.com/320/200/"></nidoca-img
                  ><nidoca-img src="http://lorempixel.com/320/200/"></nidoca-img
                  ><nidoca-img src="http://lorempixel.com/320/200/"></nidoca-img
                  ><nidoca-img src="http://lorempixel.com/320/200/"></nidoca-img
                  ><nidoca-img src="http://lorempixel.com/320/200/"></nidoca-img
                  ><nidoca-img src="http://lorempixel.com/320/200/"></nidoca-img
                  ><nidoca-img src="http://lorempixel.com/320/200/"></nidoca-img
                ></nidoca-gallery>
              </lit-viewer>
            </nidoca-accordion-item>

            <nidoca-accordion-item header="nidoca-top-app-bar">
              <lit-viewer .customEventNames="${[]}">
                <nidoca-top-app-bar>
                  <nidoca-icon slot="right" icon="search" title="Suchen"></nidoca-icon>
                  <nidoca-search-bar slot="prominent" placeholder="Suche..."></nidoca-search-bar>
                  <nidoca-icon slot="right" title="Einstellungen" icon="more_vert" .clickable="${true}"></nidoca-icon>
                  <nidoca-layout-spacer
                    cssStyle="width:100%;"
                    slot="left"
                    .spacerSize="${NidocaLayoutSpacerSize.BIG}"
                    .spacerTypes="${[NidocaLayoutSpacerType.LEFT]}"
                  >
                    <nidoca-typography .typographyType="${NidocaTypographyType.BODY1}"
                      >Mein Title</nidoca-typography
                    ></nidoca-layout-spacer
                  >
                </nidoca-top-app-bar>
              </lit-viewer>
            </nidoca-accordion-item>

            <nidoca-accordion-item header="nidoca-link">
              <lit-viewer .customEventNames="${[]}">
                <nidoca-link text="Mein Link"></nidoca-link>
              </lit-viewer>
            </nidoca-accordion-item>

            <nidoca-accordion-item header="nidoca-progress">
              <lit-viewer .customEventNames="${[]}">
                <nidoca-progress></nidoca-progress>
              </lit-viewer>
            </nidoca-accordion-item>

            <nidoca-accordion-item header="nidoca-movie">
              <lit-viewer .customEventNames="${[]}">
                <nidoca-movie
                  src="https://www.youtube.com/embed/lJIrF4YjHfQ?autoplay=1&cc_load_policy=1&controls=2&hl=en&rel=0&enablejsapi=1&origin=https%3A%2F%2Fsupport.google.com&widgetid=3"
                ></nidoca-movie>
              </lit-viewer>
            </nidoca-accordion-item>

            <nidoca-accordion-item header="nidoca-img">
              <lit-viewer .customEventNames="${[]}">
                <nidoca-img src="http://lorempixel.com/640/480/"></nidoca-img>
              </lit-viewer>
            </nidoca-accordion-item>

            <nidoca-accordion-item header="nidoca-icon">
              <lit-viewer .customEventNames="${[]}">
                <nidoca-icon icon="home"><nidoca-layout-spacer></nidoca-layout-spacer></nidoca-icon>
              </lit-viewer>
            </nidoca-accordion-item>

            <nidoca-accordion-item header="nidoca-icon-extended">
              <lit-viewer .customEventNames="${[]}">
                <nidoca-icon-extended icon="home"><nidoca-layout-spacer></nidoca-layout-spacer></nidoca-icon-extended>
              </lit-viewer>
            </nidoca-accordion-item>

            <nidoca-accordion-item header="nidoca-elevation">
              <lit-viewer .customEventNames="${[]}">
                <nidoca-elevation><nidoca-img src="http://lorempixel.com/320/200/"></nidoca-img></nidoca-elevation>
              </lit-viewer>
            </nidoca-accordion-item>

            <nidoca-accordion-item header="nidoca-border">
              <lit-viewer .customEventNames="${[]}">
                <nidoca-border><nidoca-layout-spacer></nidoca-layout-spacer></nidoca-border>
              </lit-viewer>
            </nidoca-accordion-item>

            <nidoca-accordion-item header="nidoca-box-shadow">
              <lit-viewer .customEventNames="${[]}">
                <nidoca-box-shadow><nidoca-layout-spacer></nidoca-layout-spacer></nidoca-box-shadow>
              </lit-viewer>
            </nidoca-accordion-item>


            <nidoca-accordion-item header="nidoca-template">
            <lit-viewer .customEventNames="${[]}">
              <nidoca-template>
              </nidoca-template>
            </lit-viewer>
          </nidoca-accordion-item>


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

            <nidoca-accordion-item header="nidoca-card">
              <lit-viewer .customEventNames="${[]}">
                <nidoca-card>
                  <nidoca-img src="http://lorempixel.com/320/200/"></nidoca-img>
                  <nidoca-layout-spacer
                    .spacerSize="${NidocaLayoutSpacerSize.MEDIUM}"
                    .spacerTypes="${[
                      NidocaLayoutSpacerType.TOP,
                      NidocaLayoutSpacerType.LEFT,
                      NidocaLayoutSpacerType.RIGHT,
                    ]}"
                  >
                    <nidoca-typography .typographyType="${NidocaTypographyType.H4}">Meine Karte</nidoca-typography>
                  </nidoca-layout-spacer>

                  <nidoca-layout-spacer
                    .spacerSize="${NidocaLayoutSpacerSize.MEDIUM}"
                    .spacerTypes="${[
                      NidocaLayoutSpacerType.TOP,
                      NidocaLayoutSpacerType.LEFT,
                      NidocaLayoutSpacerType.RIGHT,
                    ]}"
                  >
                    <nidoca-typography .typographyType="${NidocaTypographyType.CAPTION}"
                      >Lorem ipsum dolor sit amet.</nidoca-typography
                    >
                  </nidoca-layout-spacer>

                  <nidoca-layout-spacer
                    .spacerSize="${NidocaLayoutSpacerSize.MEDIUM}"
                    .spacerTypes="${[
                      NidocaLayoutSpacerType.TOP,
                      NidocaLayoutSpacerType.LEFT,
                      NidocaLayoutSpacerType.RIGHT,
                    ]}"
                  >
                    <nidoca-typography
                      .typographyType="${NidocaTypographyType.BODY1}"
                      style="width:220px; display:block;"
                      >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                      ut labore et dolore magna aliquyam erat.</nidoca-typography
                    >
                  </nidoca-layout-spacer>
                </nidoca-card>
              </lit-viewer>
            </nidoca-accordion-item>

            <nidoca-accordion-item header="nidoca-search-bar">
              <lit-viewer .customEventNames="${["nidoca-search-bar-event-value-changed"]}">
                <nidoca-search-bar></nidoca-search-bar>
              </lit-viewer>
            </nidoca-accordion-item>

            <nidoca-accordion-item header="nidoca-chip">
              <lit-viewer .customEventNames="${["nidoca-search-bar-event-value-changed"]}">
                <nidoca-chip>Mein Chip</nidoca-chip>
              </lit-viewer>
            </nidoca-accordion-item>

            <nidoca-accordion-item header="nidoca-form">
              <lit-viewer .customEventNames="${[]}">
                <nidoca-form
                  id="form"
                  @nidoca-form-text-event-change="${() => {
                    console.log("nidoca-form-text-event-change");
                  }}"
                  @nidoca-form-switch-event-change="${() => {
                    console.log("nidoca-form-switch-event-change");
                  }}"
                >
                  <nidoca-form-textarea name="textarea" label="Mein Text"></nidoca-form-textarea>
                  <nidoca-form-text type="${NidocaTextType.TEXT}" name="text" label="Mein Textfeld"></nidoca-form-text>
                  <nidoca-form-text type="${NidocaTextType.EMAIL}" name="email" label="Meine Email"></nidoca-form-text>
                  <nidoca-form-text
                    type="${NidocaTextType.NUMBER}"
                    name="number"
                    label="Meine Nummer"
                  ></nidoca-form-text>
                  <nidoca-form-text
                    type="${NidocaTextType.PASSWORD}"
                    name="password"
                    label="Mein Passwort"
                  ></nidoca-form-text>
                  <nidoca-form-text type="${NidocaTextType.TEL}" name="tel" label="Mein Telefon"></nidoca-form-text>
                  <nidoca-form-text type="${NidocaTextType.URL}" name="url" label="Meine URL"></nidoca-form-text>
                  <nidoca-form-date type="${NidocaDateType.DATE}" name="date" label="Mein Textfeld"></nidoca-form-date>
                  <nidoca-form-date
                    type="${NidocaDateType.DATETIME_LOCAL}"
                    name="dateLocal"
                    label="Mein Textfeld"
                  ></nidoca-form-date>
                  <nidoca-form-date
                    type="${NidocaDateType.MONTH}"
                    name="month"
                    label="Mein Textfeld"
                  ></nidoca-form-date>
                  <nidoca-form-date type="${NidocaDateType.TIME}" name="time" label="Mein Textfeld"></nidoca-form-date>
                  <nidoca-form-date type="${NidocaDateType.WEEK}" name="week" label="Mein Textfeld"></nidoca-form-date>
                  <nidoca-form-switch
                    name="switch"
                    label="Mein Auswahlfeld"
                    assistiveText="Mein Auswahlfeld Informationstext"
                    errorText="Mein Error Text"
                    warningText="Mein Warning Text"
                    .checked="${true}"
                  ></nidoca-form-switch>
                  <nidoca-form-combobox name="combobox" label="Meine Combobox"></nidoca-form-combobox>
                </nidoca-form>
              </lit-viewer>
            </nidoca-accordion-item>

            <nidoca-accordion-item header="nidoca-list">
              <lit-viewer .customEventNames="${[]}">
                <nidoca-list>
                  <nidoca-list-item>
                    <nidoca-layout-spacer
                      .spacerSize="${NidocaLayoutSpacerSize.MEDIUM}"
                      .spacerTypes="${[NidocaLayoutSpacerType.LEFT]}"
                    >
                      Home
                    </nidoca-layout-spacer>
                  </nidoca-list-item>
                  <nidoca-list-item>
                    <nidoca-layout-spacer
                      .spacerSize="${NidocaLayoutSpacerSize.MEDIUM}"
                      .spacerTypes="${[NidocaLayoutSpacerType.LEFT]}"
                    >
                      Gallery
                    </nidoca-layout-spacer>
                  </nidoca-list-item>
                  <nidoca-list-item>
                    <nidoca-layout-spacer
                      .spacerSize="${NidocaLayoutSpacerSize.MEDIUM}"
                      .spacerTypes="${[NidocaLayoutSpacerType.LEFT]}"
                    >
                      Home</nidoca-layout-spacer
                    >
                  </nidoca-list-item>

                  <nidoca-list-item>
                    <nidoca-typography .typographyType="${NidocaTypographyType.H6}">Formular</nidoca-typography>
                    <nidoca-icon slot="graphic" icon="face">face</nidoca-icon>
                    <nidoca-icon slot="meta" icon="arrow_right">arrow_right</nidoca-icon>
                  </nidoca-list-item>
                </nidoca-list>
              </lit-viewer>
            </nidoca-accordion-item>

            <nidoca-accordion-item header="nidoca-table">
              <lit-viewer .customEventNames="${[]}">
                <nidoca-table
                  .headers="${["name", "dsdsd"]}"
                  .rows="${[
                    ["Hallo", "Hallo"],
                    ["Hallo", "Hallo"],
                  ]}"
                >
                </nidoca-table>
              </lit-viewer>
            </nidoca-accordion-item>

            <nidoca-accordion-item header="nidoca-captcha">
              <lit-viewer .customEventNames="${[]}">
                <nidoca-captcha> </nidoca-captcha>
              </lit-viewer>
            </nidoca-accordion-item>

            <nidoca-accordion-item header="nidoca-avatar">
              <lit-viewer .customEventNames="${[]}">
                <nidoca-avatar
                  imgSrc="http://lorempixel.com/320/200/"
                  title="Max Mustermann"
                  description="Softwareentwickler"
                >
                </nidoca-avatar>
              </lit-viewer>
            </nidoca-accordion-item>

            <nidoca-accordion-item header="nidoca-code">
              <lit-viewer .customEventNames="${[]}">
                <nidoca-code> Some Code </nidoca-code>
              </lit-viewer>
            </nidoca-accordion-item>

            <nidoca-accordion-item header="nidoca-dialog">
              <lit-viewer .customEventNames="${[]}">
                <nidoca-dialog
                  @nidoca-event-button-clicked="${(event: CustomEvent) => {
                    (<any>event.target).parentNode.show = false;
                  }}"
                  .show="${false}"
                >
                  <nidoca-button>Schließen</nidoca-button>
                </nidoca-dialog>
              </lit-viewer>
            </nidoca-accordion-item>

            <nidoca-accordion-item header="nidoca-dialog-action">
              <lit-viewer .customEventNames="${[]}">
                <nidoca-dialog-action
                  @nidoca-event-button-clicked="${(event: CustomEvent) => {
                    (<any>event.target).parentNode.show = false;
                  }}"
                  .show="${false}"
                >
                  <nidoca-typography slot="header" typographyType="${NidocaTypographyType.H1}"
                    >Vertrag löschen ?</nidoca-typography
                  >
                  <nidoca-typography slot="text" typographyType="${NidocaTypographyType.BODY1}"
                    >Möchtest du den Vertrag wirklich löschen ? Er geht unwiederruflich verloren.</nidoca-typography
                  >
                  <nidoca-button slot="action" buttonType="${NidocaButtonType.TEXT}">Ok</nidoca-button>
                  <nidoca-layout-spacer
                    slot="action"
                    .spacerSize="${NidocaLayoutSpacerSize.BIG}"
                    .spacerTypes="${[NidocaLayoutSpacerType.RIGHT]}"
                  ></nidoca-layout-spacer>
                  <nidoca-button slot="action" buttonType="${NidocaButtonType.TEXT}">Abbrechen</nidoca-button>
                </nidoca-dialog-action>
              </lit-viewer>
            </nidoca-accordion-item>
          </nidoca-accordion>
        </nidoca-layout-spacer>
      </nidoca-layout-container>
    `;
  }
}
