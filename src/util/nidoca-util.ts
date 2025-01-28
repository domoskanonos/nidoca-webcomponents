export class NidocaUtil {
    /**
     * Großschreiben des ersten Buchstabens einer Zeichenkette.
     * @param value - Die Eingabezeichenkette
     * @returns Die Zeichenkette mit einem großgeschriebenen ersten Buchstaben
     */
    static capitalizeFirstLetter(value: string): string {
        if (!value) return value; // Rückgabe, falls der Wert leer oder null ist
        return value.charAt(0).toUpperCase() + value.slice(1);
    }

}
