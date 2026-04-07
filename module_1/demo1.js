//déclarations
const compositor = 'Jean-Seb Bach';
let symfony = 9;

let notes = ['do', 're', 'fa', 'sol', 'sib']

console.group("Musique");

console.log(compositor);
console.log(symfony);
console.log(notes);

console.log(typeof symfony);
console.table(notes)
console.groupEnd()

console.log("------------------")
//structure de codes
for (let i = 0; i < notes.length; i++) {
    console.log(notes[i])
}
console.log("------------------")
for (const note of notes) { // for in => objet
    console.log(note)
}
console.log("------------------")
//fonction anonyme
notes.forEach(
    function (value, index) {
        console.log(`Valeur : ${value} - Index : ${index}`);
    }
)
//fonction fléchée
notes.forEach(
     (value, index) =>  console.log(`Valeur : ${value} - Index : ${index}`)
)
notes.forEach(
    (value, index) => {
        //plusieurs lignes de code autorisés + return si nécessaire
        console.log(`Valeur : ${value} - Index : ${index}`)
    }
)
console.log("------------------")
//fonctions
function getNote(index){
    return notes[index]
}
console.log(getNote(2));

console.log("------------------")

const getNote2 = function (index){
    return notes[index]
}
console.log(getNote2)
console.log(getNote2(4));








