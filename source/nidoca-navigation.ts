import {css, customElement, html, LitElement, property, TemplateResult} from 'lit-element';

export enum NavigationStyle {
  SURFACE = 'SURFACE',
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
}

@customElement('nidoca-navigation')
export class NidocaNavigation extends LitElement {
  static styles = css`
    .SURFACE {
      background-color: var(--app-color-surface-background);
      color: var(--app-color-surface);
    }

    .PRIMARY {
      background-color: var(--app-color-primary-background);
      color: var(--app-color-primary);
    }

    .SECONDARY {
      background-color: var(--app-color-secondary-background);
      color: var(--app-color-secondary);
    }

    .NAVIGATION {
    }
  `;

  @property({type: NavigationStyle})
  navigationStyle: NavigationStyle = NavigationStyle.PRIMARY;

  render(): TemplateResult {
    return html`
      <div class="NAVIGATION ${this.navigationStyle}">
        <slot name="contentBefore"></slot>
        <slot name="links"></slot>
        <slot name="contentAfter"></slot>
      </div>
    `;
  }
}
