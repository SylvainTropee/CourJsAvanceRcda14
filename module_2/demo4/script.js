class Flower {
    #name
    _color
    variety
    constructor(name, color, variety = "Plante") {
        this.#name = name
        this.variety = variety
        this._color = color;
    }

    description(){
        return `${this.#name} est de couleur ${this.color}`;
    }

    get name() {
        return this.#name;
    }

    set name(value) {
        this.#name = value;
    }

    get color() {
        return this._color;
    }

    set color(value) {
        this._color = value;
    }
}

const flower = new Flower("Tulipe", "Beige", "Tulipe de neige")
const flower2 = new Flower("Marguerite")

flower.name = "Acacia"
flower.color = 'klgflgkjdlgj'
flower2.color = "fushia"
console.log(flower.color)
console.log(flower2.description())

let tab1 = [1,2,3,4]
let tab2 = [5,6,7,8]

tab1.push(...tab2)

console.log(tab1)

function test(...args){
    console.log(args)
}

test(12,13,14,"coucou")


