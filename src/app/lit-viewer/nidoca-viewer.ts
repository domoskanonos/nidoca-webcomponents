import { html, LitElement, TemplateResult } from "lit";
import { customElement } from "lit/decorators.js";
import { NidocaList } from "../../nidoca-list";
import { NidocaImgRound } from "../../nidoca-img-round";
import { NidocaListItem } from "../../nidoca-list-item";
import { NidocaListSection } from "../../nidoca-list-section";
import { NidocaToast } from "../../nidoca-toast";


@customElement("nidoca-viewer")
export class NidocaViewer extends LitElement {
  public render(): TemplateResult {
    return html`<nidoca-container>
      <nidoca-section>
        <webcomponent-viewer-container>
          ${NidocaList.example()} ${NidocaListItem.example()} ${NidocaListSection.example()}
          ${NidocaImgRound.example()}
    </webcomponent-viewer-container>
      </nidoca-section>
      </nidoca-container>`;
  }
}
