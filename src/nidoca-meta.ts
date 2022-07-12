import {html, HTMLTemplateResult} from "lit";

export enum NidocaTheme {
   primary = "primary",
   secondary = "secondary",
   surface = "surface",
   background = "background",
   transparent = "transparent",
}
export class NidocaThemeHelper {
   static getStyle(theme: NidocaTheme | string | undefined): HTMLTemplateResult {
      return theme
         ? theme == NidocaTheme.transparent
            ? html``
            : html` <style>
                 :host,
                 *,
                 ::slotted(*) {
                    color: var(--app-color-${theme});
                    background-color: var(--app-color-${theme}-background);
                    border-color: var(--app-color-${theme}-border);
                 }

                 ::slotted(.h2),
                 .h2 {
                    color: #3f6796;
                 }
              </style>`
         : html``;
   }

   static getOposite(theme: string | undefined) {
      return theme == NidocaTheme.background
         ? NidocaTheme.surface
         : theme == NidocaTheme.primary
         ? NidocaTheme.secondary
         : theme == NidocaTheme.primary
         ? NidocaTheme.secondary
         : theme == NidocaTheme.secondary
         ? NidocaTheme.primary
         : NidocaTheme.background;
   }

   getParentTheme(element: HTMLElement): string | undefined {
      let parentComponent: HTMLElement | null = element;
      while (parentComponent != null) {
         if ((<any>parentComponent).theme != undefined) {
            return (<any>parentComponent).theme;
         }
         parentComponent = parentComponent.parentElement;
      }
      return undefined;
   }
}
