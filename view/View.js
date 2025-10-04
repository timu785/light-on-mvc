import { LampView } from "./LampView.js";

export class View {
    #lampStateArray;
    #parentElement;

    constructor(lampStateArray, parentElement){
        this.#lampStateArray = lampStateArray;
        this.#parentElement = parentElement;
        this.view();
    }

    view(){
        this.#parentElement.innerHTML = "";
        for (let i = 0; i < this.#lampStateArray.length; i++) {
            new LampView(this.#lampStateArray[i], this.#parentElement, i);
        }

        // eltárolom a tábla méretét a gyerekeinek száma alapján
        let size = Math.ceil(Math.sqrt(this.#parentElement.children.length));
    
        // beállítom a táblaelem CSS grid-jét a méretnek megfelelően
        this.#parentElement.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        this.#parentElement.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    }
}
