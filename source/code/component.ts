import { css, customElement, html, property, unsafeCSS, LitElement } from 'lit-element';
import { BasicService } from '@domoskanonos/frontend-basis';

const componentCSS = require('./component.css');

export enum CodeFormatter {
    NONE = 'NONE',
    HTML = 'HTML'
}

@customElement('nidoca-code')
export class NidocaCode extends LitElement {

   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   @property()
   codeFormatter: string = CodeFormatter.NONE;

   @property()
   code: string = '';

   render() {
      return html`
         <pre>
                <code>${this.format(this.code)}<nidoca-icon class="icon-position" @nidoca-icon-clicked="${() => {
         BasicService.getUniqueInstance().copyToClipboard(this.code);
      }}" clickable="true" icon="file_copy"><slot></slot></code>
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
