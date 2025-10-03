export class LampView {
    #state;
    #parentElement;
    #index;
    #thisElement;

    constructor(state, parentElement, index){
        this.#state = state;
        this.#parentElement = parentElement;
        this.#index = index;
        this.view();
        this.#thisElement = this.#parentElement.children[this.#parentElement.children.length - 1]
        this.addingEventListener();
    }

    view(){
        let element = document.createElement("div");
        if(this.#state){
            element.className = "lamp-on";
        }else{
            element.className = "lamp-off";
        }

        this.#parentElement.appendChild(element);
    }

    addingEventListener(){
        this.#thisElement.addEventListener("click", ()=> {
            let myEvent = new CustomEvent("myevent", {
                detail: this.#index
            });
            document.dispatchEvent(myEvent);
        });
    }
}