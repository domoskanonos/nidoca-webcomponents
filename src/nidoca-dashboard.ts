import {css, html, TemplateResult, LitElement} from 'lit';
import {NidocaHtml} from './nidoca-html';

import {customElement} from 'lit/decorators.js';
import {property} from 'lit/decorators.js';

@customElement('nidoca-dashboard')
export class NidocaDashboard extends NidocaHtml {
  static styles = css`
    :host {
      display: block;
    }

    slot {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-content: stretch;
      align-items: stretch;
      width: 50%;
      margin: auto;
    }

    @media only screen and (max-width: 1007px) {
      slot {
        width: 100%;
      }
    }
  `;

  render(): TemplateResult {
    return html` <slot></slot>`;
  }
}

@customElement('nidoca-dashboard-box-25')
export class NidocaDashboardBox25 extends NidocaHtml {
  static styles = css`
    :host {
      display: block;
      width: 25%;
    }

    @media only screen and (max-width: 1919px) {
      :host {
        width: 50%;
      }
    }
  `;

  render(): TemplateResult {
    return html` <slot></slot>`;
  }
}

@customElement('nidoca-dashboard-box-50')
export class NidocaDashboardBox50 extends NidocaHtml {
  static styles = css`
    :host {
      width: 50%;
      display: block;
    }
    @media only screen and (max-width: 1919px) {
      :host {
        width: 100%;
      }
    }
  `;

  render(): TemplateResult {
    return html` <slot></slot>`;
  }
}

@customElement('nidoca-dashboard-box-100')
export class NidocaDashboardBox100 extends NidocaHtml {
  static styles = css`
    :host {
      width: 100%;
      display: block;
    }
  `;

  render(): TemplateResult {
    return html` <slot></slot>`;
  }
}

@customElement('nidoca-dashboard-card')
export class NidocaDashboardCard extends NidocaHtml {
  static styles = css`
    :host {
      padding: var(--space-2);
      box-sizing: border-box;
    }

    :host,
    nidoca-card {
      display: block;
      height: 100%;
      width: 100%;
    }

    .clickable {
      cursor: pointer;
    }
  `;

  @property({type: Boolean})
  clickable: boolean = true;

  @property({type: String})
  title: string = '';

  render(): TemplateResult {
    return html`
      <nidoca-card @click="${() => this.clicked()}" class="${this.clickable ? 'clickable' : ''}">
        <nidoca-box>
          <nidoca-text-h6 style="padding-bottom: var(--space-2);">${this.title}</nidoca-text-h6>
          <slot></slot>
        </nidoca-box>
      </nidoca-card>
    `;
  }

  private clicked() {
    if (this.clickable) {
      this.dispatchEvent(
        new CustomEvent('nidoca-event-dashboard-card-clicked', {
          detail: this,
          bubbles: true,
          composed: true,
        })
      );
    }
  }
}
