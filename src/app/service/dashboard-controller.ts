import {ChannelsEnum} from "./app-controller";
import {NidocaStore} from "./nidoca-store";
import {VertragKategorie, Vertrag} from "../model/vertrag";
import {NidocaDateHelper} from "@domoskanonos/nidoca-date-helper";
import {ChartConfiguration} from "chart.js";
import { Aufgabe } from "../model/aufgabe";

export class DashboardController {


    static getKostenProMonat(): number {
        const alleKostenpflichtigeVertraege = DashboardController.alleKostenpflichtigeVertraege();
        let kosten: number = 0;
        if (alleKostenpflichtigeVertraege)
            alleKostenpflichtigeVertraege.forEach((item: Vertrag) => {
                kosten += item.kosten / item.abrechnungsperiode;
            });
        return kosten;
    }

    static alleKostenpflichtigeVertraege(): Vertrag[] | undefined {
        const alleVertraege = NidocaStore.getItem(ChannelsEnum.alleVertraege);
        if (alleVertraege == undefined) {
            return undefined;
        }
        return alleVertraege
            .filter((item: any) => item.kosten > 0)
            .sort((item: any, compareItem: any) =>
                item.kosten / item.abrechnungsperiode > compareItem.kosten / compareItem.abrechnungsperiode ? -1 : 1
            );
    }

    static getVertraegeVertragsendeErreichtUndNichtGekuendigt(): any[] {
        const alleVertraege = NidocaStore.getItem(ChannelsEnum.alleVertraege);
        if (alleVertraege == undefined) {
            return [];
        }
        return alleVertraege
            .filter((item: any) => item.aktiv && !item.gekuendigt && item.vertragsende && (item.vertragsende.getTime() - item.kuendigungsfrist * 1000 * 60 * 60 * 24) < new Date().getTime());
    }

    static getAnzahlVertragsendeErreichtUndNichtGekuendigt(): number | undefined {
        return this.getVertraegeVertragsendeErreichtUndNichtGekuendigt().length;
    }

    static alleKostenpflichtigeVertraegeChart(): ChartConfiguration | undefined {
        const vertraege: any[] | undefined = DashboardController.alleKostenpflichtigeVertraege();
        if (vertraege == undefined)
            return undefined;
        const chartConfiguration: ChartConfiguration = {
            type: "bar",
            data: {
                labels: vertraege.map((item: any) => item.name),
                datasets: [
                    {
                        indexAxis: "y",
                        label: "Kosten pro Monat",
                        data: vertraege.map((item: any) => item.kosten / item.abrechnungsperiode),
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
        const alleVertraegeKategorie = NidocaStore.getItem(ChannelsEnum.alleVertragKategorie);
        if (alleVertraegeKategorie == undefined) {
            return undefined;
        }

        const chartConfiguration: ChartConfiguration = {
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

    public static getAufgaben(): Aufgabe[] | undefined {
        const aufgaben = NidocaStore.getItem(ChannelsEnum.alleAufgaben);
        return aufgaben ? aufgaben.map((aufgabe: Aufgabe) => {
            return [aufgabe.titel, new NidocaDateHelper().formatDate(aufgabe.ablaufdatum, "dd.MM.yyyy")];
        }) : undefined;
    }

    static getAbgelaufeneAufgaben(): Aufgabe[] {
        const item = NidocaStore.getItem(ChannelsEnum.alleAufgaben);
        return item ? item.filter((item: Aufgabe) => item.ablaufdatum.getTime() <= new Date().getTime()) : [];
    }


    static getAnzahlAbgelaufeneAufgaben(): number | undefined {
        return this.getAbgelaufeneAufgaben().length;
    }

    static getOffeneAufgaben(): Aufgabe[] {
        const item = NidocaStore.getItem(ChannelsEnum.alleAufgaben);
        return item ? item.filter((item: Aufgabe) => !item.erledigt) : [];
    }

    static getAnzahlOffeneAufgaben(): number | undefined {
        return this.getOffeneAufgaben().length;
    }

}