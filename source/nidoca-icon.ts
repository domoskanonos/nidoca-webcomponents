import {css, customElement, html, property, LitElement} from 'lit-element';
import {BasicService} from '@domoskanonos/frontend-basis';
import {ShadowType} from './nidoca-border';

export enum IconShadowType {
    NONE = 'NONE',
    DEFAULT_SHADOW = 'DEFAULT_SHADOW',
    SHADOW_1 = 'SHADOW_1',
    SHADOW_2 = 'SHADOW_2',
    SHADOW_3 = 'SHADOW_3',
}

@customElement('nidoca-icon')
export class NidocaIcon extends LitElement {
    static styles = css`
    .material-icons {
      font-family: 'Material Icons';
      font-weight: normal;
      font-style: normal;
      font-size: var(--icon-size);
      display: inline-block;
      line-height: 1;
      text-transform: none;
      letter-spacing: normal;
      word-wrap: normal;
      white-space: nowrap;
      direction: ltr;

      /* Support for all WebKit browsers. */
      -webkit-font-smoothing: antialiased;
      /* Support for Safari and Chrome. */
      text-rendering: optimizeLegibility;

      /* Support for Firefox. */
      -moz-osx-font-smoothing: grayscale;

      /* Support for IE. */
      font-feature-settings: 'liga';
    }

    .icon-container {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: inherit;
      color: inherit;
    }

    .icon-container:active {
    color: var(--app-color-secondary-background);
    }

    .ROUND {
      -moz-border-radius: 50%;
      -webkit-border-radius: 50%;
      border-radius: 50%;
    }

    .DEFAULT_SHADOW {
      -moz-box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.16), 0 3px 3px 0 rgba(0, 0, 0, 0.23);
      -webkit-box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.16), 0 3px 3px 0 rgba(0, 0, 0, 0.23);
      box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.16), 0 3px 3px 0 rgba(0, 0, 0, 0.23);
    }

    .SHADOW_1 {
      -moz-box-shadow: 0 1px 1.5px 0 rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.24);
      -webkit-box-shadow: 0 1px 1.5px 0 rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.24);
      box-shadow: 0 1px 1.5px 0 rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.24);
    }

    .SHADOW_2 {
      -moz-box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.19), 0 6px 3px 0 rgba(0, 0, 0, 0.23);
      -webkit-box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.19), 0 6px 3px 0 rgba(0, 0, 0, 0.23);
      box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.19), 0 6px 3px 0 rgba(0, 0, 0, 0.23);
    }

    .SHADOW_3 {
      -moz-box-shadow: 0 14px 14px 0 rgba(0, 0, 0, 0.25), 0 10px 5px 0 rgba(0, 0, 0, 0.22);
      -webkit-box-shadow: 0 14px 14px 0 rgba(0, 0, 0, 0.25), 0 10px 5px 0 rgba(0, 0, 0, 0.22);
      box-shadow: 0 14px 14px 0 rgba(0, 0, 0, 0.25), 0 10px 5px 0 rgba(0, 0, 0, 0.22);
    }

    .clickable {
      cursor: pointer;
    }
    
    .deactivated {
      color: var(--app-color-surface-background-dark);
    }
    
  `;

    @property()
    icon: string = '';

    @property()
    color: string = '';

    @property()
    backgroundColor: string = '';

    @property()
    iconShadowType: string = ShadowType.NONE;

    @property()
    size: number = 24;

    @property()
    sizeUnit: string = 'px';

    @property()
    title: string = '';

    @property()
    withIconSpace: boolean = true;

    @property()
    round: boolean = false;

    @property()
    clickable: boolean = false;

    @property()
    deactivated: boolean = false;

    render() {
        return html`
        <nidoca-spacer size="${this.withIconSpace ? String(this.size / 2).concat(this.sizeUnit) : '0px'}">
          <span
            class="icon-container ${this.iconShadowType} ${this.clickable && !this.deactivated ? 'clickable' : ''} ${this.round
            ? 'ROUND'
            : ''} ${this.deactivated ? 'deactivated' : ''}"
            title="${this.title}"
            @click="${this.clicked}"
            style="${'line-height: '.concat(this.size.toString()).concat(this.sizeUnit).concat(';')}${'width: '
            .concat(this.size.toString())
            .concat(this.sizeUnit)
            .concat(';')}${this.backgroundColor
            ? 'background-color:'.concat(this.backgroundColor).concat(';')
            : ''} ${this.round
            ? 'height:'
                .concat((this.size * 2).toString())
                .concat('px;')
                .concat('width:')
                .concat((this.size * 2).toString())
                .concat('px;')
            : ''}"
            ><i
              class="material-icons"
              style="${this.color.length > 0 ? 'color: '.concat(this.color).concat(';') : ''} ${this.size != undefined
            ? 'font-size: '.concat(this.size.toString()).concat(this.sizeUnit).concat(';')
            : ''}"
              >${this.icon}</i
            ><slot></slot>
          </span>
        </nidoca-spacer>
    `;
    }

    async clicked() {
        if (this.clickable && !this.deactivated) {
            BasicService.getUniqueInstance().dispatchSimpleCustomEvent(this, 'nidoca-event-icon-clicked', this);
        }
    }
}
