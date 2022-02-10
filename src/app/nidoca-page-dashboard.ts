import {css, html, LitElement, TemplateResult} from "lit";
import {customElement, property} from "lit/decorators.js";
import {Vertrag, VertragKategorie} from "./model/vertrag";
import {ChartConfiguration} from "chart.js";
import {PostgRESTClient} from "./service/postgrest-client";

@customElement("nidoca-page-dashboard")
export class NidocaPageDashboard extends LitElement {
  static styles = css``;

  private client: PostgRESTClient = new PostgRESTClient("http://89.58.33.189");

  @property()
  options: ChartConfiguration | undefined;

  @property()
  options2: ChartConfiguration | undefined;

  protected firstUpdated(): void {
    this.client.search("/vertrag", "").then((items: Vertrag[]) => {
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

    this.client.search("/vertrag_kategorie", "").then((items: VertragKategorie[]) => {
      this.options2 = {
        type: "pie",
        data: {
          labels: items.map((item: VertragKategorie) => item.kategorie),
          datasets: [
            {
              label: "My First Dataset",
              data: items.map((item: VertragKategorie) => item.kosten),
              backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(255, 205, 86)"],
              hoverOffset: 4,
            },
          ],
        },
      };
    });
  }

  render(): TemplateResult {
    return html`
      <nidoca-section style="width:50%;">
        <div style="display:flex;align-items:center;justify-content:center;align-content:flex-start;">
          <nidoca-img-round
            width="150px;"
            height="150px;"
            src="https://github.com/domoskanonos/nidoca-assets/raw/main/avatar.jpg"
          ></nidoca-img-round>
          <nidoca-text-h1>Willkommen zurück Dominik</nidoca-text-h1>
        </div>
      </nidoca-section>
      <nidoca-card style="padding:var(--space-2);">
        <nidoca-box>
          <nidoca-text-body>Kostenverteilung pro Monat in Euro</nidoca-text-body>
          <nidoca-chart-js-wrapper style="display:block;width:15vw;height:15vw;" .options="${this.options}">
          </nidoca-chart-js-wrapper>
        </nidoca-box>
      </nidoca-card>

      <nidoca-card style="padding:var(--space-2);">
        <nidoca-box>
          <nidoca-text-body>Kostenverteilung pro Kategorie</nidoca-text-body>
          <nidoca-chart-js-wrapper style="display:block;width:15vw;height:15vw;" .options="${this.options2}">
          </nidoca-chart-js-wrapper>
        </nidoca-box>
      </nidoca-card>
    `;
  }
}
