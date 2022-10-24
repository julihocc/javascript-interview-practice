const newNote = document.getElementById("newNote")
const inputArea = document.getElementById("inputArea")
const submitNewNote = document.getElementById("submitNewNote")
const listOfNotes = document.getElementById("listOfNotes")

console.log(listOfNotes);

submitNewNote.addEventListener("click", event => {
    event.preventDefault();
    console.log(inputArea.value)
    const id = Date.now()
    console.log(id);
    if (inputArea.value){
        localStorage.setItem(id, inputArea.value)
    }
    listOfNotes.innerHTML =+ "<li>New note</li>"
} )

console.log(localStorage);

// localStorage.clear();

// console.log("lS after...", localStorage);