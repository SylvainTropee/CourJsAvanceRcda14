function Flower(name, color = "vert", variety = null) {
    this.name = name
    this.color = color
    this.variety = variety
    this.description = function () {
        return `${this.name} est de couleur ${this.color}`;
    }
}

const flower = new Flower("Tulipe", "Beige", "Tulipe de neige")
const flower2 = new Flower("Marguerite")

console.log(flower.name)
flower.name = "Rose";
flower.epine = 15
console.log(flower.epine)
console.log(flower.description())

console.log(flower2.description())
