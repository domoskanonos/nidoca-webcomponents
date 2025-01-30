import {LitElement} from 'lit';
import { property } from 'lit/decorators.js';
import { NidocaTheme } from "../nidoca-meta";

export class NidocaHtml extends LitElement {

  @property({ type: NidocaTheme, converter: String })
  theme: string = NidocaTheme.plain;

    throwCustomEvent(eventName: string, data: any){
        this.dispatchEvent(
          new CustomEvent(eventName, {
            detail: data,
            bubbles: true,
            composed: true,
          })
        );
      }
}
