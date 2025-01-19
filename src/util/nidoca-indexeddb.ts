
export class GenericIndexedDB<T> {
    private dbName: string;
    private storeName: string;
    private keyField: keyof T;

    // Achte darauf, die Version zu erhöhen, wenn du neue Stores hinzufügst!
    private static readonly DB_VERSION = 2;

    constructor(dbName: string, storeName: string, keyField: keyof T) {
        this.dbName = dbName;
        this.storeName = storeName;
        this.keyField = keyField;
    }

    /**
     * Öffnet (und erstellt ggf.) die Datenbank. 
     * Im onupgradeneeded-Event werden alle relevanten Stores erstellt.
     */
    async openDatabase(): Promise<IDBDatabase> {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(this.dbName, GenericIndexedDB.DB_VERSION);

            request.onupgradeneeded = (event) => {
                const db = request.result;
                console.log(`onupgradeneeded triggered. Aktuelle Version: ${db.version}`);
                if (!db.objectStoreNames.contains(this.storeName)) {
                    db.createObjectStore(this.storeName, { keyPath: "id" });
                    console.log("Object Store '" + this.storeName + "' erstellt.");
                }
            };

            request.onsuccess = () => {
                console.log(`IndexedDB '${this.dbName}' (Version ${request.result.version}) geöffnet.`);
                resolve(request.result);
            };
            request.onerror = () => {
                console.error("Fehler beim Öffnen der Datenbank:", request.error);
                reject(request.error);
            };
        });
    }

    async add(item: T): Promise<void> {
        const db = await this.openDatabase();
        return new Promise((resolve, reject) => {
            const transaction = db.transaction(this.storeName, "readwrite");
            const store = transaction.objectStore(this.storeName);
            const request = store.add(item);

            request.onsuccess = () => resolve();
            request.onerror = () => reject(request.error);

            transaction.oncomplete = () => db.close();
        });
    }

    async update(item: T): Promise<void> {
        const db = await this.openDatabase();
        return new Promise((resolve, reject) => {
            const transaction = db.transaction(this.storeName, "readwrite");
            const store = transaction.objectStore(this.storeName);
            const request = store.put(item);

            request.onsuccess = () => resolve();
            request.onerror = () => reject(request.error);

            transaction.oncomplete = () => db.close();
        });
    }

    async delete(key: IDBValidKey): Promise<void> {
        const db = await this.openDatabase();
        return new Promise((resolve, reject) => {
            const transaction = db.transaction(this.storeName, "readwrite");
            const store = transaction.objectStore(this.storeName);
            const request = store.delete(key);

            request.onsuccess = () => resolve();
            request.onerror = () => reject(request.error);

            transaction.oncomplete = () => db.close();
        });
    }

    async get(key: IDBValidKey): Promise<T | undefined> {
        const db = await this.openDatabase();
        return new Promise((resolve, reject) => {
            const transaction = db.transaction(this.storeName, "readonly");
            const store = transaction.objectStore(this.storeName);
            const request = store.get(key);

            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);

            transaction.oncomplete = () => db.close();
        });
    }

    async getAll(): Promise<T[]> {
        const db = await this.openDatabase();
        return new Promise((resolve, reject) => {
            const transaction = db.transaction(this.storeName, "readonly");
            const store = transaction.objectStore(this.storeName);
            const request = store.getAll();

            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);

            transaction.oncomplete = () => db.close();
        });
    }
}


/* ===============================
 *  TESTDATEN & EINFÜGUNG
 * =============================== */



export interface Karmatica {
    id: number | null;
    myself: Person;
    friends: Person[];
    goals: Goal[];
}

export interface Person {
    name: string;
    email: string | null;
    phone: string | null;
    energy: number;
    image: string | null;
}

export interface Action {
    description: string;
    time_min: number | null;
    time_max: number | null;
    energy: number;
    image: string | null;
}

export interface Routine {
    name: string;
    actions: Action[];
}

export interface Goal {
    title: string;
    description: string;
    image: string | null;
    actions: Action[];
    routines: Routine[];
}


