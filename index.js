let saveBtn = document.getElementById("save-btn")
let deleteBtn = document.getElementById("delete-btn")
let inputEl = document.getElementById("input-el")
let noteArea = document.getElementById("note-area")
let linkPut = document.getElementById("link-put")
let myNoteLinks = []
let myNotes = []
let notesFromLocal =JSON.parse(localStorage.getItem("myNotes"))
let linksFromLocal = JSON.parse(localStorage.getItem("myNoteLinks"))
if(notesFromLocal){
    myNotes = notesFromLocal;
    myNoteLinks = linksFromLocal;
    render(myNotes, myNoteLinks)
}

saveBtn.addEventListener("click", function(){
myNoteLinks.push(linkPut.value)
myNotes.push(inputEl.value)
inputEl.value = this.ariaPlaceholder
linkPut.value = this.ariaPlaceholder
localStorage.setItem("myNotes", JSON.stringify(myNotes))
localStorage.setItem("myNoteLinks", JSON.stringify(myNoteLinks))
render(myNotes, myNoteLinks)
})

function render(notes, NoteLinks){
    let Notes= ""
    for (let i = 0; i<notes.length; i++){
    Notes += ` <a href = "${NoteLinks[i]}" target="_blank">${NoteLinks[i]}</a>
    <p> ${notes[i]} </p> `
    }
   noteArea.innerHTML = Notes
}

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myNotes = []
    myNoteLinks =[]
    render(myNotes, myNoteLinks)

})
    