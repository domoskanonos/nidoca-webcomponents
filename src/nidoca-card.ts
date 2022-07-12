import {css, html, LitElement, TemplateResult} from "lit";
import {customElement, property} from "lit/decorators.js";
import {NidocaTheme, NidocaThemeHelper} from "./nidoca-meta";

@customElement("nidoca-card")
export class NidocaCard extends LitElement {
   static styles = css`
      :host {
         box-sizing: border-box;
         display: block;
         border-radius: 1rem;
         border-style: solid;
         border-width: var(--border-width-min);
         box-shadow: 0 var(--space) var(--space) rgba(0, 0, 0, 0.08),
            0 var(--space) var(--space) rgba(0, 0, 0, 0.16);
      }
      slot {
         display: block;
      }
   `;

   @property({type: NidocaTheme, converter: String})
   theme: string = NidocaTheme.surface;

   render(): TemplateResult {
      return html`
         <style>
            :host {
               border-color: var(--app-color-${this.theme}-border);
            }
         </style>
         <slot></slot>
      `;
   }
}