(async () => {

    const karmaticaDB = new GenericIndexedDB<Karmatica>("AppDatabase", "Karmatica", "id");
    await karmaticaDB.openDatabase();

    // Testdaten
    const karmatica: Karmatica =
    {
        id: null,
        myself: {
            name: 'Dominik Bruhn',
            email: 'dominikbruhn@googlemail.com',
            phone: '015205248862',
            energy: 1.0,
            image: null,
        },
        friends: [
            { name: 'Nico Bruhn', email: null, phone: null, energy: 1.0, image: null },
            { name: 'Christoph Juretko', email: null, phone: null, energy: 0.6, image: null },
            { name: 'Tim Poloczek', email: null, phone: null, energy: 0.5, image: null },
            { name: 'Dennis Ratzer', email: null, phone: null, energy: 0.4, image: null },
            { name: 'Nicole Eckert', email: null, phone: null, energy: 0.4, image: null },
            { name: 'Stefan Harzke', email: null, phone: null, energy: 0.6, image: null },
            { name: 'Denis Ergashbaev', email: null, phone: null, energy: 0.6, image: null },
            { name: 'Bastian Ückermann', email: null, phone: null, energy: 0.2, image: null },
            { name: 'Daniela Meyer zu Ummeln', email: null, phone: null, energy: 0.0, image: null },
            { name: 'Mark Enger', email: null, phone: null, energy: 0.3, image: null },
            { name: 'Matthias Manasterni', email: null, phone: null, energy: 0.6, image: null },
            { name: 'Dejan Guberinic', email: null, phone: null, energy: 0.5, image: null },
            { name: 'Carina Bruhn', email: null, phone: null, energy: 0.0, image: null },
        ],
        goals: [
            {
                title: 'Intellektuelle Steigerung',
                description: 'Wachstum und Entwicklung der intellektuellen Fähigkeiten einer Person.',
                image: null,
                actions: [
                    { description: 'Neue Themen lernen', time_min: 15, time_max: 240, energy: 0.9, image: null },
                    { description: 'Ein Buch lesen', time_min: 15, time_max: 180, energy: 0.8, image: null },
                    { description: 'Objektive Nachrichten lesen', time_min: 15, time_max: 30, energy: 0.0, image: null },
                ],
                routines: [],
            },
            {
                title: 'Fit und gesund',
                description: 'Einen gesunden Lebensstil und körperliche Fitness aufrechterhalten.',
                image: null,
                actions: [
                    { description: 'Gesund einkaufen und essen', time_min: 30, time_max: null, energy: 1.0, image: null },
                    { description: 'Vitamin-D-Tablette im Winter einnehmen', time_min: 0, time_max: null, energy: 0.4, image: null },
                    { description: 'Schlafen', time_min: 480, time_max: 480, energy: 1.0, image: null },
                    { description: 'Koffein, Alkohol und Rauchen vermeiden', time_min: 0, time_max: null, energy: 0.8, image: null },
                    { description: 'Laufen', time_min: 120, time_max: 120, energy: 1.0, image: null },
                    { description: 'Gym', time_min: 120, time_max: 120, energy: 1.0, image: null },
                    { description: 'Fußball spielen', time_min: 90, time_max: 90, energy: 1.0, image: null },
                    { description: 'Schwimmen gehen', time_min: 120, time_max: 240, energy: 0.5, image: null },
                    { description: 'Fitness-Workout', time_min: 30, time_max: 30, energy: 0.9, image: null },
                    { description: 'Regelmäßige Gesundheitschecks', time_min: 60, time_max: 60, energy: 0.8, image: null },
                ],
                routines: [],
            },
            {
                title: 'Guter Papa',
                description: 'Ein unterstützender und präsenter Papa sein.',
                image: null,
                actions: [
                    { description: 'Lego spielen', time_min: 10, time_max: 120, energy: 0.9, image: null },
                    { description: 'Gesellschaftsspiele spielen', time_min: 30, time_max: 180, energy: 0.8, image: null },
                    { description: 'Ins Kino gehen', time_min: 120, time_max: 180, energy: 0.7, image: null },
                    { description: 'Einen gemütlichen Filmabend machen', time_min: 100, time_max: 180, energy: 0.2, image: null },
                ],
                routines: [],
            },
            {
                title: 'Glücklich sein',
                description: 'Langfristiges Glück und Zufriedenheit erreichen.',
                image: null,
                actions: [
                    { description: 'Einen gemütlichen Filmabend machen', time_min: 100, time_max: 180, energy: 0.2, image: null },
                    { description: 'Urlaub machen', time_min: 1440, time_max: 40320, energy: 1.0, image: null },
                    { description: 'Flohmarkt besuchen', time_min: 45, time_max: 120, energy: 0.6, image: null },
                    { description: 'Spazieren gehen', time_min: 30, time_max: 180, energy: 0.4, image: null },
                    { description: 'Massage bekommen', time_min: 80, time_max: 200, energy: 0.9, image: null },
                    { description: 'Computerspiele spielen', time_min: 20, time_max: 180, energy: 0.0, image: null },
                    { description: 'Ein Buch lesen', time_min: 15, time_max: 180, energy: 0.8, image: null },
                    { description: 'In die Sauna gehen zur Entspannung', time_min: 60, time_max: 120, energy: 0.9, image: null },
                    { description: 'Gute Musik hören', time_min: 0, time_max: null, energy: 0.8, image: null },
                    { description: 'Meditation', time_min: 10, time_max: 60, energy: 0.9, image: null },
                    { description: 'Boden wischen', time_min: 45, time_max: 45, energy: 0.7, image: null },
                    { description: 'Fitness-Workout', time_min: 30, time_max: 30, energy: 0.9, image: null },
                    { description: 'Kurzer Schlaf zur Wiederherstellung der Energie', time_min: 10, time_max: 30, energy: 0.8, image: null },
                    { description: 'Über Dinge nachdenken, für die man dankbar ist', time_min: 5, time_max: 20, energy: 0.9, image: null },
                    { description: 'Mit geliebten Menschen in Kontakt bleiben', time_min: 10, time_max: 120, energy: 0.8, image: null },
                ],
                routines: [],
            },
            {
                title: 'Resiliente Person',
                description: 'Eine resiliente und entspannte Person sein.',
                image: null,
                actions: [
                    { description: 'Einen gemütlichen Filmabend machen', time_min: 100, time_max: 180, energy: 0.2, image: null },
                    { description: 'Spazieren gehen', time_min: 30, time_max: 180, energy: 0.4, image: null },
                    { description: 'Massage bekommen', time_min: 80, time_max: 200, energy: 0.9, image: null },
                    { description: 'In die Sauna gehen zur Entspannung', time_min: 60, time_max: 120, energy: 0.9, image: null },
                    { description: 'Gute Musik hören', time_min: 0, time_max: null, energy: 0.8, image: null },
                    { description: 'Meditation', time_min: 10, time_max: 60, energy: 0.9, image: null },
                    { description: 'Kurzer Schlaf zur Wiederherstellung der Energie', time_min: 10, time_max: 30, energy: 0.8, image: null },
                    { description: 'Über Dinge nachdenken, für die man dankbar ist', time_min: 5, time_max: 20, energy: 0.9, image: null },
                    { description: 'Regelmäßige Gesundheitschecks', time_min: 60, time_max: 60, energy: 0.8, image: null },
                ],
                routines: [],
            },
            {
                title: 'Sicherheit',
                description: 'Ein gutes Gefühl von Sicherheit haben.',
                image: null,
                actions: [
                    { description: 'Vorräte und Krisenwerkzeuge einrichten', time_min: 0, time_max: 120, energy: 0.6, image: null },
                    { description: 'Finanzen kontinuierlich optimieren', time_min: 10, time_max: 60, energy: 0.2, image: null },
                    { description: 'In Vermögenswerte für Wachstum investieren', time_min: 10, time_max: 60, energy: 0.2, image: null },
                ],
                routines: [],
            },
            {
                title: 'Finanzielle Freiheit',
                description: 'Finanzielle Unabhängigkeit erreichen.',
                image: null,
                actions: [
                    { description: 'Minimalistisch leben. Konsum minimieren.', time_min: 0, time_max: null, energy: 0.7, image: null },
                    { description: 'Finanzen kontinuierlich optimieren', time_min: 10, time_max: 60, energy: 0.2, image: null },
                    { description: 'In Vermögenswerte für Wachstum investieren', time_min: 10, time_max: 60, energy: 0.2, image: null },
                ],
                routines: [],
            },
            {
                title: 'Für immer leben',
                description: 'In der Lage sein, für immer zu leben.',
                image: null,
                actions: [
                    { description: 'Gesund einkaufen und essen', time_min: 30, time_max: null, energy: 1.0, image: null },
                    { description: 'Schlafen', time_min: 480, time_max: 480, energy: 1.0, image: null },
                    { description: 'Koffein, Alkohol und Rauchen vermeiden', time_min: 0, time_max: null, energy: 0.8, image: null },
                    { description: 'In die Sauna gehen zur Entspannung', time_min: 60, time_max: 120, energy: 0.9, image: null },
                    { description: 'Meditation', time_min: 10, time_max: 60, energy: 0.9, image: null },
                    { description: 'Regelmäßige Gesundheitschecks', time_min: 60, time_max: 60, energy: 0.8, image: null },
                ],
                routines: [],
            },
        ],
    }
        ;

    karmaticaDB.add(karmatica);

    console.log("Karmatica erfolgreich in die IndexedDB eingefügt!");


})();
