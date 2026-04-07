import {dico} from './dico.js'

const randomWord = getRandomWord();
let attempt = 5;

function generateLetters() {
    for (let i = "A".charCodeAt(0); i <= "Z".charCodeAt(0); i++) {
        //création du caractère
        let letter = String.fromCharCode(i)
        //création du bouton
        const button = document.createElement('button')
        button.innerText = letter

        //ajout de l'évènement click
        button.addEventListener("click", checkLetter)

        //ajout du bouton dans la div prévue
        document.getElementById('letters').append(button)
    }
}

function getRandomWord() {
    const index = Math.round(Math.random() * dico.length)
    console.log(dico[index])
    return dico[index]
}

function displayRandomWord() {
    document.getElementById('wordToFind').innerText = randomWord.replace(/[A-Z]/gi, "_")
}


function checkLetter() {
    //this correspond au bouton cliqué
    const letter = this.innerText

    //transforme le mot dans le dom en tableau
    let randomDomWord = document.getElementById('wordToFind').innerText.split('')

    if (randomWord.includes(letter)) {
        for (let i = 0; i < randomWord.length; i++) {
            //si lettre dans le mot, alors je remplace la lettre dans le tableau
            if (randomWord[i] === letter) {
                randomDomWord[i] = letter
            }
        }
        //réinjection du mot dans le dom
        document.getElementById('wordToFind').innerText = randomDomWord.join('')
    }else{
        //ou décrementation du nombre de tentative
        document.getElementById('attempt').innerText = --attempt
    }

    checkWinOrLoose()
}

function checkWinOrLoose(){

    if(document.getElementById('wordToFind').innerText === randomWord && attempt > 0){
        alert("Winner !!!!!!!!!!!!!!!!!!!!");
    }

    if(attempt == 0){
        alert("Perdu !!!!!!!!!!!!!!!!!!!!!")
    }

}


function init() {
    generateLetters()
    displayRandomWord()
    document.getElementById('reset').addEventListener('click', function (){
        window.location.reload()
    })
}

init();













