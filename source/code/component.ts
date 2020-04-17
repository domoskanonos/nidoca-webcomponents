import {css, customElement, html, property, unsafeCSS, LitElement} from 'lit-element';

const componentCSS = require('./component.css');

export class CodeFormatter {
    static NONE = 'NONE';
    static HTML = 'HTML';
}

@customElement('component-code')
export class CodeComponent extends LitElement {
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
                <code>${this.format(this.code)}<slot></slot></code>
            </pre>
      `;
    }

    private format(code: string) {
        console.log("format code.");

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
