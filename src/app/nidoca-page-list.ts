import {css, html, LitElement, TemplateResult} from "lit";
import {customElement, property} from "lit/decorators.js";
import {NidocaTextType} from "../nidoca-text";
import {CrudyboyClient} from "@domoskanonos/crudyboy-client";
import {Vertrag} from "./model/vertrag";

@customElement("nidoca-page-list")
export class NidocaPageList extends LitElement {
  static styles = css``;

  private crudyboy: CrudyboyClient = new CrudyboyClient("http://localhost:8081", "/vertrag");

  @property({type: Array, converter: Array})
  vertraege: Vertrag[] = [];

  protected firstUpdated(): void {
    this.crudyboy.search(0, 0, "name:asc", "").then((pc: Vertrag[]) => {
      console.trace("load vertrags, size: %s", pc.length);
      this.vertraege = pc;
    });
  }

  @property({type: Boolean, converter: String})
  hideSidebox: boolean = true;

  render(): TemplateResult {
    return html`
      <nidoca-split-screen .hideSidebox="${this.hideSidebox}">
        <div slot="left">
          <nidoca-box>
            <nidoca-text type="${NidocaTextType.H2}">Verträge</nidoca-text>
            <nidoca-text type="${NidocaTextType.CAPTION}">${this.vertraege.length} Verträge</nidoca-text>
            <nidoca-search-bar theme="surface"></nidoca-search-bar>
          </nidoca-box>
          <nidoca-list theme="secondary" selectionMode>
            ${this.vertraege.map((vertrag) => {
              return html`${vertrag.name}
                <nidoca-list-item
                  @nidoca-event-list-item-select="${() => {
                      alert("joijdfioj");
                    this.hideSidebox = false;
                  }}"
                  primaryText="${vertrag.name}"
                  secondaryText=""
                ></nidoca-list-item> `;
            })}
            <nidoca-list-section>A</nidoca-list-section>
          </nidoca-list>
        </div>

        <div slot="sidebox">Hallo</div>
      </nidoca-split-screen>
    `;
  }
}
