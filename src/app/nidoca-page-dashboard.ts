import {css, html, LitElement, TemplateResult} from "lit";
import {customElement, property} from "lit/decorators.js";
import {ChartConfiguration} from "chart.js";
import {ChannelsEnum} from "./service/app-controller";
import {NidocaStore, NidocaStoreListener} from "./service/nidoca-store";
import {DashboardController} from "./service/dashboard-controller";

@customElement("nidoca-page-dashboard")
export class NidocaPageDashboard extends LitElement implements NidocaStoreListener {
    static styles = css``;

    @property()
    options: ChartConfiguration | undefined = DashboardController.alleKostenpflichtigeVertraegeChart();

    @property()
    options2: ChartConfiguration | undefined = DashboardController.getVertraegeKategorieChartConfiguration();

    @property()
    aufgaben: any[] | undefined = DashboardController.getAufgaben();

    @property()
    abgelaufeneAufgaben: number | undefined = DashboardController.getAnzahlAbgelaufeneAufgaben();

    constructor() {
        super();
        NidocaStore.addListener(this);
    }

    channelUpdated(channel: string, _item: any): void {
        console.log(`receive item for channel: ${channel}.`);
        switch (<ChannelsEnum>channel) {
            case ChannelsEnum.alleVertraege:
                this.options = DashboardController.alleKostenpflichtigeVertraegeChart();
                break;
            case ChannelsEnum.alleVertragKategorie:
                this.options2 = DashboardController.getVertraegeKategorieChartConfiguration();
                break;
            case ChannelsEnum.alleAufgaben:
                this.aufgaben = DashboardController.getAufgaben();
                break;
            case ChannelsEnum.abgelaufeneAufgaben:
                this.abgelaufeneAufgaben = DashboardController.getAnzahlAbgelaufeneAufgaben();
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
                    <nidoca-card>
                        <nidoca-text-h1>${this.abgelaufeneAufgaben}</nidoca-text-h1>
                    </nidoca-card>
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
                            <nidoca-text-h4>Kostenverteilung pro Monat in Euro</nidoca-text-h4>
                            <nidoca-chart-js-wrapper style="height:350px;"
                                                     .options="${this.options}"></nidoca-chart-js-wrapper>
                        </nidoca-box>
                    </nidoca-card>
                </nidoca-dashboard-box-50>

                <nidoca-dashboard-box-50>
                    <nidoca-card>
                        <nidoca-box>
                            <nidoca-text-h4>Kostenverteilung pro Kategorie</nidoca-text-h4>
                            <nidoca-chart-js-wrapper .options="${this.options2}"></nidoca-chart-js-wrapper>
                        </nidoca-box>
                    </nidoca-card>
                </nidoca-dashboard-box-50>

                <nidoca-dashboard-box-100>
                    <nidoca-card>
                        <nidoca-box>
                            <nidoca-text-h4>Nächste Aufgaben</nidoca-text-h4>
                            ${this.aufgaben ? html`
                                <nidoca-table theme="surface" .headers="${["Titel", "Ablaufdatum"]}"
                                              .rows="${this.aufgaben}"></nidoca-table>` : html``}
                        </nidoca-box>
                    </nidoca-card>
                </nidoca-dashboard-box-100>
            </nidoca-dashboard>
        `;
    }

}
