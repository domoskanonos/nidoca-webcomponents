import { css, customElement, html, property, TemplateResult, unsafeCSS } from "lit-element";
import { LitElement } from "lit-element";

export enum BorderProperty {
  NONE = "NONE",
  ALL = "ALL",
  ALL_ROUND = "ALL_ROUND",
  HORIZONTAL = "HORIZONTAL",
  VERTICAL = "VERTICAL",
  LEFT = "LEFT",
  RIGHT = "RIGHT",
  TOP = "TOP",
  BOTTOM = "BOTTOM",
  BOTTOM_SELECTED = "BOTTOM_SELECTED",
  FULL_WIDTH = "FULL_WIDTH",
  FULL_HEIGHT = "FULL_HEIGHT",
}

export enum BorderSize {
  THIN = "THIN",
  MEDIUM = "MEDIUM",
  THICK = "THICK",
}


@customElement("nidoca-border")
export class NidocaBorder extends LitElement {
  static styles = css`
    :host,
    * {
      box-sizing: border-box;
      color: inherit;
      background-color: inherit;
    }
    .BORDER {
      border-color: var(--app-color-surface-background);
    }

    slot {
      display:inline-block;
    }

    .FULL_WIDTH {
      width: 100%;
    }

    .FULL_HEIGHT {
      height: 100%;
    }

    .THIN {
      border-width: thin;
    }

    .MEDIUM {
      border-width: 2px;
    }

    .THICK {
      border-width: 4px;
    }

    .ALL {
      border-style: solid;
    }

    .ALL_ROUND {
      overflow: hidden;
      border-style: solid;
      border-radius: 10px;
    }

    .HORIZONTAL,
    .TOP {
      border-top-style: solid;
    }

    .HORIZONTAL,
    .BOTTOM {
      border-bottom-style: solid;
    }

    .VERTICAL,
    .LEFT {
      border-left-style: solid;
    }

    .VERTICAL,
    .RIGHT {
      border-right-style: solid;
    }

    .BOTTOM_SELECTED {
      border-bottom-style: solid;
      border-color: var(--mdc-theme-primary);
    }

  `;

  @property({ type: Array })
  borderProperties: BorderProperty[] = [BorderProperty.ALL];

  @property({ type: String })
  borderSize: BorderSize = BorderSize.THIN;

   render(): TemplateResult {
    return html`
      <slot
        class="${this.toBorderPropertiesString(this.borderProperties)} ${this.borderSize}"
      ></slot>
    `;
  }

  toBorderPropertiesString(borderPropertieses: string[]) : string {
    let borderClazzString: string = "BORDER";
    borderPropertieses.forEach((clazz) => {
      borderClazzString = borderClazzString.concat(" ").concat(clazz);
    });
    return borderClazzString;
  }
}
