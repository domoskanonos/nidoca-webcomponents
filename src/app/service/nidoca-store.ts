export interface NidocaStoreListener {
    newItem(channel: string, item: any): void;
}

export class NidocaStore {

    private static _listeners: NidocaStoreListener[] = [];

    private static _store: Map<string, any> = new Map<string, any>();

    private constructor() {
    }

    public static addStoreListener(listener: NidocaStoreListener): void {
        console.log(`add nidoca store listener`);
        this._listeners.push(listener);
    }

    public static removeStoreListener(listener: NidocaStoreListener) {
        this._listeners = this._listeners.filter((compareListener: NidocaStoreListener) => {
            return !Object.is(listener, compareListener);
        });
    }

    public static updateItem(channel: string, item: any) {
        NidocaStore._store.set(channel, item);
        if (channel) {
            NidocaStore._listeners.forEach((listener: NidocaStoreListener) => {
                listener.newItem(channel, item);
            });
        }
    }
}