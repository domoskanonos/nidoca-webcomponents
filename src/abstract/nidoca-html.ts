import {LitElement} from 'lit';

export abstract class NidocaHtml extends LitElement {

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
