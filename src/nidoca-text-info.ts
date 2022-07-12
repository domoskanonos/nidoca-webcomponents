import {customElement} from 'lit/decorators.js';
import {NidocaTextCaption} from '.';

@customElement('nidoca-text-info')
export class NidocaTextInfo extends NidocaTextCaption {
  constructor() {
    super();
    this.style.color = 'blue';
  }
}
