import {NidocaPostgrestClient} from "./nidoca-postgrest-client";
import {Vertrag, VertragKategorie} from "../model/vertrag";
import {ChartConfiguration} from "chart.js";
import {NidocaStore} from "./nidoca-store";

export enum ChannelsEnum {
    alleVertraege = 'alleVertraege',
    alleAufgaben = 'alleAufgaben',
    alleVertragKategorie = 'alleVertragKategorie',
}

export type ChannelsType = keyof typeof ChannelsEnum;

export class AppController {

    static async loadData(): Promise<void> {
        NidocaStore.updateItem("isLoggedIn", NidocaPostgrestClient.isLoggedIn());
        NidocaStore.updateItem(ChannelsEnum.alleVertraege, await NidocaPostgrestClient.search("/vertrag", ""));
        NidocaStore.updateItem(ChannelsEnum.alleAufgaben, await NidocaPostgrestClient.search("/aufgabe", "?offset=0&limit=100&order=ablaufdatum.asc"));
        NidocaStore.updateItem(ChannelsEnum.alleVertragKategorie, await NidocaPostgrestClient.search("/vertrag_kategorie", ""));
    }

    /**
     * muss in die DB
     */
    static alleKostenpflichtigeVertraege(alleVertraege: Vertrag[]): Vertrag[] {
        const kostenpflichtigeVertraege = alleVertraege
            .filter((item: Vertrag) => item.kosten > 0)
            .sort((item: Vertrag, compareItem: Vertrag) =>
                item.kosten / item.abrechnungsperiode > compareItem.kosten / compareItem.abrechnungsperiode ? -1 : 1
            );
        return kostenpflichtigeVertraege;
    }

    static async alleKostenpflichtigeVertraegeChart(vertraege: Vertrag[]): Promise<ChartConfiguration> {
        let chartConfiguration: ChartConfiguration = {
            type: "bar",
            data: {
                labels: vertraege.map((item: Vertrag) => item.name),
                datasets: [
                    {
                        indexAxis: "y",
                        label: "Kosten pro Monat",
                        data: vertraege.map((item: Vertrag) => item.kosten / item.abrechnungsperiode),
                        backgroundColor: vertraege.map(() =>
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
        return chartConfiguration;
    }

    static async getVertraegeKategorieChartConfiguration(alleVertraegeKategorie: VertragKategorie[]): Promise<ChartConfiguration> {
        let chartConfiguration: ChartConfiguration = {
            type: "pie",
            data: {
                labels: alleVertraegeKategorie.map((item: VertragKategorie) => item.kategorie),
                datasets: [
                    {
                        label: "My First Dataset",
                        data: alleVertraegeKategorie.map((item: VertragKategorie) => item.kosten),
                        backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(255, 205, 86)"],
                        hoverOffset: 4,
                    },
                ],
            },
        };
        return chartConfiguration;
    }


}