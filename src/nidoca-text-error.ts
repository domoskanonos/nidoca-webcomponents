import {customElement} from 'lit/decorators.js';
import {NidocaTextCaption} from '.';

@customElement('nidoca-text-error')
export class NidocaTextError extends NidocaTextCaption {
  constructor() {
    super();
    this.style.color = 'red';
  }
}
