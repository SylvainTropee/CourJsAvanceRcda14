const flower = {
    name: "Tulipe",
    color: "Rouge",
    variety: "Tulipe du Nord",
    description: function () {
        return `${this.name} est de couleur ${this.color}`;
    }
}
console.log(flower.name)
flower.name = "Rose";
flower.epine = 15
console.log(flower.epine)
console.log(flower.description())
