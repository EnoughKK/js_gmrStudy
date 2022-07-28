class Counter {
    #value;
    constructor(StartValue) {
        if(isNaN(StartValue) || StartValue < 0){
            this.#value = 0;
        } else {
            this.#value = StartValue;
        }
    }

    get value() {
        return this.#value;
    }

    increment = () => {
        this.#value++;
    }
}

const counter = new Counter(0);
counter.increment();
counter.increment();
console.log(counter.value);