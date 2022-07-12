import {customElement} from 'lit/decorators.js';
import {NidocaTextCaption} from '.';

@customElement('nidoca-text-success')
export class NidocaTextSuccess extends NidocaTextCaption {
  constructor() {
    super();
    this.style.color = 'green';
  }
}
