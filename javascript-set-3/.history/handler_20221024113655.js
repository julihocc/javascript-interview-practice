const createNoteDiv = (element, key, currentNote) => {
    // element.innerHTML += `<li id="${key}">${currentNote}</li>`
    const newDiv = document.createElement('div')
    newDiv.setAttribute('id', 'key')
    newDiv.setAttribute('class', 'note')
    newDiv.
}

const addDeleteButton = (child) => {
    console.log(child);
}

const generateNotes = (element) => {
    element.innerHTML = ""
    for (const key in localStorage) {
        // Skip built-in properties like length, setItem, etc.
        if (localStorage.hasOwnProperty(key)) {
            let currentNote = localStorage.getItem(key);
            createNoteDiv(element, key, currentNote)
        }
    }

    for (const child of element.children) {
        addDeleteButton(child);
    }
}

export { generateNotes };