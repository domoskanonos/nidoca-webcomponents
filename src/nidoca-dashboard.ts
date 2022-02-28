import {css, html, TemplateResult, LitElement} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";

@customElement("nidoca-dashboard")
export class NidocaDashboard extends LitElement {
    static styles = css`
    
    :host {
      display:block;
    }
    
    slot {
        display:flex;
        flex-direction: row;
        flex-wrap:wrap;
        align-content: stretch;
        align-items: stretch;
        width:50%;
        margin: auto;
    }
      
    @media only screen and (max-width: 1007px) {
        slot {
            width:100%;
        }
    }

  `;

    render(): TemplateResult {
        return html`
            <slot></slot>`;
    }
}

@customElement("nidoca-dashboard-box-25")
export class NidocaDashboardBox25 extends LitElement {
    static styles = css`
    :host {
        width:25%;
    }
    `

    render(): TemplateResult {
        return html`
            <slot></slot>`;
    }
}

@customElement("nidoca-dashboard-box-50")
export class NidocaDashboardBox50 extends LitElement {
    static styles = css`
    :host {
        width:50%;
    }
    @media only screen and (max-width: 1919px) {
        :host {
        width:100%;
        }
    }

    `

    render(): TemplateResult {
        return html`
            <slot></slot>`;
    }
}

@customElement("nidoca-dashboard-box-100")
export class NidocaDashboardBox100 extends LitElement {
    static styles = css`
    :host {
        width:100%;
    }
    `

    render(): TemplateResult {
        return html`
            <slot></slot>`;
    }
}
