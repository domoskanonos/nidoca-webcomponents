import { css, html, LitElement, PropertyValues } from 'lit';
import { NidocaHtml } from './abstract/nidoca-html';

import { customElement, query } from 'lit/decorators.js';

@customElement('nidoca-video')
export class NidocaVideo extends NidocaHtml {
  static styles = css``;

  @query('#video')
  private videoElement: HTMLVideoElement | undefined;

  @query('#canvas')
  private canvasElement: HTMLCanvasElement | undefined;

  @query('#click-photo')
  private buttonElement: HTMLButtonElement | undefined;

  protected firstUpdated(_changedProperties: PropertyValues) {
    super.firstUpdated(_changedProperties);
    navigator.mediaDevices.getUserMedia({ video: true, audio: false }).then((stream) => {
      if (this.videoElement) {
        this.videoElement.srcObject = stream;
      }
    });
  }

  render(): any {
    return html`
      <video id="video" width="320" height="240" autoplay></video>
      <button id="click-photo" @click="${() => this.makeFoto()}">Click Photo</button>
      <canvas id="canvas" width="320" height="240"></canvas>
    `;
  }

  private makeFoto() {
    if (this.canvasElement && this.videoElement) {
      const context = this.canvasElement.getContext('2d');
      if (context) {
        context.drawImage(this.videoElement, 0, 0, this.canvasElement.width, this.canvasElement.height);
        const image_data_url = this.canvasElement.toDataURL('image/jpeg');
        console.log(image_data_url);
      }
    }
  }
}
