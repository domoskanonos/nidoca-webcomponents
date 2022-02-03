import {css, html, TemplateResult, LitElement} from "lit";
import {customElement, property} from "lit/decorators.js";
import {NidocaTheme} from ".";

@customElement("nidoca-split-screen")
export class NidocaSplitScreen extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
    }

    .listbox {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      width: 100%;
    }

    .sidebox {
      display: block;
      color: blue;
      background-color: green;
      z-index: 1;
      position: fixed;
      right: 0;
      width: 300px;
      min-height: 100%;
      transition: all 0.35s linear;
      overflow-y: scroll;
      max-height: 100%;
    }
  `;

  @property({type: NidocaTheme, converter: String})
  theme: string | undefined;

  @property({type: Boolean, converter: String})
  hideSidebox: boolean = true;

  render(): TemplateResult {
    return html` ${NidocaTheme.getStyle(this.theme)}
      <slot class="listbox" name="left"></slot>
      ${this.hideSidebox ? html`` : html`<slot class="sidebox" name="sidebox"></slot>`}`;
  }
}
