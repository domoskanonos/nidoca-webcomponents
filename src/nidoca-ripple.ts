import {css, html, TemplateResult, LitElement} from 'lit';
import {NidocaHtml} from './nidoca-html';

import {customElement} from 'lit/decorators.js';
import {query} from 'lit/decorators.js';

/**
 * check src: https://codepen.io/jakob-e/pen/XZoZWQ
 */
@customElement('nidoca-ripple')
export class NidocaRipple extends NidocaHtml {
  static styles = css`
    :host {
      display: inline-block;
    }

    :root {
      --ripple-background: var(--app-color-surface-background-dark);
      --ripple-opacity: 0.8;
      --ripple-duration: 600ms;
      --ripple-easing: linear;

      --y: 0;
      --x: 0;
      --d: 0;
      --t: 0;
      --s: 0;
      --o: 0;
    }

    *,
    *::before,
    *::after {
      box-sizing: inherit;
    }

    [anim='ripple'] {
      position: relative;
      overflow: hidden;
    }

    [anim='ripple']:before {
      content: '';
      position: absolute;
      display: block;
      background: var(--ripple-background, white);
      border-radius: 50%;
      pointer-events: none;
      top: calc(var(--y) * 1px);
      left: calc(var(--x) * 1px);
      width: calc(var(--d) * 1px);
      height: calc(var(--d) * 1px);
      opacity: calc(var(--o, 1) * var(--ripple-opacity, 0.3));
      -webkit-transition: calc(var(--t, 0) * var(--ripple-duration, 600ms)) var(--ripple-easing, linear);
      transition: calc(var(--t, 0) * var(--ripple-duration, 600ms)) var(--ripple-easing, linear);
      -webkit-transform: translate(-50%, -50%) scale(var(--s, 1));
      transform: translate(-50%, -50%) scale(var(--s, 1));
      -webkit-transform-origin: center;
      transform-origin: center;
    }
  `;

  @query('#rippleContainer')
  private rippleContainerElement: HTMLSpanElement | undefined;

  render(): TemplateResult {
    return html`
      <div id="rippleContainer" anim="ripple" @click="${(event: MouseEvent | TouchEvent) => this.clicked(event)}">
        <slot></slot>
      </div>
    `;
  }

  private clicked(event: MouseEvent | TouchEvent | Touch) {
    if (this.rippleContainerElement != undefined) {
      if (event instanceof TouchEvent) {
        event = event.touches ? event.touches[0] : event;
      }
      const r = this.rippleContainerElement.getBoundingClientRect(),
        d = Math.sqrt(Math.pow(r.width, 2) + Math.pow(r.height, 2)) * 2;
      this.rippleContainerElement.style.cssText = '--s: 0; --o: 1;';
      this.rippleContainerElement.offsetTop;
      if (event instanceof MouseEvent || event instanceof Touch) {
        this.rippleContainerElement.style.cssText = `--t: 1; --o: 0; --d: ${d}; --x:${event.clientX - r.left}; --y:${
          event.clientY - r.top
        };`;
      }
    }
  }
}
