import {ChannelsEnum} from "./app-controller";
import {NidocaStore} from "./nidoca-store";
import {Aufgabe, Vertrag, VertragKategorie} from "../model/vertrag";
import {NidocaDateHelper} from "@domoskanonos/nidoca-date-helper";
import {ChartConfiguration} from "chart.js";

export class DashboardController {

    public static getAufgaben() {
        let aufgaben = NidocaStore.getItem(ChannelsEnum.alleAufgaben);
        return aufgaben ? aufgaben.map((aufgabe: Aufgabe) => {
            return [aufgabe.titel, new NidocaDateHelper().formatDate(aufgabe.ablaufdatum, "dd.MM.yyyy")]
        }) : undefined;
    }

    /**
     * muss in die DB
     */
    static alleKostenpflichtigeVertraege(): Vertrag[] | undefined {
        let alleVertraege = NidocaStore.getItem(ChannelsEnum.alleVertraege);
        if (alleVertraege == undefined) {
            return undefined;
        }
        const kostenpflichtigeVertraege = alleVertraege
            .filter((item: Vertrag) => item.kosten > 0)
            .sort((item: Vertrag, compareItem: Vertrag) =>
                item.kosten / item.abrechnungsperiode > compareItem.kosten / compareItem.abrechnungsperiode ? -1 : 1
            );
        return kostenpflichtigeVertraege;
    }

    static alleKostenpflichtigeVertraegeChart(): ChartConfiguration | undefined {
        let vertraege: Vertrag[] | undefined = DashboardController.alleKostenpflichtigeVertraege();
        if (vertraege == undefined)
            return undefined;
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

    static getVertraegeKategorieChartConfiguration(): ChartConfiguration | undefined {
        let alleVertraegeKategorie = NidocaStore.getItem(ChannelsEnum.alleVertragKategorie);
        if (alleVertraegeKategorie == undefined) {
            return undefined;
        }

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