import {css, html, LitElement, TemplateResult} from "lit";
import {customElement, property} from "lit/decorators.js";
import {Aufgabe, Vertrag, VertragKategorie} from "./model/vertrag";
import {ChartConfiguration} from "chart.js";
import {NidocaPostgrestClient} from "./service/nidoca-postgrest-client";
import {NidocaDateHelper} from "@domoskanonos/nidoca-date-helper";
import {AppController} from "./service/app-controller";

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
        AppController.alleKostenpflichtigeVertraege().then((items: Vertrag[]) => {
            this.options = {
                type: "bar",
                data: {
                    labels: items.map((item: Vertrag) => item.name),
                    datasets: [
                        {
                            indexAxis: "y",
                            label: "Kosten pro Monat",
                            data: items.map((item: Vertrag) => item.kosten / item.abrechnungsperiode),
                            backgroundColor: items.map(() =>
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
            <nidoca-dashboard>
                <nidoca-text-h1 style="padding: var(--space-2);width: 100%;">Dashboard</nidoca-text-h1>

                <nidoca-dashboard-box-25>
                    <nidoca-card></nidoca-card>
                </nidoca-dashboard-box-25>
                <nidoca-dashboard-box-25>
                    <nidoca-card></nidoca-card>
                </nidoca-dashboard-box-25>
                <nidoca-dashboard-box-25>
                    <nidoca-card></nidoca-card>
                </nidoca-dashboard-box-25>
                <nidoca-dashboard-box-25>
                    <nidoca-card></nidoca-card>
                </nidoca-dashboard-box-25>


                <nidoca-dashboard-box-50>
                    <nidoca-card>
                        <nidoca-box>
                            <nidoca-text-h2>Kostenverteilung pro Monat in Euro</nidoca-text-h2>
                            <nidoca-chart-js-wrapper style="height:350px;"
                                                     .options="${this.options}"></nidoca-chart-js-wrapper>
                        </nidoca-box>
                    </nidoca-card>
                </nidoca-dashboard-box-50>

                <nidoca-dashboard-box-50>
                    <nidoca-card>
                        <nidoca-box>
                            <nidoca-text-h2>Kostenverteilung pro Kategorie</nidoca-text-h2>
                            <nidoca-chart-js-wrapper .options="${this.options2}"></nidoca-chart-js-wrapper>
                        </nidoca-box>
                    </nidoca-card>
                </nidoca-dashboard-box-50>

                <nidoca-dashboard-box-100>
                    <nidoca-card>
                        <nidoca-box>
                            <nidoca-text-h2>Nächste Aufgaben</nidoca-text-h2>

                            <nidoca-table theme="surface" .headers="${["Titel", "Ablaufdatum"]}"
                                          .rows="${this.aufgaben}"></nidoca-table>
                        </nidoca-box>
                    </nidoca-card>
                </nidoca-dashboard-box-100>
            </nidoca-dashboard>
        `;
    }
}
