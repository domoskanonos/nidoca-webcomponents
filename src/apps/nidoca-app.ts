import {html, LitElement, PropertyValues, TemplateResult} from 'lit';
import {NidocaHtml} from '../nidoca-html';

import {customElement} from 'lit/decorators.js';
import {property} from 'lit/decorators.js';

export enum PageReferenceType {
  anchor = 'anchor',
  page = 'page',
}

export interface AppModel {
  name: string;
  root: PageReference;
}

export interface PageReference {
  type: PageReferenceType;
  parent: PageReference;
  childs: PageReference[];
  name: string;
  route: string;
  rootComponent: string;
  icon: string;
}

@customElement('nidoca-app')
export class NidocaApp extends NidocaHtml {
  @property({type: Array})
  root: PageReference | undefined;

  @property({type: Boolean})
  loggedIn: boolean = false;

  @property({type: String, converter: String})
  route: string | undefined;

  contentComponent: HTMLElement | undefined;

  protected updated(_changedProperties: PropertyValues) {
    super.updated(_changedProperties);
    if (_changedProperties.has('root') && this.root && this.root.childs) {
      this.routeTo(this.root.childs[0]);
    }
    if (_changedProperties.has('route')) {
      if (this.root) {
        for (let i = 0; i < this.root.childs.length; i++) {
          const pageReference = this.root.childs[i];
          if (pageReference.route == this.route) {
            this.contentComponent = document.createElement(pageReference.rootComponent);
            break;
          }
        }
        this.requestUpdate();
      }
    }
  }

  render(): TemplateResult {
    return this.loggedIn
      ? html`
            <nidoca-template>
                <nidoca-text-body slot="topCenter"
                "></nidoca-text-body>
                <nidoca-icon
                        style="padding-right:var(--space-2);"
                        slot="topRight"
                        @nidoca-event-icon-clicked="${() => {
                          this.dispatchEvent(
                            new CustomEvent('nidoca-event-app-logout', {
                              detail: this,
                              bubbles: true,
                              composed: true,
                            })
                          );
                        }}" icon="logout"></nidoca-icon>

                <span slot="content">${this.contentComponent ? html`${this.contentComponent}` : html``}</span>

                <nidoca-menu slot="left" theme="primary">
                    ${this.root?.childs.map(
                      (page: PageReference) => html` <nidoca-menu-item
                        text="${page.name}"
                        @click="${() => {
                          this.routeTo(page);
                        }}"
                      ></nidoca-menu-item>`
                    )}
                </nidoca-menu>
            </nidoca-template>
        `
      : html` <nidoca-page-login
          @nidoca-form-login-submit="${(event: CustomEvent) => {
            this.dispatchEvent(
              new CustomEvent('nidoca-event-app-login', {
                detail: event.detail,
                bubbles: true,
                composed: true,
              })
            );
          }}"
        ></nidoca-page-login>`;
  }

  private routeTo(page: PageReference) {
    this.dispatchEvent(
      new CustomEvent('nidoca-event-app-route', {
        detail: page.route,
        bubbles: true,
        composed: true,
      })
    );
  }
}
