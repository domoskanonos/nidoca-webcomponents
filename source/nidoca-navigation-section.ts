import {css, customElement, html, LitElement, property, TemplateResult} from 'lit-element';
import {FlexAlignContent, FlexAlignItems, FlexDirection, FlexJustifyContent, FlexWrap} from './nidoca-flex-container';
import {SpacerType, SpacerSize} from './nidoca-spacer';
import {TypographyType} from './nidoca-typography';

@customElement('nidoca-navigation-section')
export class NidocaNavigationSection extends LitElement {
  static styles = css``;

  @property()
  text: string = '';

  @property()
  rendered: boolean = true;

  render(): TemplateResult {
    return this.rendered
      ? html`
          <nidoca-flex-container
            .flexItemProperties="${[]}"
            .flexDirection="${FlexDirection.ROW}"
            .flexWrap="${FlexWrap.NO_WRAP}"
            .flexJustifyContent="${FlexJustifyContent.FLEX_END}"
            .flexAlignItems="${FlexAlignItems.CENTER}"
            .flexAlignContent="${FlexAlignContent.FLEX_START}"
            itemStyle="flex-basis: 100%;"
          >
            <nidoca-spacer spacerSize="${SpacerSize.SMALL}" .spacerTypes="${[SpacerType.ALL]}">
              <nidoca-typography .typographyType="${TypographyType.H6}" text="${this.text}"></nidoca-typography>
            </nidoca-spacer>
          </nidoca-flex-container>
        `
      : html``;
  }
}
