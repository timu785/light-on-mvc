export class Model {
    #size;
    #lampStateArray;

    constructor(){
        this.#size = Math.floor(Math.random() * (16 - 2 + 1)) + 2;
        console.log(this.#size);
        this.#lampStateArray = new Array(this.#size * this.#size).fill(false);

        for (let i = 0; i < this.#lampStateArray.length; i++) {
            this.#lampStateArray[i] = Math.random() < 0.5 ? false : true;
        }
    }

    getLampStateArray(){
        return this.#lampStateArray;
    }

    setXthLampStateWithNeighbors(index){
        let n = Math.sqrt(this.#lampStateArray.length);
        console.log(n);

        // ha a lámpa a bal felső sarok, vagyis index = 0
        if(index == 0)
        {
            this.#lampStateArray[index] = !this.#lampStateArray[index];
            this.#lampStateArray[index + 1] = !this.#lampStateArray[index + 1];
            this.#lampStateArray[index + n] = !this.#lampStateArray[index + n];
        }
        // ha a lámpa a jobb felső sarok, vagyis index = n-1
        else if(index == n-1){
            this.#lampStateArray[index] = !this.#lampStateArray[index];
            this.#lampStateArray[index - 1] = !this.#lampStateArray[index - 1];
            this.#lampStateArray[index + n] = !this.#lampStateArray[index + n];
        }
        // ha a lámpa a bal alsó sarok, vagyis index = n(n-1)
        else if(index == n*(n-1)){
            this.#lampStateArray[index] = !this.#lampStateArray[index];
            this.#lampStateArray[index + 1] = !this.#lampStateArray[index + 1];
            this.#lampStateArray[index - n] = !this.#lampStateArray[index - n];
        }
        // ha a lámpa a jobb alsó sarok, vagyis index = n*n-1
        else if(index == n*n-1){
            this.#lampStateArray[index] = !this.#lampStateArray[index];
            this.#lampStateArray[index - 1] = !this.#lampStateArray[index - 1];
            this.#lampStateArray[index - n] = !this.#lampStateArray[index - n];
        }

        // ha a lámpa a felső élen van, vagyis index = 1, 2, 3... n-2
        else if(1 <= index && index <= n-2){
            this.#lampStateArray[index] = !this.#lampStateArray[index];
            this.#lampStateArray[index - 1] = !this.#lampStateArray[index - 1];
            this.#lampStateArray[index + 1] = !this.#lampStateArray[index + 1];
            this.#lampStateArray[index + n] = !this.#lampStateArray[index + n];
        }
        // ha a lámpa az alsó élen van, vagyis index = (n*n)-(n-1), (n*n)-(n-2), (n*n)-(n-3)... (n*n)-2
        else if((n*n)-(n-1) <= index && index <= (n*n)-2){
            this.#lampStateArray[index] = !this.#lampStateArray[index];
            this.#lampStateArray[index - 1] = !this.#lampStateArray[index - 1];
            this.#lampStateArray[index + 1] = !this.#lampStateArray[index + 1];
            this.#lampStateArray[index - n] = !this.#lampStateArray[index - n];
        }
        // ha a lámpa a bal élen van, vagyis index osztható n-el és  n <= index <= n*n-2n
        else if(index % n == 0 && n <= index && index <= (n*n)-(2*n)){
            this.#lampStateArray[index] = !this.#lampStateArray[index];
            this.#lampStateArray[index + 1] = !this.#lampStateArray[index + 1];
            this.#lampStateArray[index - n] = !this.#lampStateArray[index - n];
            this.#lampStateArray[index + n] = !this.#lampStateArray[index + n];
        }
        // ha a lámpa a jobb élen van, vagyis index-(n-1) osztható n-el és  2*n-1 <= index <= ((n-1)*n)-1
        else if((index-(n-1)) % n == 0 && 2*n-1 <= index && index <= ((n-1)*n)-1){
            this.#lampStateArray[index] = !this.#lampStateArray[index];
            this.#lampStateArray[index - 1] = !this.#lampStateArray[index - 1];
            this.#lampStateArray[index - n] = !this.#lampStateArray[index - n];
            this.#lampStateArray[index + n] = !this.#lampStateArray[index + n];
        }

        // különben valahol középen van
        else{
            this.#lampStateArray[index] = !this.#lampStateArray[index];
            this.#lampStateArray[index - 1] = !this.#lampStateArray[index - 1];
            this.#lampStateArray[index + 1] = !this.#lampStateArray[index + 1];
            this.#lampStateArray[index - n] = !this.#lampStateArray[index - n];
            this.#lampStateArray[index + n] = !this.#lampStateArray[index + n];
        }
    }
}