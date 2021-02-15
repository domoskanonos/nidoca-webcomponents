import {LitElement} from "lit-element";

export interface FormOutputData {
    key: string | null;
    value: any;
}

export abstract class NidocaFormInputElement extends LitElement {

    abstract validate(): boolean;

    abstract getOutputData(): FormOutputData;

}
