const newNote = document.getElementById("newNote")
const inputArea = document.getElementById("inputArea")
const submitNewNote = document.getElementById("submitNewNote")
const listOfNotes = document.getElementById("listOfNotes")

console.log(listOfNotes.innerHTML);

function generate

submitNewNote.addEventListener("click", event => {
    event.preventDefault();
    const noteText = inputArea.value
    console.log('noteText:', noteText)
    const id = Date.now()
    console.log(id);
    if (inputArea.value){
        localStorage.setItem(id, noteText)
    }
    listOfNotes.innerHTML += `<li id=${id}>${noteText.slice(0,120)}...</li>`
    console.log('listOfNotes.innerHTML:', listOfNotes.innerHTML) 
} )

console.log('localStorage:', localStorage)

// localStorage.clear();

// console.log("lS after...", localStorage);