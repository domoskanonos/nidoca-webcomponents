import { html, TemplateResult } from 'lit-element';
import { BasisTemplate } from '../index';
import { I18nService } from '@domoskanonos/frontend-basis';

export abstract class PageAbstract extends BasisTemplate {
   getTopContent(): TemplateResult {
      return html`
         <component-top-app-bar>
            <component-spacer slot="leftComponents" clazz="mediumPaddingLeft"></component-spacer>
            <component-icon slot="leftComponents" icon="menu" clickable="true"></component-icon>
         </component-top-app-bar>
      `;
   }

   getLeftComponent(): TemplateResult {
      return html`
         <component-navigation>
            <component-navigation-link
               slot="links"
               icon="arrow_forward_ios"
               text="${I18nService.getUniqueInstance().getValue('pageintroduction')}"
               href="dashboard"
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
               icon="grid_on"
               text="${I18nService.getUniqueInstance().getValue('pagegrid')}"
               href="grid"
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
               icon="code"
               text="${I18nService.getUniqueInstance().getValue('pagecode')}"
               href="pagecode"
            ></component-navigation-link>
            <component-navigation-link
               slot="links"
               icon="dynamic_feed"
               text="${I18nService.getUniqueInstance().getValue('pagetransition')}"
               href="pagetransition"
            ></component-navigation-link
            ><component-navigation-link
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
            <component-divider slot="links"></component-divider>
            <component-navigation-section slot="links" text="Effekte"></component-navigation-section>
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
