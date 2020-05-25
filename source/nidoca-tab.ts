import { css, customElement, html, property, LitElement } from 'lit-element';
import { BasicService } from '@domoskanonos/frontend-basis';
import { TypographyType } from './nidoca-typography';

@customElement('nidoca-tab')
export class NidocaTab extends LitElement {
    static styles = css`
        :host {
            border-width: 4px;
            border-color: var(--app-color-surface-background);
            border-bottom-style: solid;
            margin-left: 2px;
            margin-right: 2px;
        }

        :host(.SELECTED) {
            border-color: var(--app-color-primary-background);
        }

        .tab,
        ::slotted(.tab) {
            cursor: pointer;
            box-sizing: border-box;
        }
    `;

    @property()
    selected: boolean = false;

    @property()
    text: string = '';

    render() {
        return html`
            <span class="tab ${this.selected ? 'SELECTED' : ''}" @click="${() => this.tabClicked()}">
                ${BasicService.getUniqueInstance().isNotBlank(this.text) ? html` <nidoca-typography .typographyType="${TypographyType.OVERLINE}" text="${this.text}"></nidoca-typography> ` : html``}
                <slot></slot>
            </span>
        `;
    }

    private tabClicked(): void {
        console.log('tab clicked.');
        BasicService.getUniqueInstance().dispatchSimpleCustomEvent(this, 'nidoca-event-tab-clicked', this);
    }
}
