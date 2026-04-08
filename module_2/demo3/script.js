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

flower.name = "Rose";
flower.epine = 15

Flower.prototype.epine = 89

console.log(flower)
console.log(flower2)

console.log(Flower.prototype)
