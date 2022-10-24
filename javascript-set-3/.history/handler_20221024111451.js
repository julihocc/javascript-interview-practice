const createNoteDiv = (element, key, currentNote) => {
    element.innerHTML += `<li id="${key}">${currentNote}</li>`
}

const generateNotes = (element) => {
    element.innerHTML = ""
    for (const key in localStorage) {
        // Skip built-in properties like length, setItem, etc.
        if (localStorage.hasOwnProperty(key)) {
            let currentNote = localStorage.getItem(key)
            createNoteDiv(element, key, currentNote)
        }
    }

    for (let child in element.children) {
        console.log(child.item);
    }
}

export { generateNotes };