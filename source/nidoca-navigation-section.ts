import { css, customElement, html, LitElement, property } from 'lit-element';
import { FlexAlignContent, FlexAlignItems, FlexContainerProperties, FlexDirection, FlexJustifyContent, FlexWrap } from './nidoca-flex-container';
import { SpacerAlignment, SpacerSize } from './nidoca-spacer';
import { TypographyType } from './nidoca-typography';

@customElement('nidoca-navigation-section')
export class NidocaNavigationSection extends LitElement {
    static styles = css``;

    @property()
    text: string = '';

    @property()
    rendered: boolean = true;

    render() {
        return this.rendered
            ? html`
                  <nidoca-flex-container
                      .flexContainerProperties="${[FlexContainerProperties.CONTAINER_WIDTH_100]}"
                      .flexItemProperties="${[]}"
                      .flexDirection="${FlexDirection.ROW}"
                      .flexWrap="${FlexWrap.NO_WRAP}"
                      .flexJustifyContent="${FlexJustifyContent.FLEX_END}"
                      .flexAlignItems="${FlexAlignItems.CENTER}"
                      .flexAlignContent="${FlexAlignContent.FLEX_START}"
                      flexItemBasisValue="80%"
                  >
                      <nidoca-spacer spacerSize="${SpacerSize.MEDIUM}" spacerAlignment="${SpacerAlignment.VERTICAL}">
                          <nidoca-typography .typographyType="${TypographyType.H6}" text="${this.text}"></nidoca-typography>
                      </nidoca-spacer>
                  </nidoca-flex-container>
              `
            : html``;
    }
}
