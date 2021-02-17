import { LitElement } from "lit-element";

export interface FormOutputData {
    key: string | null;
    value: any;
}

export abstract class NidocaFormAbstractInputElement extends LitElement {

    abstract validate(): boolean;

    abstract getOutputData(): FormOutputData;

}
