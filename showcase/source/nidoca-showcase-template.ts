import {NavigationType, NidocaTemplate, TypographyType} from '@domoskanonos/nidoca-core';
import {html, TemplateResult} from 'lit-element';

export abstract class NidocaShowcaseTemplate extends NidocaTemplate {
  constructor() {
    super();
    this.navType = NavigationType.PERMANENT;
  }

  getTopContent(): TemplateResult {
    return html`
      <nidoca-top-app-bar>
        ${this.getTopLeftComponent()} ${this.getTopMainComponent()} ${this.getTopRightComponent()}
      </nidoca-top-app-bar>
    `;
  }

  getTopLeftComponent(): TemplateResult {
    return html`
      <nidoca-icon title="Menü" slot="leftComponents" icon="menu" .clickable="${true}"></nidoca-icon>
      <nidoca-typography slot="leftComponents" .typographyType="${TypographyType.BODY1}"
        >nidoca showcase
      </nidoca-typography>
    `;
  }

  getTopMainComponent(): TemplateResult {
    return html``;
  }

  getTopRightComponent(): TemplateResult {
    return html``;
  }

  getLeftNavigationContent(): TemplateResult {
    return html`
      <nidoca-navigation-link
        slot="links"
        icon=""
        text="<nidoca-flex-container>"
        href="nidoca-flex-container"
      ></nidoca-navigation-link>

      <nidoca-navigation-link
        slot="links"
        icon=""
        text="<nidoca-accordion>"
        href="nidoca-accordion"
      ></nidoca-navigation-link>

      <nidoca-navigation-link
        slot="links"
        icon=""
        text="<nidoca-accordion-item>"
        href="nidoca-accordion-item"
      ></nidoca-navigation-link>

      <nidoca-navigation-link slot="links" icon="" text="<nidoca-box>" href="nidoca-box"></nidoca-navigation-link>

      <nidoca-navigation-link slot="links" icon="" text="<nidoca-wizard>" href="nidoca-wizard"></nidoca-navigation-link>

      <nidoca-navigation-link slot="links" icon="" text="<nidoca-chip>" href="nidoca-chip"></nidoca-navigation-link>

      <nidoca-navigation-link
        slot="links"
        icon=""
        text="<nidoca-progress>"
        href="nidoca-progress"
      ></nidoca-navigation-link>

      <nidoca-navigation-link slot="links" icon="" text="<nidoca-border>" href="nidoca-border"></nidoca-navigation-link>

      <nidoca-navigation-link
        slot="links"
        icon=""
        text="<nidoca-floating-container>"
        href="nidoca-floating-container"
      ></nidoca-navigation-link>

      <nidoca-navigation-link slot="links" icon="" text="<nidoca-button>" href="nidoca-button"></nidoca-navigation-link>

      <nidoca-navigation-link
        slot="links"
        icon=""
        text="<nidoca-divider>"
        href="nidoca-divider"
      ></nidoca-navigation-link>

      <nidoca-navigation-link
        slot="links"
        icon=""
        text="<nidoca-grid-container>"
        href="nidoca-grid-container"
      ></nidoca-navigation-link>

      <nidoca-navigation-link slot="links" icon="" text="<nidoca-form>" href="nidoca-form"></nidoca-navigation-link>

      <nidoca-navigation-link
        slot="links"
        icon=""
        text="<nidoca-form-combobox>"
        href="nidoca-form-combobox"
      ></nidoca-navigation-link>

      <nidoca-navigation-link
        slot="links"
        icon=""
        text="<nidoca-form-text>"
        href="nidoca-form-text"
      ></nidoca-navigation-link>

      <nidoca-navigation-link
        slot="links"
        icon=""
        text="<nidoca-form-date>"
        href="nidoca-form-date"
      ></nidoca-navigation-link>

      <nidoca-navigation-link
        slot="links"
        icon=""
        text="<nidoca-form-inputframe>"
        href="nidoca-form-inputframe"
      ></nidoca-navigation-link>

      <nidoca-navigation-link slot="links" icon="" text="<nidoca-icon>" href="nidoca-icon"></nidoca-navigation-link>

      <nidoca-navigation-link
        slot="links"
        icon=""
        text="<nidoca-rich-media>"
        href="nidoca-rich-media"
      ></nidoca-navigation-link>

      <nidoca-navigation-link
        slot="links"
        icon=""
        text="<nidoca-captcha>"
        href="nidoca-captcha"
      ></nidoca-navigation-link>

      <nidoca-navigation-link slot="links" icon="" text="<nidoca-link>" href="nidoca-link"></nidoca-navigation-link>

      <nidoca-navigation-link slot="links" icon="" text="<nidoca-list>" href="nidoca-list"></nidoca-navigation-link>

      <nidoca-navigation-link
        slot="links"
        icon=""
        text="<nidoca-list-item>"
        href="nidoca-list-item"
      ></nidoca-navigation-link>

      <nidoca-navigation-link
        slot="links"
        icon=""
        text="<nidoca-top-app-bar>"
        href="nidoca-top-app-bar"
      ></nidoca-navigation-link>

      <nidoca-navigation-link
        slot="links"
        icon=""
        text="<nidoca-navigation>"
        href="nidoca-navigation"
      ></nidoca-navigation-link>

      <nidoca-navigation-link
        slot="links"
        icon=""
        text="<nidoca-search-bar>"
        href="nidoca-search-bar"
      ></nidoca-navigation-link>

      <nidoca-navigation-link
        slot="links"
        icon=""
        text="<nidoca-navigation-link>"
        href="nidoca-navigation-link"
      ></nidoca-navigation-link>

      <nidoca-navigation-link
        slot="links"
        icon=""
        text="<nidoca-visible>"
        href="nidoca-visible"
      ></nidoca-navigation-link>

      <nidoca-navigation-link
        slot="links"
        icon=""
        text="<nidoca-navigation-section>"
        href="nidoca-navigation-section"
      ></nidoca-navigation-link>

      <nidoca-navigation-link slot="links" icon="" text="<nidoca-table>" href="nidoca-table"></nidoca-navigation-link>

      <nidoca-navigation-link slot="links" icon="" text="<nidoca-spacer>" href="nidoca-spacer"></nidoca-navigation-link>

      <nidoca-navigation-link slot="links" icon="" text="<nidoca-tabs>" href="nidoca-tabs"></nidoca-navigation-link>

      <nidoca-navigation-link slot="links" icon="" text="<nidoca-tab>" href="nidoca-tab"></nidoca-navigation-link>

      <nidoca-navigation-link
        slot="links"
        icon=""
        text="<nidoca-tab-content>"
        href="nidoca-tab-content"
      ></nidoca-navigation-link>

      <nidoca-navigation-link
        slot="links"
        icon=""
        text="<nidoca-typography>"
        href="nidoca-typography"
      ></nidoca-navigation-link>

      <nidoca-navigation-link slot="links" icon="" text="<nidoca-dialog>" href="nidoca-dialog"></nidoca-navigation-link>

      <nidoca-navigation-link
        slot="links"
        icon=""
        text="<nidoca-showcase>"
        href="nidoca-showcase"
      ></nidoca-navigation-link>

      <nidoca-navigation-link
        slot="links"
        icon=""
        text="Dashboard"
        href="nidoca-showcase-dashboard-page"
      ></nidoca-navigation-link>
    `;
  }
}
