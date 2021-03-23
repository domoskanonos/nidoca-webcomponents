import {css, customElement, html, property, LitElement, TemplateResult} from 'lit-element';
import {SpacerType, SpacerSize} from './nidoca-spacer';
import {
  FlexAlignContent,
  FlexAlignItems,
  FlexDirection,
  FlexJustifyContent,
  FlexWrap,
} from './nidoca-flex-container';
import {TypographyType} from './nidoca-typography';

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

  render(): TemplateResult {
    return this.rendered
      ? html`
          <div
            class="navItem"
            class="${'TODO: RouterService.getUniqueInstance().getPath()' == this.href ? 'navItem selected' : 'navItem'}"
          >
            <nidoca-spacer spacerSize="${SpacerSize.SMALL}" spacerAlignment="${SpacerType.VERTICAL}">
              <nidoca-flex-container
                @click="${() => this.linkClicked()}"
                .flexDirection="${FlexDirection.ROW}"
                .flexWrap="${FlexWrap.NO_WRAP}"
                .flexJustifyContent="${FlexJustifyContent.SPACE_AROUND}"
                .flexAlignItems="${FlexAlignItems.CENTER}"
                .flexAlignContent="${FlexAlignContent.FLEX_START}"
                itemStyle="flex-basis: auto 80%;"
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
    let customEventName = 'nidoca-event-link-clicked';
    console.log('dispatch custom event: %s', customEventName);
    this.dispatchEvent(new CustomEvent(customEventName, {detail: this.href, bubbles: true, composed: true}));
  }
}
