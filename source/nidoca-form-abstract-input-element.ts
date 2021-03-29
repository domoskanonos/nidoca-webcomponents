import {LitElement} from 'lit-element';

export class FormOutputData {
  key: string = '';
  value: any;
}

export abstract class NidocaFormAbstractInputElement extends LitElement {
  abstract validate(): boolean;

  abstract getOutputData(): FormOutputData;
}
