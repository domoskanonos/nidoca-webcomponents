import {NidocaRouter} from "@domoskanonos/nidoca-router";
import {css, html, LitElement, TemplateResult} from "lit";
import {customElement} from "lit/decorators/custom-element";
import {property} from "lit/decorators/property";
import {
  FlexAlignContent,
  FlexAlignItems,
  FlexDirection,
  FlexJustifyContent,
  FlexWrap,
  NidocaDateType,
  NidocaTypographyType,
} from "..";
import {NidocaTextType} from "../nidoca-form-text";
import {NidocaSpacerSize, NidocaSpacerType} from "../nidoca-spacer";

@customElement("nidoca-page-form")
export class NidocaPageForm extends LitElement {
  static styles = css``;

  @property({type: Boolean})
  prominent: boolean = false;

  @property({type: Boolean})
  selectionMode: boolean = false;

  @property({type: Boolean})
  elevationShow: boolean = false;

  @property({type: Object})
  elevationAssociatedElement: HTMLElement | undefined;

  @property({type: Object})
  elevationContentElement: TemplateResult = html`sdjoidj`;

  render(): TemplateResult {
    return html`
      <nidoca-form>
        <nidoca-form-textarea name="textarea" label="Mein Text"></nidoca-form-textarea>
        <nidoca-form-text .textType="${NidocaTextType.TEXT}" name="text" label="Mein Textfeld"></nidoca-form-text>
        <nidoca-form-date .dateType="${NidocaDateType.DATE}" name="text" label="Mein Textfeld"></nidoca-form-date>
      </nidoca-form>
    `;
  }
  clicked(index: number): void {
    throw new Error("Method not implemented." + index);
  }
}
