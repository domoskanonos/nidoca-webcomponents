import { css, customElement, html, unsafeCSS, property, LitElement } from 'lit-element';
import { BasicService, RouterService } from '@domoskanonos/frontend-basis';
import { AlignContent, AlignItems, FlexDirection, FlexJustifyContent, FlexWrap, SpacerAlignment, SpacerSize } from '../..';
import { ContainerClazzValues } from '../../flex-container/component';

const componentCSS = require('./component.css');

@customElement('component-navigation-link')
export class NavigationLinkComponent extends LitElement {
   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   static IDENTIFIER: string = 'NavigationLinkComponent';

   @property()
   icon: string = '';

   @property()
   text: string = '';

   @property()
   href: string = '';

   @property()
   rendered: boolean = true;

   render() {
      return this.rendered
         ? html`
              <div
                 class="navItem"
                 class="${RouterService.getUniqueInstance().getPath() == this.href ? 'navItem selected' : 'navItem'}"
              >
                 <component-spacer spacerSize="${SpacerSize.SMALL}" spacerAlignment="${SpacerAlignment.VERTICAL}">
                    <component-flex-container
                       @click="${() => this.linkClicked()}"
                       .containerClazzes="${[ContainerClazzValues.CONTAINER_WIDTH_100]}"
                       .itemClazzes="${[]}"
                       .flexDirection="${FlexDirection.ROW}"
                       .flexWrap="${FlexWrap.NO_WRAP}"
                       .flexJustifyContent="${FlexJustifyContent.FLEX_END}"
                       .alignItems="${AlignItems.CENTER}"
                       .alignContent="${AlignContent.FLEX_START}"
                       .itemFlexBasisValues="${['20%', '80%']}"
                    >
                       <component-icon icon="${this.icon}" .withIconSpace="${false}"></component-icon>
                       <component-typography>${this.text}</component-typography>
                    </component-flex-container>
                 </component-spacer>
              </div>
           `
         : html``;
   }

   getOutputData(): any {
      return {};
   }

   private linkClicked() {
      RouterService.getUniqueInstance().navigate(this.href);
   }
}
