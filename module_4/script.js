"use strict";
class Bug {
    name;
    canFly;
    size;
    constructor(name, canFly, size) {
        this.name = name;
        this.canFly = canFly;
        this.size = size;
    }
    display() {
        console.log(`${this.name}, taille : ${this.size}, ${this.canFly ? " peut voler" : " ne vole pas"}`);
    }
}
let bee = new Bug("Abeille", true, 10);
bee.display();
let fly = new Bug("Mouche");
fly.display();
let pingouin = {
    canFly: true,
    name: "Le méchant dans Batman",
    species: 'Mutant',
    color: {
        name: "noir",
        nuance: "foncé"
    }
};
let hello = "Hello !";
hello = 12;
function sayhello(name) {
    return `Hello ${name}`;
}
console.log(sayhello("Sly"));
let firstname = null;
console.log(firstname ?? "sly");
let user = {
    name: "Michel"
};
console.log(user.adress?.street ?? "rue des lilas");
