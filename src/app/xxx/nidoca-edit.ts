import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

export class NidocaEdit extends LitElement {

    @property({ type: String }) value: string = '';

    static styles = css`
        :host {
            display: block;
            padding: 16px;
            border: 1px solid #ccc;
        }
        input {
            width: 100%;
            padding: 8px;
            box-sizing: border-box;
        }
    `;

    render() {
        return html`
            <input type="text" .value=${this.value} @input=${this._onInput} />
        `;
    }

    private _onInput(event: Event) {
        const input = event.target as HTMLInputElement;
        this.value = input.value;
        this.dispatchEvent(new CustomEvent('value-changed', { detail: this.value }));
    }
}

customElements.define('nidoca-edit', NidocaEdit);