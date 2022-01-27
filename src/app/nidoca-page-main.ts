import {css, html, LitElement, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {NidocaDevice, NidocaTheme, NidocaTypographyType} from "..";

@customElement("nidoca-page-main")
export class NidocaPageMain extends LitElement {
  static styles = css``;

  render(): TemplateResult {
    return html`
      <nidoca-section style="width:50%;">
        <nidoca-layout-spacer top="250px" bottom="250px">
          <div style="display:flex;align-items:center;justify-content:center;align-content:flex-start;">
            <nidoca-img
              width="100px"
              src="https://raw.githubusercontent.com/domoskanonos/devbox/main/assets/logo-ink.svg"
            >
            </nidoca-img>
            <nidoca-typography .typographyType="${NidocaTypographyType.H1}"
              >&nbsp;nidoca-webcomponents</nidoca-typography
            >
          </div>
        </nidoca-layout-spacer>
      </nidoca-section>

      <nidoca-layout-container .theme="${NidocaTheme.PRIMARY}">
        <nidoca-section .devices="${[NidocaDevice.DESKTOP]}">
          <nidoca-icon-with-description
            title="Komponentenbibliothek"
            icon="local_library"
            style="padding:var(--space-medium);"
          >
            Nidoce ist eine Komponentenbibliothek mit über 30 Komponenten für den direkten Einsatz in deiner
            Webanwendung. Egal ob normales HTML, Angular, React, Lit. Die Komponenten können dank der Webcomponent
            Technologie überall in andere Frameworks eingebaungen werden.
          </nidoca-icon-with-description>
          <nidoca-icon-with-description title="Leichtgewichtig" icon="code" style="padding:var(--space-medium);">
            Es ist ein sehr kleines, leichtes Komponenten-Framework, das nur 32 KB klein ist. Es enthält mehr als 30
            Komponenten und diverse Zusatzfunktionen wie Routing / Internationalisierung und Speicherung. Komponenten
            können einfach angepasst werden und sind sehr einfach erweiterbar. erstellen.
          </nidoca-icon-with-description>
          <nidoca-icon-with-description title="Open Source" icon="code" style="padding:var(--space-medium);">
            Es ist ein Open-Source-Projekt, das Sie auf Github finden können. Du kannst das Projekt natürlich gerne
            finanziell unterstützen, wenn es dir gefällt.
          </nidoca-icon-with-description>
        </nidoca-section>
      </nidoca-layout-container>

      <nidoca-section>
        <nidoca-img src="https://picsum.photos/500"></nidoca-img>
        <nidoca-img src="https://picsum.photos/600"></nidoca-img>
        <nidoca-img src="https://picsum.photos/700"></nidoca-img>
        <nidoca-img src="https://picsum.photos/800"></nidoca-img>

        <nidoca-article
          style="padding:var(--space-max);"
          title="Lorem Ipsum"
          summary="Lorem Ipsum Dolorem ipsum med en to."
          text="Lorem Ipsum Dolorem ipsum med en to. Lorem Ipsum Dolorem ipsum med en to. Lorem Ipsum Dolorem ipsum med en to. Lorem Ipsum Dolorem ipsum med en to."
        ></nidoca-article>
      </nidoca-section>

      <nidoca-section style="width:50%; padding:50px;">
        <nidoca-img src="https://picsum.photos/id/1/800/600/"></nidoca-img>
        <nidoca-article
          style="padding-left:25px;"
          title="Lorem Ipsum"
          summary="Lorem Ipsum Dolorem ipsum med en to."
          text="Lorem Ipsum Dolorem ipsum med en to. Lorem Ipsum Dolorem ipsum med en to. Lorem Ipsum Dolorem ipsum med en to. Lorem Ipsum Dolorem ipsum med en to."
        ></nidoca-article>
      </nidoca-section>

      <nidoca-layout-container .theme="${NidocaTheme.SECONDARY}">
        <nidoca-section style="width:50%; padding-top:var(--space-max);padding-bottom:var(--space-max);">
          <nidoca-article
            summary="Die Komponenten sind für Desktop, Tablet und Mobile optimiert."
            text="The components looks good on all devices, because they are designed responsive. Responsive web design is a
            creative and technical paradigm for creating websites, so that they can react to the properties of the end
            device used, especially smartphones and tablet computers."
          >
            <nidoca-typography slot="title" .typographyType="${NidocaTypographyType.H2}"
              >Responsive Komponenten</nidoca-typography
            >
          </nidoca-article>
        </nidoca-section>
      </nidoca-layout-container>

      <nidoca-layout-container .theme="${NidocaTheme.BACKGROUND}">
        <nidoca-section style="width:50%; padding-top:var(--space-max);padding-bottom:var(--space-max);">
          <nidoca-article
            summary="Alle Komponenten erfüllen den Webcomponent Standart"
            text="Webkomponenten sind eine Gruppe von Web-Technologien, die es ermöglichen, benutzerdefinierte, wiederverwendbare HTML Elemente zu erstellen, deren Funktionalität gekapselt ist und damit vollständig getrennt von anderem Code."
          >
            <nidoca-typography slot="title" .typographyType="${NidocaTypographyType.H2}"
              >Webcomponents</nidoca-typography
            >
          </nidoca-article>
        </nidoca-section>
      </nidoca-layout-container>

      <nidoca-layout-container .theme="${NidocaTheme.PRIMARY}">
        <nidoca-section style="width:50%; padding:var(--space-max);">
          <nidoca-form-contact></nidoca-form-contact>
        </nidoca-section>
      </nidoca-layout-container>
    `;
  }
}
