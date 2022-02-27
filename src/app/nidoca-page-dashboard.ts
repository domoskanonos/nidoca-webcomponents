import {css, html, LitElement, TemplateResult} from "lit";
import {customElement, property} from "lit/decorators.js";
import {Aufgabe, Vertrag, VertragKategorie} from "./model/vertrag";
import {ChartConfiguration} from "chart.js";
import {NidocaPostgrestClient} from "./service/nidoca-postgrest-client";
import {NidocaIcon} from "../nidoca-icon";
import {NidocaDateHelper} from "@domoskanonos/nidoca-date-helper";

@customElement("nidoca-page-dashboard")
export class NidocaPageDashboard extends LitElement {
  static styles = css``;

  @property()
  options: ChartConfiguration | undefined;

  @property()
  options2: ChartConfiguration | undefined;

  @property()
  aufgaben: any[] = [[]];

  protected firstUpdated(): void {
    NidocaPostgrestClient.search("/vertrag", "").then((items: Vertrag[]) => {
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

    NidocaPostgrestClient.search("/vertrag_kategorie", "").then((items: VertragKategorie[]) => {
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

    NidocaPostgrestClient.search("/aufgabe", "?offset=0&limit=100&order=ablaufdatum.asc&titel=like.*").then(
      (aufgaben: Aufgabe[]) => {
        const nidocaDateHelper: NidocaDateHelper = new NidocaDateHelper();
        const rows: any = [[]];
        aufgaben.forEach((aufgabe: Aufgabe) => {
          rows.push([aufgabe.titel, nidocaDateHelper.formatDate(aufgabe.ablaufdatum, "dd.MM.yyyy")]);
        });
        this.aufgaben = rows;
      }
    );
  }

  render(): TemplateResult {
    return html`
      <div style="display:flex;align-items:center;justify-content:center;align-content:flex-start;">
        <nidoca-img-round
          width="150px;"
          height="150px;"
          src="https://github.com/domoskanonos/nidoca-assets/raw/main/avatar.jpg"
        ></nidoca-img-round>
        <nidoca-text-h1>Willkommen zurück Dominik</nidoca-text-h1>
      </div>

      <nidoca-card>
        <nidoca-box>
          <nidoca-text-body>Kostenverteilung pro Monat in Euro</nidoca-text-body>
          <nidoca-chart-js-wrapper style="height:500px;" .options="${this.options}"> </nidoca-chart-js-wrapper>
        </nidoca-box>
      </nidoca-card>

      <nidoca-card>
        <nidoca-box>
          <nidoca-text-body>Kostenverteilung pro Kategorie</nidoca-text-body>
          <nidoca-chart-js-wrapper .options="${this.options2}"> </nidoca-chart-js-wrapper>
        </nidoca-box>
      </nidoca-card>
      <nidoca-card>
        <nidoca-box>
          <nidoca-text-body>Nächste Aufgaben</nidoca-text-body>

          <nidoca-table theme="surface" .headers="${["Titel", "Ablaufdatum"]}" .rows="${this.aufgaben}"> </nidoca-table>
        </nidoca-box>
      </nidoca-card>
    `;
  }
}
