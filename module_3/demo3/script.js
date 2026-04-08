fetch("https://rickandmortyapi.com/api/character", {method : 'GET'})


async function getRickAndMortyData() {

    const httpResponse =  await fetch("https://rickandmortyapi.com/api/character", {method: 'GET'})
    //const httpResponse2 =  fetch("https://rickandmortyapi.com/api/character", {method: 'GET'})
    //await Promise.all(httpResponse, httpResponse2)
    if(httpResponse.status === 200 && httpResponse.ok){
        return httpResponse.json()
    }
}

async function displayData() {
    const data = await getRickAndMortyData()

    if(data){
        for (let character of data.results) {
            const p = document.createElement('p')
            const img = document.createElement('img')

            p.innerText = character.name
            img.src = character.image

            document.body.append(p)
            document.body.append(img)
        }
    }
}

displayData()