import {css, html, TemplateResult, LitElement} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {NidocaTheme, NidocaThemeHelper} from ".";

/**
 * state: stable
 */
@customElement("nidoca-top-app-bar")
export class NidocaTopAppBar extends LitElement {
   static styles = css`
      :host {
         display: block;
         top: 0;
         width: 100%;
         position: sticky;
      }

      .bar {
         display: flex;
         flex-direction: row;
         flex-wrap: nowrap;
         align-items: center;
         justify-content: space-between;
         align-content: space-around;
         width: 100%;
         height: var(--height-medium);
         box-sizing: border-box;
      }

      slot {
         display: flex;
         align-items: center;
         flex-basis: auto;
      }

      .prominent {
         display: block;
      }
   `;

   @property({type: NidocaTheme, converter: String})
   theme: string | undefined = NidocaTheme.primary;

   @property({type: Boolean})
   prominent: boolean = false;

   render(): TemplateResult {
      return html`
         ${NidocaThemeHelper.getStyle(this.theme)}
         <div class="bar">
            <slot name="left" style="justify-content:flex-start;"></slot>
            <slot name="center" style="justify-content:center;"></slot>
            <slot name="right" style="justify-content:flex-end;"></slot>
         </div>
         ${this.prominent ? html` <slot class="prominent" name="prominent"></slot>` : html``}
      `;
   }
}
