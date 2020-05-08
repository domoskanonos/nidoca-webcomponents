import { html, property, TemplateResult } from 'lit-element';
import { BasisTemplate, TypographyType } from '../index';
import { I18nService } from '@domoskanonos/frontend-basis';
import { DividerType } from '../divider/component';

export abstract class PageAbstract extends BasisTemplate {
   @property()
   navigationTitle: string = '';

   getTopContent(): TemplateResult {
      return html`
         <nidoca-top-app-bar>
            ${this.getTopLeftComponent()} ${this.getTopMainComponent()} ${this.getTopRightComponent()}
         </nidoca-top-app-bar>
      `;
   }

   getTopLeftComponent(): TemplateResult {
      return html`
         <nidoca-icon
            title="${I18nService.getUniqueInstance().getValue('menu')}"
            slot="leftComponents"
            icon="menu"
            clickable="true"
         ></nidoca-icon>
         <nidoca-typography slot="leftComponents" .typographyType="${TypographyType.BODY1}"
            >${this.navigationTitle}</nidoca-typography
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
         <nidoca-navigation-link
            slot="links"
            icon="arrow_forward_ios"
            text="${I18nService.getUniqueInstance().getValue('pageintroduction')}"
            href="introduction"
         ></nidoca-navigation-link>
         <nidoca-navigation-link
            slot="links"
            icon="build"
            text="${I18nService.getUniqueInstance().getValue('pagegetstarted')}"
            href="getStarted"
         ></nidoca-navigation-link>
         <nidoca-divider slot="links" .dividerType="${DividerType.THIN}" opacity="0.2"></nidoca-divider>
         <nidoca-navigation-section
            slot="links"
            text="${I18nService.getUniqueInstance().getValue('sectionstructure')}"
         ></nidoca-navigation-section>
         <nidoca-navigation-link
            slot="links"
            icon="check_box_outline_blank"
            text="${I18nService.getUniqueInstance().getValue('pagebox')}"
            href="pagebox"
         ></nidoca-navigation-link>
         <nidoca-navigation-link
            slot="links"
            icon="grid_on"
            text="${I18nService.getUniqueInstance().getValue('pagegrid')}"
            href="pagegrid"
         ></nidoca-navigation-link>
         <nidoca-navigation-link
            slot="links"
            icon="dashboard"
            text="${I18nService.getUniqueInstance().getValue('pagelayout')}"
            href="pagelayout"
         ></nidoca-navigation-link>
         <nidoca-navigation-link
            slot="links"
            icon=""
            text="${I18nService.getUniqueInstance().getValue('pagefloating')}"
            href="pagefloating"
         ></nidoca-navigation-link>
         <nidoca-navigation-link
            slot="links"
            icon="chat_bubble_outline"
            text="${I18nService.getUniqueInstance().getValue('pagedialog')}"
            href="pagedialog"
         ></nidoca-navigation-link>
         <nidoca-navigation-section
            slot="links"
            text="${I18nService.getUniqueInstance().getValue('sectionstyling')}"
         ></nidoca-navigation-section>
         <nidoca-navigation-link
            slot="links"
            icon="select_all"
            text="${I18nService.getUniqueInstance().getValue('pagespacer')}"
            href="pagespacer"
         ></nidoca-navigation-link>
         <nidoca-navigation-link
            slot="links"
            icon="visibility"
            text="${I18nService.getUniqueInstance().getValue('pagevisible')}"
            href="pagevisible"
         ></nidoca-navigation-link>
         <nidoca-navigation-link
            slot="links"
            icon="remove"
            text="${I18nService.getUniqueInstance().getValue('pagedivider')}"
            href="pagedivider"
         ></nidoca-navigation-link>
         <nidoca-navigation-link
            slot="links"
            icon="border_outer"
            text="${I18nService.getUniqueInstance().getValue('pageborder')}"
            href="pageborder"
         ></nidoca-navigation-link
         ><nidoca-navigation-link
            slot="links"
            icon=""
            text="${I18nService.getUniqueInstance().getValue('pagechip')}"
            href="pagechip"
         ></nidoca-navigation-link>
         <nidoca-navigation-link
            slot="links"
            icon="view_day"
            text="${I18nService.getUniqueInstance().getValue('pageaccordion')}"
            href="pageaccordion"
         ></nidoca-navigation-link>
          <nidoca-navigation-link
            slot="links"
            icon=""
            text="${I18nService.getUniqueInstance().getValue('pagewizard')}"
            href="pagewizard"
         ></nidoca-navigation-link>
         <nidoca-navigation-link
            slot="links"
            icon=""
            text="${I18nService.getUniqueInstance().getValue('pagetabs')}"
            href="pagetabs"
         ></nidoca-navigation-link>
         <nidoca-navigation-section
            slot="links"
            text="${I18nService.getUniqueInstance().getValue('pageabstract_komp')}"
         ></nidoca-navigation-section>
         <nidoca-navigation-link
            slot="links"
            icon="title"
            text="${I18nService.getUniqueInstance().getValue('pagetypography')}"
            href="pagetypography"
         ></nidoca-navigation-link>
         <nidoca-navigation-link
            slot="links"
            icon="input"
            text="${I18nService.getUniqueInstance().getValue('pageinput')}"
            href="pageinput"
         ></nidoca-navigation-link>
         <nidoca-navigation-link
            slot="links"
            icon=""
            text="${I18nService.getUniqueInstance().getValue('pagebutton')}"
            href="pagebutton"
         ></nidoca-navigation-link
         ><nidoca-navigation-link
            slot="links"
            icon="sentiment_satisfied_alt"
            text="${I18nService.getUniqueInstance().getValue('pageicon')}"
            href="pageicon"
         ></nidoca-navigation-link>
         <nidoca-navigation-link
            slot="links"
            icon="image"
            text="${I18nService.getUniqueInstance().getValue('pagerichmedia')}"
            href="pagerichmedia"
         ></nidoca-navigation-link>
         <nidoca-navigation-link
            slot="links"
            icon="code"
            text="${I18nService.getUniqueInstance().getValue('pagecode')}"
            href="pagecode"
         ></nidoca-navigation-link>
         <nidoca-navigation-link
            slot="links"
            icon=""
            text="${I18nService.getUniqueInstance().getValue('pagelink')}"
            href="pagelink"
         ></nidoca-navigation-link>

         <nidoca-navigation-link
            slot="links"
            icon="view_headline"
            text="${I18nService.getUniqueInstance().getValue('pagelist')}"
            href="pagelist"
         ></nidoca-navigation-link>
         <nidoca-navigation-link
            slot="links"
            icon=""
            text="${I18nService.getUniqueInstance().getValue('pagetable')}"
            href="pagetable"
         ></nidoca-navigation-link>
         <nidoca-divider slot="links" .dividerType="${DividerType.THIN}" opacity="0.2"></nidoca-divider>
         <nidoca-navigation-section
            slot="links"
            text="${I18nService.getUniqueInstance().getValue('pageabstract_eff')}"
         ></nidoca-navigation-section>
         <nidoca-navigation-link
            slot="links"
            icon="dynamic_feed"
            text="${I18nService.getUniqueInstance().getValue('pagetransition')}"
            href="pagetransition"
         ></nidoca-navigation-link>
         <nidoca-navigation-link
            slot="links"
            icon="all_out"
            text="${I18nService.getUniqueInstance().getValue('pageripple')}"
            href="pageripple"
         ></nidoca-navigation-link>
         <nidoca-navigation-link
            slot="links"
            icon=""
            text="${I18nService.getUniqueInstance().getValue('pageprogress')}"
            href="pageprogress"
         ></nidoca-navigation-link>
         <nidoca-divider slot="links" .dividerType="${DividerType.THIN}" opacity="0.2"></nidoca-divider>
         <nidoca-navigation-link
            slot="links"
            icon="info"
            text="${I18nService.getUniqueInstance().getValue('pageimprint')}"
            href="pageimprint"
         ></nidoca-navigation-link>
      `;
   }
}
