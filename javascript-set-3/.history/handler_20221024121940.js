const createNoteDiv = (element, key, currentNote) => {
    // element.innerHTML += `<li id="${key}">${currentNote}</li>`
    const newDiv = document.createElement('div')
    newDiv.setAttribute('id', key)
    newDiv.setAttribute('class', 'note')
    const newPar = document.createElement('p')
    newPar.innerHTML = currentNote
    newDiv.appendChild(newPar)
    element.appendChild(newDiv)
}

const addDeleteButton = (child) => {
    const newButton = document.createElement('input');
    newButton.setAttribute('type', 'submit')
    newButton.setAttribute('value', 'Delete Note')
    newButton.addEventListener('click', event => {
        event.preventDefault();
        child.remove()
        const key = child.id
        localStorage.removeItem(key)
        console.log(localStorage);
    })
    child.appendChild(newButton)
}

const addEditArea = child => {    
    
    const editNoteDiv = document.createElement('div')
    const editNoteTextArea = document.createElement('textarea')
    editNoteDiv.appendChild(editNoteTextArea)

    const updateButton = document.createElement('input')
    updateButton.setAttribute('type', 'submit')
    updateButton
    editNoteDiv.appendChild(updateButton)

    child.appendChild(editNoteDiv)
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
        addEditArea(child);
    }
}

export { generateNotes };