import {css, html, LitElement, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";

@customElement("nidoca-code")
export class NidocaCode extends LitElement {
   static styles = css`
      pre {
   margin: 0;
   padding: 0;
   white-space: unset;
}

pre code {
   white-space: pre-line;
   display: block;
   line-height: 1.75;
   padding: 1em 1.5em;
   overflow-x: auto;
}

code {
   background: var(--app-color-surface-background);
   border-radius: 0.375em;
   border: solid 1px var(--app-color-surface-background-dark);
   font-family: 'Courier New', monospace;
   font-size: 0.85em;
   position: relative;
}

.icon-position {
   position: absolute;
   top: -24px;
   right: 0;
   opacity: 0.2;
}
   `;

   @property({type: String})
   code: string = "";

   render() : any {
      return html`
         <pre>
                <code>${this.code}<slot></slot></code>
            </pre>
      `;
   }

}
