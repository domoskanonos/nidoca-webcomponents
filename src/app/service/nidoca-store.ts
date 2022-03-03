export interface NidocaStoreListener {
    channelUpdated(channel: string, newItem: any): void;
}

export class NidocaStore {

    private static _listeners: NidocaStoreListener[] = [];

    //private static _store: Map<string, any> = new Map<string, any>();

    private constructor() {
    }

    public static addListener(listener: NidocaStoreListener): void {
        console.log(`add nidoca store listener`);
        this._listeners.push(listener);
    }

    public static removeListener(listener: NidocaStoreListener) {
        this._listeners = this._listeners.filter((compareListener: NidocaStoreListener) => {
            return !Object.is(listener, compareListener);
        });
    }

    public static updateItem(channel: string, item: any) {
        sessionStorage.setItem(channel, JSON.stringify(item));
        if (channel) {
            NidocaStore._listeners.forEach((listener: NidocaStoreListener) => {
                listener.channelUpdated(channel, item);
            });
        }
    }

    static getItem(key: string): any | undefined {
        let item = sessionStorage.getItem(key);
        return item ? NidocaStore.parse(item) : undefined;
    }

    public static parse(json: string): any {
        const regexISO = /(\d{4}-\d{2}-\d{2})[A-Z]+(\d{2}:\d{2}:\d{2}).([0-9+-:]+)/;
        const regexJavaLocalDate = /(\d{4}-\d{2}-\d{2})/;
        const regexs: any[] = [regexISO, regexJavaLocalDate];
        return JSON.parse(json, function (_key, value) {
            if (typeof value === "string") {
                for (let i = 0; i < regexs.length; i++) {
                    const regex = regexs[i];
                    const isoMatched = regex.exec(value);
                    if (isoMatched) {
                        value = new Date(value);
                        break;
                    }
                }
            }
            return value;
        });
    }
}