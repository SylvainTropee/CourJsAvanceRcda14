class Bug {

    constructor(
        public name: string,
        public canFly?: boolean,
        public size?: number
    ) {
    }

    public display() {
        console.log(`${this.name}, taille : ${this.size}, ${this.canFly ? " peut voler" : " ne vole pas"}`)
    }
}

let bee: Bug = new Bug("Abeille", true, 10)
bee.display()
let fly: Bug = new Bug("Mouche")
fly.display()

interface Bird {
    name: string
    canFly: boolean
    species: string
    color: {
        nuance: string
        name: string
    }
}

let pingouin: Bird = {
    canFly: true,
    name: "Le méchant dans Batman",
    species: 'Mutant',
    color: {
        name: "noir",
        nuance: "foncé"
    }
};


let hello: string | number = "Hello !"
hello = 12

function sayhello(name: string) : string {
    return `Hello ${name}`;
}

console.log(sayhello("Sly"))

let firstname  = null

console.log(firstname ?? "sly")

let user = {
    name : "Michel"
}

console.log(user.adress?.street ?? "rue des lilas")


















