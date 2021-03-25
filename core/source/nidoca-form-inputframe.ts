import {css, customElement, html, LitElement, property, TemplateResult} from 'lit-element';
import {BorderProperties, BorderSize} from './nidoca-border';
import {VisibleType} from './nidoca-visible';
import {FlexAlignContent} from './nidoca-flex-container';
import {TypographyType} from './nidoca-typography';
import {SpacerType, SpacerSize} from './nidoca-spacer';

@customElement('nidoca-inputframe')
export class NidocaFormInputframe extends LitElement {
  static styles = css`
    .main {
      color: var(--app-color-surface);
      background-color: var(--app-color-surface-background);
    }
  `;

  @property()
  label: string = '';

  @property()
  errorText: string | undefined;

  @property()
  infoText: string | undefined;

  @property()
  warningText: string | undefined;

  @property()
  selected: boolean = false;

  render(): TemplateResult {
    return html`
      <nidoca-border
        class="main"
        .borderSize="${this.selected ? BorderSize.THIN : BorderSize.MEDIUM}"
        .borderProperties="${[
          BorderProperties.FULL_WIDTH,
          this.selected ? BorderProperties.BOTTOM_SELECTED : BorderProperties.BOTTOM,
        ]}"
        @mouseover="${() => this.mouseover()}"
        @mouseout="${() => this.mouseout()}"
      >
        <nidoca-spacer spacerSize="${SpacerSize.SMALL}" .spacerTypes="${[SpacerType.ALL]}">
          <nidoca-flex-container
            .flexAlignContent="${FlexAlignContent.CENTER}"
            itemStyle="flex-basis: 100%;"
          >
            <nidoca-typography .typographyType="${TypographyType.CAPTION}" text="${this.label}"></nidoca-typography>
            <slot></slot>
          </nidoca-flex-container>
        </nidoca-spacer>
      </nidoca-border>

      <nidoca-flex-container
        .flexAlignContent="${FlexAlignContent.CENTER}"
        itemStyle="flex-basis: 100%;"
        ><nidoca-visible visibleType="${this.infoText ? VisibleType.NORMAL : VisibleType.HIDE}">
          <nidoca-typography .typographyType="${TypographyType.BODY1}" text="${this.infoText}"></nidoca-typography>
        </nidoca-visible>

        <nidoca-visible visibleType="${this.warningText ? VisibleType.NORMAL : VisibleType.HIDE}">
          <nidoca-typography
            style="color:var(--app-color-warning-background)"
            .typographyType="${TypographyType.BODY1}"
            text="${this.warningText}"
          ></nidoca-typography>
        </nidoca-visible>

        <nidoca-visible visibleType="${this.errorText ? VisibleType.NORMAL : VisibleType.HIDE}">
          <nidoca-typography
            style="color:var(--app-color-error-background)"
            .typographyType="${TypographyType.BODY1}"
            text="${this.errorText}"
          ></nidoca-typography> </nidoca-visible
      ></nidoca-flex-container>
    `;
  }

  async mouseover() {
    this.selected = true;
  }

  async mouseout() {
    this.selected = false;
  }
}
