import {css, html, TemplateResult} from "lit";
import {customElement} from "lit/decorators/custom-element";
import {property} from "lit/decorators/property";
import {FormOutputData, NidocaFormAbstractInputElement} from "./nidoca-form-abstract-input-element";
import {NidocaTypographyType} from "./nidoca-typography";
import {VisibleType} from "./nidoca-visible";

@customElement("nidoca-form-switch")
export class NidocaFormSwitch extends NidocaFormAbstractInputElement {
  static styles = css``;

  @property({type: String})
  name: string = "";

  @property({type: String})
  label: string = "";

  @property({type: String})
  assistiveText: string = "";

  @property({type: String})
  errorText: string = "";

  @property({type: Boolean})
  checked: boolean = false;

  render(): TemplateResult {
    return html`
      <nidoca-typography .typographyType="${NidocaTypographyType.SUBTITLE1}" text="${this.label}">
        <slot></slot>
      </nidoca-typography>
      <nidoca-visible visibleType="${this.assistiveText.length > 0 ? VisibleType.NORMAL : VisibleType.HIDE}">
        <nidoca-typography
          .typographyType="${NidocaTypographyType.SUBTITLE2}"
          text="${this.assistiveText}"
        ></nidoca-typography>
      </nidoca-visible>
      <nidoca-visible visibleType="${this.checked ? VisibleType.HIDE : VisibleType.NORMAL}">
        <nidoca-icon
          @nidoca-event-icon-clicked="${() => {
            this.switchSelected();
          }}"
          icon="toggle_off"
          .clickable="${true}"
        ></nidoca-icon>
      </nidoca-visible>
      <nidoca-visible visibleType="${this.checked ? VisibleType.NORMAL : VisibleType.HIDE}">
        <nidoca-icon
          color="var(--mdc-theme-primary)"
          @nidoca-event-icon-clicked="${() => {
            this.switchSelected();
          }}"
          icon="toggle_on"
          .clickable="${true}"
        ></nidoca-icon>
      </nidoca-visible>
    `;
  }

  getOutputData(): FormOutputData {
    return <FormOutputData>{
      key: this.name,
      value: this.checked,
    };
  }

  validate(): boolean {
    return true;
  }

  private switchSelected() {
    this.checked = !this.checked;
    if (this.validate()) {
      const customEvent = new CustomEvent("nidoca-form-switch-event-change", {
        detail: this.getOutputData(),
        bubbles: true,
        composed: true,
      });
      console.debug("dispatch custom event type: %s, detail: %s", customEvent.type, JSON.stringify(customEvent.detail));
      this.dispatchEvent(customEvent);
    }
  }
}
