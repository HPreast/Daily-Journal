import { EntryListComponent } from "./JournalList.js"
import { getEntries, postEntry, deletePost } from "./Data/dataManager.js"
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



document.addEventListener("click", event => {
    if (event.target.id.startsWith("delete")) {
       
        const postId = event.target.id.split("__")[1];
        deletePost(postId)
        location.reload();
        
    }
})

startJournal();
