import { EntryListComponent } from "./JournalList.js"
import { getEntries, postEntry, deletePost, getSingleEntry, updateEntry } from "./Data/dataManager.js"
import { apiObj } from "./apiObj.js"
import { entryEdit } from "./entryEdit.js"

const startJournal = () => {
    getEntries()
        .then(savedEntries => {
            EntryListComponent(savedEntries)
        })
}

//submit event listener
document.getElementById("submit").addEventListener("click", (event) => {
    // event.preventDefault();
    const newEntryObj = apiObj();
    postEntry(newEntryObj)
        .then(parsedResponse => {
            console.log("test", parsedResponse)
        })
})


//delete event listener
document.addEventListener("click", event => {
    if (event.target.id.startsWith("delete")) {

        const postId = event.target.id.split("__")[1];
        deletePost(postId)
        location.reload();

    }
})

const showEdit = (entry) => {
    const entryElement = document.querySelector(".formContainer");
    entryElement.innerHTML = entryEdit(entry);
}
//edit event listener
document.addEventListener("click", event => {
    // event.preventDefault();
    if (event.target.id.startsWith("edit")) {
        const entryId = event.target.id.split("__")[1];
        getSingleEntry(entryId)
            .then(response => {
                showEdit(response);
            })
    }
})

//update event listener
document.addEventListener("click", event => {
    // event.preventDefault();
    if (event.target.id.startsWith("updateEntry")) {
        const entryId = event.target.id.split("__")[1];
        const date = document.getElementById("journalDate").value
        const concept = document.getElementById("conceptsCovered").value
        const entry = document.getElementById("journalEntry").value
        const mood = document.getElementById("journalMood").value

        const entryObject = {
            date: date,
            concept: concept,
            entry: entry,
            mood: mood,
            id: parseInt(entryId)
        }
        updateEntry(entryObject)
        .then(response => {
            EntryListComponent(response);
        })
    }

})

startJournal();
