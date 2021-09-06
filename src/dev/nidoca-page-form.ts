import {css, html, LitElement, TemplateResult} from "lit";
import {customElement} from "lit/decorators";
import {property} from "lit/decorators";
import {query} from "lit/decorators";
import {NidocaDateType} from "..";
import {NidocaForm} from "../nidoca-form";
import {NidocaTextType} from "../nidoca-form-text";

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

  @query("#form")
  private form: NidocaForm | undefined;

  render(): TemplateResult {
    return html`
      <nidoca-form
        id="form"
        @nidoca-form-text-event-change="${() => this.showCurrentFormValues()}"
        @nidoca-form-switch-event-change="${() => this.showCurrentFormValues()}"
      >
        <nidoca-form-textarea name="textarea" label="Mein Text"></nidoca-form-textarea>
        <nidoca-form-text type="${NidocaTextType.TEXT}" name="text" label="Mein Textfeld"></nidoca-form-text>
        <nidoca-form-text type="${NidocaTextType.EMAIL}" name="email" label="Meine Email"></nidoca-form-text>
        <nidoca-form-text type="${NidocaTextType.NUMBER}" name="number" label="Meine Nummer"></nidoca-form-text>
        <nidoca-form-text
          type="${NidocaTextType.PASSWORD}"
          name="password"
          label="Mein Passwort"
        ></nidoca-form-text>
        <nidoca-form-text type="${NidocaTextType.TEL}" name="tel" label="Mein Telefon"></nidoca-form-text>
        <nidoca-form-text type="${NidocaTextType.URL}" name="url" label="Meine URL"></nidoca-form-text>
        <nidoca-form-date type="${NidocaDateType.DATE}" name="date" label="Mein Textfeld"></nidoca-form-date>
        <nidoca-form-date
          type="${NidocaDateType.DATETIME_LOCAL}"
          name="dateLocal"
          label="Mein Textfeld"
        ></nidoca-form-date>
        <nidoca-form-date type="${NidocaDateType.MONTH}" name="month" label="Mein Textfeld"></nidoca-form-date>
        <nidoca-form-date type="${NidocaDateType.TIME}" name="time" label="Mein Textfeld"></nidoca-form-date>
        <nidoca-form-date type="${NidocaDateType.WEEK}" name="week" label="Mein Textfeld"></nidoca-form-date>
        <nidoca-form-switch
          name="switch"
          label="Mein Auswahlfeld"
          assistiveText="Mein Auswahlfeld Informationstext"
          errorText="Mein Error Text"
          warningText="Mein Warning Text"
          .checked="${true}"
        ></nidoca-form-switch>
        <nidoca-form-combobox name="combobox" label="Meine Combobox"></nidoca-form-combobox>
      </nidoca-form>
    `;
  }

  showCurrentFormValues(): void {
    console.log(this.form?.getOutputData());
  }

  clicked(index: number): void {
    throw new Error("Method not implemented." + index);
  }
}
