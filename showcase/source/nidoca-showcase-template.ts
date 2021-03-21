import {RouterService} from '@domoskanonos/frontend-basis';
import {
  FlexAlignContent,
  FlexAlignItems,
  FlexJustifyContent,
  FormOutputData,
  NidocaFlexContainer,
  NidocaTemplate,
  TypographyType,
} from '@domoskanonos/nidoca-core';
import {html, TemplateResult} from 'lit-element';

export abstract class NidocaShowcaseTemplate extends NidocaTemplate {
  getHeaderContent(): TemplateResult {
    return html`
      <nidoca-top-app-bar @nidoca-event-icon-clicked="${() => this.toogleNavigation()}">
        ${this.getHeaderLeftComponent()} ${this.getHeaderMainComponent()} ${this.getHeaderRightComponent()}
      </nidoca-top-app-bar>
    `;
  }

  getHeaderLeftComponent(): TemplateResult {
    return html`
      <nidoca-icon title="Menü" slot="leftComponents" icon="menu" .clickable="${true}"></nidoca-icon>
      <nidoca-typography slot="leftComponents" .typographyType="${TypographyType.BODY1}"
        >nidoca showcase
      </nidoca-typography>
    `;
  }

  getHeaderMainComponent(): TemplateResult {
    return html``;
  }

  getHeaderRightComponent(): TemplateResult {
    return html``;
  }

  object2Value(typeAsString: string, type: any = null): string {
    if (type == null) {
      return typeAsString;
    }

    let retval: string = '';
    Object.values(type).forEach((value: any) => {
      if (retval.length > 0) {
        retval = retval.concat(', ');
      }
      retval = retval
        .concat(typeAsString)
        .concat('.')
        .concat(String(Object.keys(type)[Object.values(type).indexOf(value)]));
    });
    return retval;
  }

  /**
   * generate code string for attribute value.
   * f.e. type PropertyEnum, item = ENUM_VALUE,
   * generated return string: ${PropertyEnum.ENUM_VALUE} .
   *
   * @param item of type any
   * @param typeAsString string representation of type
   * @returns
   */
  toAttributeCodeString(item: any, typeAsString: string, type: any = null): string {
    if (typeAsString.indexOf('undefined') > -1) {
      return '${undefined}';
    } else if (typeAsString.indexOf('string') > -1) {
      return item;
    } else if (typeAsString.indexOf('number') > -1) {
      return String(item);
    } else if (typeAsString.indexOf('any') > -1) {
      return String('');
    } else if (typeAsString.indexOf('boolean') > -1) {
      return '${'.concat(String(item)).concat('}');
    } else if (typeAsString.indexOf('[]') > -1) {
      return '${[]}';
    } else {
      return '${'
        .concat(typeAsString)
        .concat('.')
        .concat(String(Object.keys(type)[Object.values(type).indexOf(item)]))
        .concat('}');
    }
  }

  toComboboxOptions(typeAsString: string, type: any = null): FormOutputData[] {
    if (type == null) {
      return [];
    }

    let retval: FormOutputData[] = [];

    Object.values(type).forEach((value: any) => {
      retval.push(<FormOutputData>{
        key: value,
        value: typeAsString.concat('.').concat(String(Object.keys(type)[Object.values(type).indexOf(value)])),
      });
    });

    return retval;
  }

  loadShowcaseContent(name: string): TemplateResult {
    switch (name) {
      case 'NidocaFlexContainer':
        return html`${this.createBox()}${this.createBox()}${this.createBox()}${this.createBox()}${this.createBox()}${this.createBox()}${this.createBox()}${this.createBox()}${this.createBox()}${this.createBox()}${this.createBox()}`;
      default:
        return html`${name}`;
    }
  }

  loadShowcaseInitData(name: string): any {
    switch (name) {
      case 'NidocaFlexContainer':
        let nidocaFlexContainer: NidocaFlexContainer = new NidocaFlexContainer();
        nidocaFlexContainer.containerStyle =
          'height:35vh; width:80vw; background-color:var(--app-color-primary-background)';
        nidocaFlexContainer.flexJustifyContent = FlexJustifyContent.SPACE_EVENLY;
        nidocaFlexContainer.flexAlignContent = FlexAlignContent.SPACE_EVENLY;
        nidocaFlexContainer.flexAlignItems = FlexAlignItems.CENTER;
        return nidocaFlexContainer;
      default:
        return null;
    }
  }

  private createBox(): TemplateResult {
    return html` <nidoca-rich-media src="https://picsum.photos/100/100"></nidoca-rich-media> `;
  }

  getSidebarContent(): TemplateResult {
    return html`
      <nidoca-navigation
        @nidoca-event-link-clicked="${(event: CustomEvent) => this.navigationLinkClicked(event)}"
        .closed="${this.navigationClosed}"
      >
        <nidoca-navigation-link slot="links" icon="" text="dashboard" href=""></nidoca-navigation-link>
        <nidoca-navigation-link
          slot="links"
          icon=""
          text="get started"
          href="nidoca-showcase-get-started-page"
        ></nidoca-navigation-link>
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
        <nidoca-navigation-link
          slot="links"
          icon=""
          text="<nidoca-wizard>"
          href="nidoca-wizard"
        ></nidoca-navigation-link>
        <nidoca-navigation-link slot="links" icon="" text="<nidoca-chip>" href="nidoca-chip"></nidoca-navigation-link>
        <nidoca-navigation-link slot="links" icon="" text="<nidoca-code>" href="nidoca-code"></nidoca-navigation-link>
        <nidoca-navigation-link
          slot="links"
          icon=""
          text="<nidoca-progress>"
          href="nidoca-progress"
        ></nidoca-navigation-link>
        <nidoca-navigation-link
          slot="links"
          icon=""
          text="<nidoca-border>"
          href="nidoca-border"
        ></nidoca-navigation-link>
        <nidoca-navigation-link
          slot="links"
          icon=""
          text="<nidoca-floating-container>"
          href="nidoca-floating-container"
        ></nidoca-navigation-link>
        <nidoca-navigation-link
          slot="links"
          icon=""
          text="<nidoca-button>"
          href="nidoca-button"
        ></nidoca-navigation-link>
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
          text="<nidoca-form-switch>"
          href="nidoca-form-switch"
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
        <nidoca-navigation-link
          slot="links"
          icon=""
          text="<nidoca-spacer>"
          href="nidoca-spacer"
        ></nidoca-navigation-link>
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
        <nidoca-navigation-link
          slot="links"
          icon=""
          text="<nidoca-dialog>"
          href="nidoca-dialog"
        ></nidoca-navigation-link>
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
      </nidoca-navigation>
    `;
  }

  navigationLinkClicked(event: CustomEvent<any>): void {
    let url = event.detail;
    console.log('navigate to %s', url);
    RouterService.getUniqueInstance().navigate(url);
  }
}
