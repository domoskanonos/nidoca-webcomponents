import {css, html, LitElement, PropertyValues, TemplateResult} from "lit";
import {customElement, property} from "lit/decorators.js";
import {Aufgabe, Vertrag} from "./model/vertrag";
import {ChartConfiguration} from "chart.js";
import {NidocaDateHelper} from "@domoskanonos/nidoca-date-helper";
import {AppController, ChannelsEnum} from "./service/app-controller";
import {NidocaStore, NidocaStoreListener} from "./service/nidoca-store";

@customElement("nidoca-page-dashboard")
export class NidocaPageDashboard extends LitElement implements NidocaStoreListener {
    static styles = css``;

    @property()
    options: ChartConfiguration | undefined;

    @property()
    options2: ChartConfiguration | undefined;

    @property()
    aufgaben: any[] = [[]];

    constructor() {
        super();
        NidocaStore.addStoreListener(this);
    }

    protected firstUpdated(_changedProperties: PropertyValues) {
        super.firstUpdated(_changedProperties);
    }

    newItem(channel: string, item: any): void {
        console.log(`receive item for channel: ${channel},item: ${item}`);
        switch (<ChannelsEnum>channel) {
            case ChannelsEnum.alleVertragKategorie:
                AppController.getVertraegeKategorieChartConfiguration(item).then((chartConfiguration: ChartConfiguration) => {
                    this.options2 = chartConfiguration;
                });
                break;
            case ChannelsEnum.alleVertraege:
                //TODO:
                AppController.alleKostenpflichtigeVertraegeChart(AppController.alleKostenpflichtigeVertraege(<Vertrag[]>item)).then((chartConfiguration: ChartConfiguration) => {
                    this.options = chartConfiguration;
                });
                break;
            case ChannelsEnum.alleAufgaben:
                const nidocaDateHelper: NidocaDateHelper = new NidocaDateHelper();
                const rows: any = [[]];
                item.forEach((aufgabe: Aufgabe) => {
                    rows.push([aufgabe.titel, nidocaDateHelper.formatDate(aufgabe.ablaufdatum, "dd.MM.yyyy")]);
                });
                this.aufgaben = rows;
                break;
        }
    }

    render()
        :
        TemplateResult {
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
