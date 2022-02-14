import {customElement} from "lit/decorators.js";
import {NidocaFormText, NidocaFormTextType} from ".";


@customElement("nidoca-form-date")
export class NidocaFormDate extends NidocaFormText {

    constructor() {
        super();
        this.type = NidocaFormTextType.DATE;
    }

}
