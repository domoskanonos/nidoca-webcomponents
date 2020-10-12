import {KeyValuePair} from '@domoskanonos/frontend-basis';
import {LitElement} from "lit-element";

export abstract class NidocaInputElement extends LitElement {

    abstract isValid(): boolean;

    abstract validate(): void;

    abstract getOutputData(): KeyValuePair;

}
