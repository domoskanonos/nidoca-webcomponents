import {LitElement} from 'lit';
import {NidocaHtml} from './nidoca-html';

export class FormOutputData {
  key: string = '';
  value: any;
}

export abstract class NidocaFormAbstractInputElement extends NidocaHtml {
  abstract validate(): boolean;

  abstract getOutputData(): FormOutputData;
}
