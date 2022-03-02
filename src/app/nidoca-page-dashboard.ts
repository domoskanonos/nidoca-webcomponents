import {css, html, LitElement, TemplateResult} from "lit";
import {customElement, property} from "lit/decorators.js";
import {ChartConfiguration} from "chart.js";
import {ChannelsEnum} from "./service/app-controller";
import {NidocaStore, NidocaStoreListener} from "./service/nidoca-store";
import {DashboardController} from "./service/dashboard-controller";
import {NidocaRouter} from "@domoskanonos/nidoca-router";

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
                    <nidoca-dashboard-card title="Aufgaben" clickable
                                           @nidoca-event-dashboard-card-clicked="${() => NidocaRouter.getUniqueInstance().navigate("aufgabe")}">
                        <nidoca-text-h1 style="text-align: center;color:var(--app-color-error-background);">
                            ${this.abgelaufeneAufgaben}
                        </nidoca-text-h1>
                        <nidoca-text style="text-align: center;color:var(--app-color-error-background);">
                            abgelaufen
                        </nidoca-text>
                    </nidoca-dashboard-card>
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
                    <nidoca-dashboard-card title="Kostenverteilung pro Monat in Euro">
                        <nidoca-chart-js-wrapper style="height:350px;"
                                                 .options="${this.options}"></nidoca-chart-js-wrapper>
                    </nidoca-dashboard-card>
                </nidoca-dashboard-box-50>

                <nidoca-dashboard-box-50>
                    <nidoca-dashboard-card title="Kostenverteilung pro Kategorie">
                        <nidoca-chart-js-wrapper .options="${this.options2}"></nidoca-chart-js-wrapper>
                    </nidoca-dashboard-card>
                </nidoca-dashboard-box-50>

                <nidoca-dashboard-box-100>
                    <nidoca-dashboard-card title="Nächste Aufgabe">
                        ${this.aufgaben ? html`
                            <nidoca-table theme="surface" .headers="${["Titel", "Ablaufdatum"]}"
                                          .rows="${this.aufgaben}"></nidoca-table>` : html``}
                    </nidoca-dashboard-card>
                </nidoca-dashboard-box-100>
            </nidoca-dashboard>
        `;
    }

}
