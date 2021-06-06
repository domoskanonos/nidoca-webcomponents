import {css, customElement, html, property, LitElement, TemplateResult} from 'lit-element';
import {NidocaSpacerType, NidocaSpacerSize} from './nidoca-spacer';
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
      color: var(--mdc-theme-on-primary-light);
      background-color: var(--mdc-theme-primary-dark);
    }
  `;

  @property({type: String})
  icon: string = '';

  @property({type: String})
  text: string = '';

  @property({type: String})
  href: string = '';

  render(): TemplateResult {
    return html`
          <div
            class="navItem"
            class="${'TODO: RouterService.getUniqueInstance().getPath()' == this.href ? 'navItem selected' : 'navItem'}"
          >
            <nidoca-spacer spacerSize="${NidocaSpacerSize.LITTLE}" .spacerTypes="${[NidocaSpacerType.VERTICAL]}">
              <nidoca-flex-container
                @click="${() => this.linkClicked()}"
                .flexDirection="${FlexDirection.ROW}"
                .flexWrap="${FlexWrap.NO_WRAP}"
                .flexJustifyContent="${FlexJustifyContent.FLEX_START}"
                .flexAlignItems="${FlexAlignItems.CENTER}"
                .flexAlignContent="${FlexAlignContent.FLEX_START}"
                itemStyle="flex-basis: 48px auto;"
              >
                <nidoca-icon icon="${this.icon}" .withIconSpace="${false}"></nidoca-icon>
                <nidoca-spacer spacerSize="${NidocaSpacerSize.LITTLE}" .spacerTypes="${[NidocaSpacerType.LEFT]}">
                  <nidoca-typography typographyType="${TypographyType.BODY1}">${this.text}</nidoca-typography>
                </nidoca-spacer>
              </nidoca-flex-container>
            </nidoca-spacer>
          </div>
        `;
  }

  private linkClicked() {
    let customEventName = 'nidoca-event-link-clicked';
    console.log('dispatch custom event: %s', customEventName);
    this.dispatchEvent(new CustomEvent(customEventName, {detail: this.href, bubbles: true, composed: true}));
  }
}
