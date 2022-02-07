import {css, html, LitElement, TemplateResult} from "lit";
import {customElement, property} from "lit/decorators.js";
import {Vertrag} from "./model/vertrag";
import {ChartConfiguration} from "chart.js";
import {PostgRESTClient} from "./service/postgrest-client";

@customElement("nidoca-page-dashboard")
export class NidocaPageDashboard extends LitElement {
  static styles = css``;

  private client: PostgRESTClient = new PostgRESTClient(
    "http://".concat(window.location.hostname).concat(":3000"),
    "/vertrag"
  );

  @property()
  options: ChartConfiguration | undefined;

  protected firstUpdated(): void {
    this.client.search("").then((items: Vertrag[]) => {
      const modifiedItemList = items
        .filter((item: Vertrag) => item.kosten > 0)
        .sort((item: Vertrag, compareItem: Vertrag) =>
          item.kosten / item.abrechnungsperiode > compareItem.kosten / compareItem.abrechnungsperiode ? -1 : 1
        );
      let sum: number = 0;
      modifiedItemList.forEach((item) => {
        sum += item.kosten / item.abrechnungsperiode;
      });
      console.log(sum);
      this.options = {
        type: "bar",
        data: {
          labels: modifiedItemList.map((item: Vertrag) => item.name),
          datasets: [
            {
              indexAxis: "y",
              label: "Kosten pro Monat",
              data: modifiedItemList.map((item: Vertrag) => item.kosten / item.abrechnungsperiode),
              backgroundColor: modifiedItemList.map(() =>
                getComputedStyle(document.body).getPropertyValue("--app-color-background")
              ),
              borderWidth: 0,
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
          },
        },
      };
    });
  }

  render(): TemplateResult {
    return html`Dashboard

      <nidoca-card style="padding:var(--space-2);">
        <nidoca-box>
          <nidoca-text-body>Kostenverteilung pro Monat in Euro<nidoca-text-body>
        <nidoca-chart-js-wrapper style="display:block;width:25vw;height:50vh;" .options="${this.options}">
        </nidoca-chart-js-wrapper>
        <nidoca-box>
      </nidoca-card> `;
  }
}
