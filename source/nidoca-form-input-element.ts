import {KeyValuePair} from '@domoskanonos/frontend-basis';
import {LitElement} from "lit-element";

export abstract class NidocaFormInputElement extends LitElement {

    abstract validate(): boolean;

    abstract getOutputData(): any;

}
