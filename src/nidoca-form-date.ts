import {customElement} from 'lit/decorators.js';
import { NidocaFormText, NidocaFormTextType } from './nidoca-form-text';

@customElement('nidoca-form-date')
export class NidocaFormDate extends NidocaFormText {
  constructor() {
    super();
    this.type = NidocaFormTextType.date;
  }
}
