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
    }
}
