const newNote = document.getElementById("newNote")
const inputArea = document.getElementById("inputArea")
const submitNewNote = document.getElementById("submitNewNote")

console.log(inputArea);
console.log(submitNewNote);

submitNewNote.addEventListener("click", event => {
    event.preventDefault();
    console.log(inputArea.value)
    const id = Date.now()
    console.log(id);
    if (inputArea.value){
        localStorage.setItem(id, inputArea.value)
    }
} )

console.log(localStorage);

localStorage.clear();\