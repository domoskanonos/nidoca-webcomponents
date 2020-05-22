import { LitElement, TemplateResult } from 'lit-element';
export declare class AppData {
    name?: string;
    description?: string;
}
export declare abstract class NidocaAbstractApp extends LitElement {
    /**
     * doing stuff before first rendering, f.e. load data from server
     */
    preRender(): Promise<void>;
    constructor();
    abstract getAppTitle(): string;
    render(): TemplateResult;
    firstUpdated(): void;
    abstract renderPage(): TemplateResult;
    /**
     *
     * Here you can register event listener on app root component,
     * so you can catch all underlying events.
     *
     */
    protected registerEventListener(): void;
    getDefaultInputData(): AppData;
    getOutputData(): undefined;
    protected inputDataChanged(): void;
}
