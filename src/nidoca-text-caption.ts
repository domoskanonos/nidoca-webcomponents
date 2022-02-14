import {css} from "lit";
import {customElement} from "lit/decorators.js";
import {NidocaText} from ".";

@customElement("nidoca-text-caption")
export class NidocaTextCaption extends NidocaText {
    static styles = css`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
        display: block;
        font-weight: 400;
        font-size:calc(var(--font-size) * 0.9);
        line-height:calc(var(--font-size) * 1.1);
        filter: brightness(var(--app-lighten-3));
    }
    
    #slotElement{
    
    }
    
  `;
}
