let characters;

fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => {

        characters = data
        console.log(characters)

        for (let character of data.results) {
            const p = document.createElement('p')
            const img = document.createElement('img')

            p.innerText = character.name
            img.src = character.image

            document.body.append(p)
            document.body.append(img)
        }
    })

console.log(characters)