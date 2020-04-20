import { html, property, TemplateResult } from 'lit-element';
import { BasisTemplate, TypographyType } from '../index';
import { I18nService } from '@domoskanonos/frontend-basis';

export abstract class PageAbstract extends BasisTemplate {
   @property()
   navigationTitle: string = '';

   getTopContent(): TemplateResult {
      return html`
         <component-top-app-bar>
            ${this.getTopLeftComponent()} ${this.getTopMainComponent()} ${this.getTopRightComponent()}
         </component-top-app-bar>
      `;
   }

   getTopLeftComponent(): TemplateResult {
      return html`
         <component-icon
            title="${I18nService.getUniqueInstance().getValue('menu')}"
            slot="leftComponents"
            icon="menu"
            clickable="true"
         ></component-icon>
         <component-typography slot="leftComponents" .typographyType="${TypographyType.BODY1}"
            >${this.navigationTitle}</component-typography
         >
      `;
   }

   getTopMainComponent(): TemplateResult {
      return html``;
   }

   getTopRightComponent(): TemplateResult {
      return html``;
   }

   getLeftComponent(): TemplateResult {
      return html`
         <component-navigation>
            <component-navigation-link
               slot="links"
               icon="arrow_forward_ios"
               text="${I18nService.getUniqueInstance().getValue('pageintroduction')}"
               href="introduction"
            ></component-navigation-link>
            <component-navigation-link
               slot="links"
               icon="build"
               text="${I18nService.getUniqueInstance().getValue('pagegetstarted')}"
               href="getStarted"
            ></component-navigation-link>
            <component-divider slot="links"></component-divider>
            <component-navigation-section slot="links" text="Komponenten"></component-navigation-section>
            <component-navigation-link
               slot="links"
               icon="check_box_outline_blank"
               text="${I18nService.getUniqueInstance().getValue('pagebox')}"
               href="pagebox"
            ></component-navigation-link>
            <component-navigation-link
               slot="links"
               icon="grid_on"
               text="${I18nService.getUniqueInstance().getValue('pagegrid')}"
               href="pagegrid"
            ></component-navigation-link>
            <component-navigation-link
               slot="links"
               icon="dashboard"
               text="${I18nService.getUniqueInstance().getValue('pagelayout')}"
               href="pagelayout"
            ></component-navigation-link>
            <component-navigation-link
               slot="links"
               icon="title"
               text="${I18nService.getUniqueInstance().getValue('pagetypography')}"
               href="pagetypography"
            ></component-navigation-link>

            <component-navigation-link
               slot="links"
               icon="input"
               text="${I18nService.getUniqueInstance().getValue('pageinput')}"
               href="pageinput"
            ></component-navigation-link>
            <component-navigation-link
               slot="links"
               icon=""
               text="${I18nService.getUniqueInstance().getValue('pagebutton')}"
               href="pagebutton"
            ></component-navigation-link
            ><component-navigation-link
               slot="links"
               icon=""
               text="${I18nService.getUniqueInstance().getValue('pageicon')}"
               href="pageicon"
            ></component-navigation-link>
            <component-navigation-link
               slot="links"
               icon="image"
               text="${I18nService.getUniqueInstance().getValue('pagerichmedia')}"
               href="pagerichmedia"
            ></component-navigation-link>
            <component-navigation-link
               slot="links"
               icon="code"
               text="${I18nService.getUniqueInstance().getValue('pagecode')}"
               href="pagecode"
            ></component-navigation-link>
            <component-divider slot="links"></component-divider>
            <component-navigation-section slot="links" text="Effekte"></component-navigation-section>
            <component-navigation-link
               slot="links"
               icon="dynamic_feed"
               text="${I18nService.getUniqueInstance().getValue('pagetransition')}"
               href="pagetransition"
            ></component-navigation-link>
            <component-navigation-link
               slot="links"
               icon=""
               text="${I18nService.getUniqueInstance().getValue('pagecolor')}"
               href="pagecolor"
            ></component-navigation-link>
            <component-divider slot="links"></component-divider>
            <component-navigation-link
               slot="links"
               icon="info"
               text="${I18nService.getUniqueInstance().getValue('pageimprint')}"
               href="pageimprint"
            ></component-navigation-link>
         </component-navigation>
      `;
   }
}
