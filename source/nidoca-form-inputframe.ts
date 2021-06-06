import {css, customElement, html, LitElement, property, TemplateResult} from 'lit-element';
import {BorderProperty, BorderSize} from './nidoca-border';
import {VisibleType} from './nidoca-visible';
import {FlexAlignContent} from './nidoca-flex-container';
import {TypographyType} from './nidoca-typography';
import {NidocaSpacerType, NidocaSpacerSize} from './nidoca-spacer';

export enum InputframeMode {
  NORMAL = 'NORMAL',
  CLEAR = 'CLEAR',
}

@customElement('nidoca-form-inputframe')
export class NidocaFormInputframe extends LitElement {
  static styles = css`
    .main {
      color: var(--app-color-surface);
      background-color: var(--app-color-surface-background);
    }
  `;

  @property({type: String})
  label: string = '';

  @property({type: String})
  errorText: string = '';

  @property({type: String})
  infoText: string = '';

  @property({type: String})
  warningText: string = '';

  @property({type: Boolean})
  selected: boolean = false;

  @property({type: InputframeMode})
  inputframeMode: InputframeMode = InputframeMode.NORMAL;

  render(): TemplateResult {
    return this.inputframeMode == InputframeMode.NORMAL
      ? html`
          <nidoca-border
            class="main"
            .borderSize="${this.selected ? BorderSize.THIN : BorderSize.MEDIUM}"
            .borderProperties="${[
              BorderProperty.FULL_WIDTH,
              this.selected ? BorderProperty.BOTTOM_SELECTED : BorderProperty.BOTTOM,
            ]}"
            @mouseover="${() => this.mouseover()}"
            @mouseout="${() => this.mouseout()}"
          >
            <nidoca-spacer spacerSize="${NidocaSpacerSize.SMALL}" .spacerTypes="${[NidocaSpacerType.ALL]}">
              <nidoca-flex-container .flexAlignContent="${FlexAlignContent.CENTER}" itemStyle="flex-basis: 100%;">
                <nidoca-typography .typographyType="${TypographyType.CAPTION}" text="${this.label}"></nidoca-typography>
                <slot></slot>
              </nidoca-flex-container>
            </nidoca-spacer>
          </nidoca-border>

          <nidoca-flex-container .flexAlignContent="${FlexAlignContent.CENTER}" itemStyle="flex-basis: 100%;"
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
        `
      : html`<slot></slot>`;
  }

  async mouseover() {
    this.selected = true;
  }

  async mouseout() {
    this.selected = false;
  }
}
