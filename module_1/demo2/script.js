const musics = ['The Beatles', 'Jean-Michel Front', 'J-J Goldman', 'Queen']

//récupérer l'objet select
const select = document.getElementById('music')
console.log(select);

//création d'un objet option pour chaque music
for (const music of musics) {
    const option = document.createElement('option')
    option.value = music.replaceAll(' ', '').toLowerCase()
    option.innerText = music
    //ajouter l'option dans le select
    select.append(option)
}

//a la selection d'une option, j'affiche la valeur dans une balise p dans le dom
select.addEventListener('change', function () {
    console.log(this)
    const p = document.createElement('p')
    p.innerText = this.value
    document.body.append(p)
})



