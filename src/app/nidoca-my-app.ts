import { NidocaRouteListener, NidocaRouter } from '../util/nidoca-router';
import { html, HTMLTemplateResult } from 'lit';
import { NidocaHtml } from '../abstract/nidoca-html';

import { customElement, property } from 'lit/decorators.js';

@customElement('nidoca-my-app')
export class NidocaMyApp extends NidocaHtml implements NidocaRouteListener {

  @property({ type: Object })
  content: any = html``;

  constructor() {
    super();
    NidocaRouter.getUniqueInstance().subscribe(this);
    this.routeChanged(NidocaRouter.getUniqueInstance().getCurrentPage());
  }

  routeChanged(relUrl: string): void {
    switch (relUrl) {
      case 'privacy':
        this.content = html`<nidoca-page-privacy></nidoca-page-privacy>`;
        break;
      case 'imprint':
        this.content = html`<nidoca-page-imprint></nidoca-page-imprint>`;
        break;
      case 'settings':
        this.content = html`<nidoca-page-settings></nidoca-page-settings>`;
        break;
      case 'terms-of-use':
        this.content = html`<nidoca-page-terms-of-use></nidoca-page-terms-of-use>`;
        break;
      case 'genericapp':
        this.content = html`<nidoca-page-generic-app></nidoca-page-generic-app>`;
        break;
      case 'webcomponents':
        this.content = html`<nidoca-page-webcomponents></nidoca-page-webcomponents>`;
        break;
      case 'main':
        this.content = html`<nidoca-page-main></nidoca-page-main>`;
        break;
      default:
        this.content = html`<nidoca-page-webcomponents></nidoca-page-webcomponents>`;
      //this.content = html`<nidoca-page-main></nidoca-page-main>`;
    }
  }

  render(): HTMLTemplateResult {
    return html`
      <nidoca-template>
        <nidoca-link
          slot="topRight"
          style="padding-right:var(--space-2);"
          targetType="_self"
          href="https://domoskanonos.github.io/nidoca-webcomponents/"
          >Homepage</nidoca-link
        >

        <nidoca-link
          slot="topRight"
          style="padding-right:var(--space-2);"
          targetType="_blank"
          href="https://domoskanonos.github.io/nidoca-webcomponents/docs/index.html"
          >Typedoc</nidoca-link
        >

        <nidoca-link
          slot="topRight"
          style="padding-right:var(--space-2);"
          targetType="_blank"
          href="https://github.com/domoskanonos/nidoca-webcomponents"
          >Github</nidoca-link
        >

        <nidoca-link
          slot="topRight"
          style="padding-right:var(--space-2);"
          targetType="_blank"
          href="https://domoskanonos.github.io/nidoca-lit-viewer/"
          >Spielwiese</nidoca-link
        >

        <div slot="content">${this.content}</div>

        <div slot="left" style="height:var(--height-medium);"></div>
        <nidoca-menu slot="left">
          <nidoca-menu-item
            @nidoca-event-menu-item-clicked="${() => {
        NidocaRouter.getUniqueInstance().navigate('#main');
      }}"
            icon="home"
            text="Start"
          ></nidoca-menu-item>
          <nidoca-menu-item
            text="Webcomponents"
            @nidoca-event-menu-item-clicked="${() => {
        NidocaRouter.getUniqueInstance().navigate('#webcomponents');
      }}"
          ></nidoca-menu-item>

          <nidoca-menu-item
            text="Generic App"
            @nidoca-event-menu-item-clicked="${() => {
        NidocaRouter.getUniqueInstance().navigate('#genericapp');
      }}"
          ></nidoca-menu-item>

          <nidoca-menu-area icon="gavel" text="Rechtliches"></nidoca-menu-area>
          <nidoca-menu-item
            text="Impressum"
            @nidoca-event-menu-item-clicked="${() => {
        NidocaRouter.getUniqueInstance().navigate('#imprint');
      }}"
          ></nidoca-menu-item>
          <nidoca-menu-item
            text="Datenschutz"
            @nidoca-event-menu-item-clicked="${() => {
        NidocaRouter.getUniqueInstance().navigate('#privacy');
      }}"
          ></nidoca-menu-item>
          <nidoca-menu-item
            text="Nutzungsbedingungen"
            @nidoca-event-menu-item-clicked="${() => {
        NidocaRouter.getUniqueInstance().navigate('#terms-of-use');
      }}"
          ></nidoca-menu-item>
          <nidoca-menu-area text="Sonstiges"></nidoca-menu-area>
          <nidoca-menu-item
            text="Einstellungen"
            @nidoca-event-menu-item-clicked="${() => {
        NidocaRouter.getUniqueInstance().navigate('#settings');
      }}"
          ></nidoca-menu-item>
        </nidoca-menu>
      </nidoca-template>
    `;
  }
}
