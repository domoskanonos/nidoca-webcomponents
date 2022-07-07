export const MOBILE_MIN_WIDTH = 0;
export const MOBILE_MAX_WIDTH = 640;
export const TABLET_MIN_WIDTH = 641;
export const TABLET_MAX_WIDTH = 1007;
export const DESKTOP_MIN_WIDTH = 1008;

import {html, HTMLTemplateResult, LitElement, TemplateResult} from 'lit';
import {
  NidocaAvatar,
  NidocaBox,
  NidocaButtonType,
  NidocaIcon,
  NidocaImg,
  NidocaMenu,
  NidocaMovie,
  NidocaProgress,
} from '.';

export class NidocaTheme {
  static getStyle(theme: NidocaTheme | string | undefined): HTMLTemplateResult {
    return theme
      ? theme == NidocaTheme.TRANSPARENT
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

  static readonly PRIMARY: string = 'primary';
  static readonly SECONDARY: string = 'secondary';
  static readonly SURFACE: string = 'surface';
  static readonly BACKGROUND: string = 'background';
  static readonly TRANSPARENT: string = 'transparent';

  static getOposite(theme: string | undefined) {
    return theme == NidocaTheme.BACKGROUND
      ? NidocaTheme.SURFACE
      : theme == NidocaTheme.PRIMARY
      ? NidocaTheme.SECONDARY
      : theme == NidocaTheme.PRIMARY
      ? NidocaTheme.SECONDARY
      : theme == NidocaTheme.SECONDARY
      ? NidocaTheme.PRIMARY
      : NidocaTheme.BACKGROUND;
  }

  getParentTheme(element: HTMLElement): string | undefined {
    let parentComponent: HTMLElement | null = element;
    while (parentComponent != null) {
      if ((<any>parentComponent).theme != undefined) {
        return (<any>parentComponent).theme as keyof NidocaTheme;
      }
      parentComponent = parentComponent.parentElement;
    }
    return undefined;
  }
}
