import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { NidocaGenericEdit } from './../../abstract/generic-edit';
import { Person } from '../../nidoca-webcomponents';

@customElement('nidoca-edit')
export class NidocaEdit extends NidocaGenericEdit<Person> {

    getIdentifier() {
        return "id";
    }

    initObject(): Person {
        return <Person>{ name: "", email: "", phone: "", energy: 0, image: "" };
    }


    //Weiter machen hier...

    getItemById(identifier: any): Promise<Person> {
        throw new Error('Method not implemented.');
    }
    executeSave(item: Person): Promise<Person> {
        throw new Error('Method not implemented.');
    }
    executeUpdate(identifier: any, item: Person): Promise<Person> {
        throw new Error('Method not implemented.');
    }
    executeDelete(identifier: any): Promise<void> {
        throw new Error('Method not implemented.');
    }
    itemToProperties(item: Person): void {
        throw new Error('Method not implemented.');
    }


    static styles = css`
        :host {
            display: block;
            padding: 16px;
            border: 1px solid #ccc;
        }
        input {
            width: 100%;
            padding: 8px;
            box-sizing: border-box;
        }
    `;

    private _onInput(event: Event) {
        const input = event.target as HTMLInputElement;
    }
}
