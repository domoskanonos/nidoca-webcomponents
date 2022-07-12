import {css, html, LitElement, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";

@customElement("nidoca-page-main")
export class NidocaPageMain extends LitElement {
   static styles = css``;
   render(): TemplateResult {
      return html` <nidoca-container style="padding-top:20vh;padding-bottom:20vh;">
            <div
               style="display:flex;align-items:center;justify-content:center;align-content:flex-start;"
            >
               <nidoca-img src="logo.svg" width="128px"></nidoca-img>
               <nidoca-text-h1 style="padding-left:var(--space-2);"
                  >nidoca-webcomponents</nidoca-text-h1
               >
            </div>
         </nidoca-container>

         <nidoca-container theme="primary">
            <nidoca-section>
               <nidoca-icon-with-description title="Komponentenbibliothek" icon="local_library">
                  Die Nidoca Webcomponents ist eine Sammlung von Webkomponenten mit über 36
                  Komponenten. Diese sind für den direkten Einsatz in deiner Webanwendung. Egal ob
                  normales HTML, Angular, React, Lit. Die Komponenten können dank der Webcomponent
                  Technologie überall in andere Frameworks eingebaungen werden.
               </nidoca-icon-with-description>
               <nidoca-icon-with-description title="Leichtgewichtig" icon="code">
                  Es ist ein sehr kleines, leichtes Komponenten-Framework, das nur 32 KB klein ist.
                  Es enthält mehr als 30 Komponenten und diverse Zusatzfunktionen wie Routing /
                  Internationalisierung und Speicherung. Komponenten können einfach angepasst werden
                  und sind sehr einfach erweiterbar. erstellen.
               </nidoca-icon-with-description>
               <nidoca-icon-with-description title="Open Source" icon="lightbulb">
                  Es ist ein Open-Source-Projekt, das Sie auf Github finden können. Du kannst das
                  Projekt natürlich gerne finanziell unterstützen, wenn es dir gefällt.
               </nidoca-icon-with-description>
            </nidoca-section>
         </nidoca-container>
         https://jsfiddle.net/domoskanonos/04ndLcj7/10/
         <nidoca-code>
            https://domoskanonos.github.io/nidoca-documentation/webcomponents/nidoca-webcomponents.js
            https://domoskanonos.github.io/nidoca-documentation/webcomponents/nidoca.css
         </nidoca-code>`;
   }
}
