import {css, customElement, html, LitElement, property, unsafeCSS} from 'lit-element';

const componentCSS = require('./component.css');

export class TransitionType {
    static CENTER = 'CENTER';
    static LEFT = 'LEFT';
    static RIGHT = 'RIGHT';
    static TOP = 'TOP';
    static BOTTOM = 'BOTTOM';
    static SLIDE_CENTER = 'SLIDE_CENTER';
    static SLIDE_LEFT = 'SLIDE_LEFT';
    static SLIDE_RIGHT = 'SLIDE_RIGHT';
    static SLIDE_TOP = 'SLIDE_TOP';
    static SLIDE_BOTTOM = 'SLIDE_BOTTOM';
}

@customElement('component-transition')
export class TransitionComponent extends LitElement {
    @property()
    transitionType: TransitionType = TransitionType.CENTER;

    @property()
    duration: number = 0.5; // seconds

    static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

    render() {
        return html`
         <div class="${this.transitionType}"><slot></slot></div>
      `;
    }
}
