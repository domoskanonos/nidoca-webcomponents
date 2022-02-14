import {customElement} from "lit/decorators.js";
import {NidocaTextCaption} from ".";

@customElement("nidoca-text-warning")
export class NidocaTextWarning extends NidocaTextCaption {
  constructor() {
    super();
    this.style.color = "yellow";
  }
}
