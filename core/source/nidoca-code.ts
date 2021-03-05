import { css, customElement, html, property, unsafeCSS, LitElement } from 'lit-element';


export class CodeFormatter {
   static NONE = 'NONE';
   static HTML = 'HTML';
}

@customElement('nidoca-code')
export class CodeComponent extends LitElement {
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

   @property()
   codeFormatter: string = CodeFormatter.NONE;

   @property()
   code: string = '';

   render() {
      return html`
         <pre>
                <code>${this.format(this.code)}<nidoca-icon class="icon-position" clickable="true" icon="file_copy"><slot></slot></code>
            </pre>
      `;
   }

   private format(code: string) {
      console.log('format code.');

      code = code.trim();

      switch (this.codeFormatter) {
         case CodeFormatter.HTML:
            let html: string = '';
            html = code;
            return html;
      }
      return code;
   }
}
