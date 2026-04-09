async function callApi(url) {
    const response = await fetch(url)

    if (response.ok) {
        return response.json()
    }
}

async function getDepartements() {

    const data = await callApi("https://geo.api.gouv.fr/departements")

    data.forEach(val => {
        let option = document.createElement('option')
        option.innerText = `${val.code} - ${val.nom}`
        option.value = val.code
        document.getElementById('dep').append(option)
    })
}

function addDepChangeEvent() {

    document.getElementById('dep').addEventListener('change', async function () {

        const data = await callApi(`https://geo.api.gouv.fr/departements/${this.value}/communes?fields=nom,code`)
        document.getElementById('cities').innerHTML = ""

        data.forEach(val => {
            let option = document.createElement('option')
            option.innerText = val.nom
            option.value = val.code
            document.getElementById('cities').append(option)
        })

    })

}

function addCityChangeEvent() {

    document.getElementById('cities').addEventListener('change', async function () {

        const data = await callApi(`https://geo.api.gouv.fr/communes/${this.value}`)

        let p = document.createElement('p')
        p.innerText = `Nom : ${data.nom}, population : ${data.population}`
        document.body.append(p)
    })

}

window.onload= function (){
    getDepartements()
    addDepChangeEvent()
    addCityChangeEvent()
}

