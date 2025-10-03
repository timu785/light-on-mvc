export class Model {
    #lampStateArray = new Array(16).fill(false);

    constructor(){
        for (let i = 0; i < this.#lampStateArray.length; i++) {
            this.#lampStateArray[i] = Math.random() < 0.5 ? false : true;
        }
    }

    getLampStateArray(){
        return this.#lampStateArray;
    }

    setXthLampState(index){
        this.#lampStateArray[index] = !this.#lampStateArray[index];
    }

    setXthLampStateWithNeighbors(index){
        let n = this.#lampStateArray.length;

        // ha a lámpa a bal felső sarok, vagyis index = 0
        if(index == 0)
        {
            this.#lampStateArray[index] = !this.#lampStateArray[index];
            this.#lampStateArray[index + 1] = !this.#lampStateArray[index + 1];
            this.#lampStateArray[index + n] = !this.#lampStateArray[index + n];
        }
        // ha a lámpa a jobb felső sarok, vagyis #id = n-1
        else if(eredeti == n-1){
            this.#lampaTomb[eredeti-1].kapcsol();
            this.#lampaTomb[eredeti+n].kapcsol();
        }
        // ha a lámpa a bal alsó sarok, vagyis #id = n(n-1)
        else if(eredeti == n*(n-1)){
            this.#lampaTomb[eredeti+1].kapcsol();
            this.#lampaTomb[eredeti-n].kapcsol();
        }
        // ha a lámpa a jobb alsó sarok, vagyis #id = n*n-1
        else if(eredeti == n*n-1){
            this.#lampaTomb[eredeti-1].kapcsol();
            this.#lampaTomb[eredeti-n].kapcsol();
        }

        // ha a lámpa a felső élen van, vagyis #id = 1, 2, 3... n-2
        else if(1 <= eredeti && eredeti <= n-2){
            this.#lampaTomb[eredeti-1].kapcsol();
            this.#lampaTomb[eredeti+1].kapcsol();
            this.#lampaTomb[eredeti+n].kapcsol();
        }
        // ha a lámpa az alsó élen van, vagyis #id = (n*n)-(n-1), (n*n)-(n-2), (n*n)-(n-3)... (n*n)-2
        else if((n*n)-(n-1) <= eredeti && eredeti <= (n*n)-2){
            this.#lampaTomb[eredeti-1].kapcsol();
            this.#lampaTomb[eredeti+1].kapcsol();
            this.#lampaTomb[eredeti-n].kapcsol();
        }
        // ha a lámpa a bal élen van, vagyis #id osztható n-el és  n <= #id <= n*n-2n
        else if(eredeti % n == 0 && n <= eredeti && eredeti <= (n*n)-(2*n)){
            this.#lampaTomb[eredeti+1].kapcsol();
            this.#lampaTomb[eredeti-n].kapcsol();
            this.#lampaTomb[eredeti+n].kapcsol();
        }
        // ha a lámpa a jobb élen van, vagyis #id-(n-1) osztható n-el és  2*n-1 <= #id <= ((n-1)*n)-1
        else if((eredeti-(n-1)) % n == 0 && 2*n-1 <= eredeti && eredeti <= ((n-1)*n)-1){
            this.#lampaTomb[eredeti-1].kapcsol();
            this.#lampaTomb[eredeti-n].kapcsol();
            this.#lampaTomb[eredeti+n].kapcsol();
        }

        // különben valahol középen van
        else{
            this.#lampaTomb[eredeti-1].kapcsol();
            this.#lampaTomb[eredeti+1].kapcsol();
            this.#lampaTomb[eredeti-n].kapcsol();
            this.#lampaTomb[eredeti+n].kapcsol();
        }
    }
}