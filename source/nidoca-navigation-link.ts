import { css, customElement, html, property, LitElement } from 'lit-element';
import { RouterService } from '@domoskanonos/frontend-basis';
import { SpacerAlignment, SpacerSize } from './nidoca-spacer';
import { FlexAlignContent, FlexAlignItems, FlexContainerProperties, FlexDirection, FlexJustifyContent, FlexWrap } from './nidoca-flex-container';
import { TypographyType } from './nidoca-typography';

@customElement('nidoca-navigation-link')
export class NidocaNavigationLink extends LitElement {
    static styles = css`
        .navItem {
            cursor: pointer;
        }

        ::slotted(.navItem.selected),
        .navItem.selected,
        ::slotted(.navItem:hover),
        .navItem:hover,
        ::slotted(.navItem:active),
        .navItem:active {
            color: var(--app-color-primary-light);
            background-color: var(--app-color-primary-background-dark);
        }
    `;

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
                  <div class="navItem" class="${RouterService.getUniqueInstance().getPath() == this.href ? 'navItem selected' : 'navItem'}">
                      <nidoca-spacer spacerSize="${SpacerSize.SMALL}" spacerAlignment="${SpacerAlignment.VERTICAL}">
                          <nidoca-flex-container
                              @click="${() => this.linkClicked()}"
                              .flexContainerProperties="${[FlexContainerProperties.CONTAINER_WIDTH_100]}"
                              .flexItemProperties="${[]}"
                              .flexDirection="${FlexDirection.ROW}"
                              .flexWrap="${FlexWrap.NO_WRAP}"
                              .flexJustifyContent="${FlexJustifyContent.FLEX_END}"
                              .flexAlignItems="${FlexAlignItems.CENTER}"
                              .flexAlignContent="${FlexAlignContent.FLEX_START}"
                              .flexItemBasisValues="${['20%', '80%']}"
                          >
                              <nidoca-icon icon="${this.icon}" .withIconSpace="${false}"></nidoca-icon>
                              <nidoca-typography typographyType="${TypographyType.BODY2}">${this.text}</nidoca-typography>
                          </nidoca-flex-container>
                      </nidoca-spacer>
                  </div>
              `
            : html``;
    }

    private linkClicked() {
        RouterService.getUniqueInstance().navigate(this.href);
    }
}
