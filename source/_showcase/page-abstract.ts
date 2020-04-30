import { html, property, TemplateResult } from 'lit-element';
import { BasisTemplate, TypographyType } from '../index';
import { I18nService } from '@domoskanonos/frontend-basis';
import { DividerType } from '../divider/component';

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

   getLeftNavigationContent(): TemplateResult {
      return html`
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
         <component-divider slot="links" .dividerType="${DividerType.THIN}" opacity="0.2"></component-divider>
         <component-navigation-section
            slot="links"
            text="${I18nService.getUniqueInstance().getValue('sectionstructure')}"
         ></component-navigation-section>
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
            text="${I18nService.getUniqueInstance().getValue('pagespacer')}"
            href="pagespacer"
         ></component-navigation-link>
         <component-navigation-link
            slot="links"
            icon="visibility"
            text="${I18nService.getUniqueInstance().getValue('pagevisible')}"
            href="pagevisible"
         ></component-navigation-link>
         <component-navigation-link
            slot="links"
            icon=""
            text="${I18nService.getUniqueInstance().getValue('pageaccordion')}"
            href="pageaccordion"
         ></component-navigation-link>
         <component-navigation-link
            slot="links"
            icon=""
            text="${I18nService.getUniqueInstance().getValue('pagedivider')}"
            href="pagedivider"
         ></component-navigation-link>
         <component-navigation-section slot="links" text="${I18nService.getUniqueInstance().getValue('pageabstract_komp')}"></component-navigation-section>
         <component-navigation-link
            slot="links"
            icon=""
            text="${I18nService.getUniqueInstance().getValue('pagefloating')}"
            href="pagefloating"
         ></component-navigation-link>
         <component-navigation-section slot="links" text="Komponenten"></component-navigation-section>
         <component-navigation-link
            slot="links"
            icon="title"
            text="${I18nService.getUniqueInstance().getValue('pagetypography')}"
            href="pagetypography"
         ></component-navigation-link>

         <component-navigation-link
            slot="links"
            icon=""
            text="${I18nService.getUniqueInstance().getValue('pageborder')}"
            href="pageborder"
         ></component-navigation-link>
         <component-navigation-link
            slot="links"
            icon=""
            text="${I18nService.getUniqueInstance().getValue('pagedialog')}"
            href="pagedialog"
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
         <component-navigation-link
            slot="links"
            icon=""
            text="${I18nService.getUniqueInstance().getValue('pagelink')}"
            href="pagelink"
         ></component-navigation-link>
         <component-navigation-link
            slot="links"
            icon=""
            text="${I18nService.getUniqueInstance().getValue('pagetabs')}"
            href="pagetabs"
         ></component-navigation-link>
         <component-navigation-link
            slot="links"
            icon=""
            text="${I18nService.getUniqueInstance().getValue('pagelist')}"
            href="pagelist"
         ></component-navigation-link>
         <component-navigation-link
            slot="links"
            icon=""
            text="${I18nService.getUniqueInstance().getValue('pagetable')}"
            href="pagetable"
         ></component-navigation-link>
         <component-divider slot="links" .dividerType="${DividerType.THIN}" opacity="0.2"></component-divider>
         <component-navigation-section slot="links" text="${I18nService.getUniqueInstance().getValue('pageabstract_eff')}"></component-navigation-section>
         <component-navigation-link
            slot="links"
            icon="dynamic_feed"
            text="${I18nService.getUniqueInstance().getValue('pagetransition')}"
            href="pagetransition"
         ></component-navigation-link>
         <component-navigation-link
            slot="links"
            icon=""
            text="${I18nService.getUniqueInstance().getValue('pageripple')}"
            href="pageripple"
         ></component-navigation-link>
         <component-divider slot="links" .dividerType="${DividerType.THIN}" opacity="0.2"></component-divider>
         <component-navigation-link
            slot="links"
            icon="info"
            text="${I18nService.getUniqueInstance().getValue('pageimprint')}"
            href="pageimprint"
         ></component-navigation-link>
      `;
   }
}
