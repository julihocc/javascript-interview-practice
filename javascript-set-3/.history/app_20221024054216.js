const newNote = document.getElementById("newNote")
const inputArea = document.getElementById("inputArea")
const submitNewNote = document.getElementById("submitNewNote")
const listOfNotes = document.getElementById("listOfNotes")

console.log(listOfNotes.innerHTML);

submitNewNote.addEventListener("click", event => {
    event.preventDefault();
    noteText 
    const id = Date.now()
    console.log(id);
    if (inputArea.value){
        localStorage.setItem(id, inputArea.value)
    }
    listOfNotes.innerHTML += "<li>new note</li>"
    console.log('listOfNotes.innerHTML:', listOfNotes.innerHTML) 
} )

console.log('localStorage:', localStorage)

// localStorage.clear();

// console.log("lS after...", localStorage);