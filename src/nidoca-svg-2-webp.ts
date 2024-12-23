import { css, html, LitElement, PropertyValues } from 'lit';
import { NidocaHtml } from './nidoca-html';

import { customElement, query } from 'lit/decorators.js';
import { property } from 'lit/decorators.js';

@customElement('nidoca-svg-2-webp')
export class NidocaSvg2Webp extends NidocaHtml {
  static styles = css``;

  @property({ type: String })
  //src: string = 'https://raw.githubusercontent.com/domoskanonos/devbox/main/assets/logo-ink.svg';
  src: string = '';
  canvasElements: HTMLCanvasElement[] = [];

  storeCanvasElements: HTMLCanvasElement[] = [];

  @query('#img')
  private img: HTMLImageElement | undefined;

  render(): any {
    return html`
      <img style="display: none;" id="img" src="${this.src}" />

      ${this.canvasElements.map((canvas: HTMLCanvasElement) => {
      return html`${canvas}`;
    })}
    `;
  }

  updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);
    changedProperties.forEach((oldValue, propName) => {
      console.debug(`${this.tagName} : property ${String(propName)} changed. oldValue: ${oldValue}`);
      if (propName == 'src') {
        this.convert();

        const playstoreImages = [
          ['App-Symbol', 512, 512],
          ['Vorstellungsgrafik', 1024, 500],
          ['screenshoot_dummy', 1920, 1080],
        ];

        //const formData = new FormData();
        //formData.append('file1', blob1, 'file1.pdf'); // blob1 is a `Blob` object.
        //formData.append('file2', blob2, 'file2.pdf'); // blob2 is another `Blob` object.
        //fetch('https://example.com/upload/', { method: 'post', body: formData, });
      }
    });
  }

  convert() {
    if (this.img) {
      console.log('GO');
      this.img.onload = () => {
        [
          [12, 12],
          [16, 16],
          [22, 22],
          [24, 24],
          [32, 32],
          [36, 36],
          [48, 48],
          [64, 64],
          [72, 72],
          [96, 96],
          [128, 128],
          [144, 144],
          [192, 192],
        ].forEach((size: number[]) => {
          const canvas = document.createElement('canvas');
          canvas.width = size[0];
          canvas.height = size[1];
          const context = canvas.getContext('2d');
          if (context) {
            if (this.img) {
              this.img.crossOrigin = 'anonymous';
              //context.drawImage(this.img, 0, 0);
              context.drawImage(this.img, 0, 0, size[0], size[1]);
              canvas.toBlob((blob) => {
                if (blob) {
                  // Now we have a `blob` containing webp data
                  // Use the file rename trick to turn it back into a file
                  //const myImage = new File([blob], 'my-new-name.webp', {type: blob.type});
                  //const a = document.createElement("a");
                  //document.body.appendChild(a);
                  //a.style.display = "none";
                  //const url = window.URL.createObjectURL(blob);
                  //a.href = url;
                  //a.download = "my-new-name.webp";
                  //a.click();
                  //window.URL.revokeObjectURL(url);
                }
              }, 'image/webp');
            }
          }

          this.canvasElements.push(canvas);
        });
        this.requestUpdate();
      };
    }
  }
}
