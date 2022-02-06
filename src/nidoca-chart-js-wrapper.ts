import Chart from "chart.js/auto";
import {ChartConfiguration} from "chart.js";
import {css, html, TemplateResult, LitElement, PropertyValues} from "lit";
import {customElement, property, queryAsync} from "lit/decorators.js";

@customElement("nidoca-chart-js-wrapper")
export class NidocaChartJSWrapper extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
  `;

  @queryAsync("#bar-chart")
  canvas: Promise<HTMLCanvasElement> | undefined;

  @property()
  options: ChartConfiguration | undefined;

  updated(_changedProperties: PropertyValues) {
    if (_changedProperties.has("options") && this.options) {
      this.loadCanvas().then(() => {
        console.log("canvas loaded.");
      });
    }
  }

  render(): TemplateResult {
    return html`<div style="width: 100%; height:100%;">
      <canvas id="bar-chart" width="100%"></canvas>
    </div>`;
  }

  async loadCanvas() {
    const loadedCanvas: HTMLCanvasElement | undefined = await this.canvas;
    if (loadedCanvas) {
      const chart = new Chart(loadedCanvas, this.options);
    }
  }
}
