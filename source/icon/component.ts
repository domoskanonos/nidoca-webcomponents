import {css, customElement, html, property, unsafeCSS, LitElement} from 'lit-element';
import {BasicService} from '@domoskanonos/frontend-basis';

const componentCSS = require('./component.css');

export class EventIconClickData {
    icon: string = '';
    clickData?: any;
    clickable: boolean = false;
}

@customElement('component-icon')
export class IconComponent extends LitElement {
    static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

    static IDENTIFIER: string = 'IconComponent';

    static EVENT_CLICK: string = 'component-icon-click';

    @property()
    icon: string = '';

    @property()
    color: string = '';

    @property()
    clazz: string = '';

    @property()
    size: number = 24;

    @property()
    sizeUnit: string = 'px';

    @property()
    title: string = '';

    @property()
    withIconSpace: boolean = true;

    @property()
    clickable: boolean = false;

    @property()
    clickData: any;

    render() {
        return html`
         <span
            class="icon-container ${this.clazz} ${this.clickable ? 'clickable' : ''}"
            title="${this.title}"
            @click="${this.clicked}"
            style="${this.withIconSpace && this.size != undefined
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
            ? 'font-size: ' + this.size.toString().concat(this.sizeUnit.concat(';'))
            : ''}"
               >${this.icon}</i
            >
         </span>
      `;
    }

    getEventList(): string[] {
        return [IconComponent.EVENT_CLICK];
    }

    async clicked() {
        if (this.clickable) {
            BasicService.getUniqueInstance().dispatchSimpleCustomEvent(this, IconComponent.EVENT_CLICK, <EventIconClickData>{
                clickData: this.clickData,
                clickable: this.clickable,
                icon: this.icon
            });
        }
    }
}
