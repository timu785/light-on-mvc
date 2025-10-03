import { View } from "../view/View.js";
import { Model } from "../model/Model.js";

export class Controller {
    constructor(){
        let model = new Model();
        let lampBoardElement = document.getElementById("lamp-board");
        new View(model.getLampStateArray(), lampBoardElement);

        document.addEventListener("myevent", (event) => {
            model.setXthLampState(event.detail);
            new View(model.getLampStateArray(), lampBoardElement);
        });
    }
}