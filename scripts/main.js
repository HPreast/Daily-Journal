import { EntryListComponent } from "./JournalList.js"
import { getEntries, postEntry } from "./Data/dataManager.js"
import { apiObj } from "./apiObj.js"

const startJournal = () => {
    getEntries()
    .then(savedEntries => {
        EntryListComponent(savedEntries)
    })
}


document.getElementById("submit").addEventListener("click", (event) => {
    // event.preventDefault();
    const newEntryObj = apiObj();
    postEntry(newEntryObj)
    .then(parsedResponse => {
        console.log("test", parsedResponse)
    })
})
startJournal();