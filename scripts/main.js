import { EntryListComponent } from "./JournalList.js"
import { getEntries, postEntry, deletePost, getSingleEntry, updateEntry, logoutUser, getLoggedInUser, registerUser, setLoggedInUser, loginUser } from "./Data/dataManager.js"
import { apiObj } from "./apiObj.js"
import { entryEdit } from "./entryEdit.js"
import { JournalEntryComponent } from "./JournalEntry.js"
import { navBar } from "./nav/navBar.js"
import { LoginForm } from "./auth/loginForm.js"
import { RegisterForm } from "./auth/registerForm.js"
import { entryForm } from "./entryForm.js"

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

//edit event listener
const showEdit = (entry) => {
    const entryElement = document.querySelector(".formContainer");
    entryElement.innerHTML = entryEdit(entry);
}

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

//cancel event listener
const cancelEdit = (entry) => {
    const cancelElement = document.querySelector(".formContainer");
    cancelElement.InnerHTML = JournalEntryComponent(entry)
}
document.addEventListener("click", event => {
    if (event.target.id.startsWith("newEntry")) {
       cancelEdit();
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

// Logout event listener
document.addEventListener("click", event => {
    if (event.target.id === "logout") {
        logoutUser();
        console.log(getLoggedInUser());
        sessionStorage.clear();
        checkForUser();
    }
})

// Login event listener
document.addEventListener("click", event => {
    event.preventDefault();
    if (event.target.id === "login__submit") {
        const userObject = {
            name: document.querySelector("input[name='name']").value,
            email: document.querySelector("input[name='email']").value
        }
        loginUser(userObject)
        .then(dbUserObj => {
            if (dbUserObj){
                sessionStorage.setItem("user", JSON.stringify(dbUserObj));
                startJournal();
            } else {
                const entryElement = document.querySelector(".formContainer");
                entryElement.innerHTML = `<p class="center">That user does not exist. Please try again or register for your free account.</p> ${LoginForm()} <hr/> <hr/> ${RegisterForm()}`;

            }
        })
    }
})

// Register event listener
document.addEventListener("click", event => {
    event.preventDefault();
    if (event.target.id === "register__submit") {
      //collect all the details into an object
      const userObject = {
        name: document.querySelector("input[name='registerName']").value,
        email: document.querySelector("input[name='registerEmail']").value
      }
      registerUser(userObject)
      .then(dbUserObj => {
        sessionStorage.setItem("user", JSON.stringify(dbUserObj));
        startJournal();
      })
    }
  })

const showNavBar = () => {
    const navElement = document.querySelector("nav");
    navElement.innerHTML = navBar();
}

const showLoginRegister = () => {
    showNavBar();
    const entryElement = document.querySelector(".formContainer");
    entryElement.innerHTML = `${LoginForm()} <hr/> <hr/> ${RegisterForm()}`;
    const postElement = document.querySelector("#entryLog");
    postElement.innerHTML = "";
}

const showEntryForm = () => {
    const entryElement = document.querySelector(".formContainer");
    entryElement.innerHTML = entryForm();
}

const checkForUser = () => {
    if (sessionStorage.getItem("user")) {
        setLoggedInUser(JSON.parse(sessionStorage.getItem("user")));
        startJournal();
        showEntryForm();
    } else {
       showLoginRegister();
    }
}


showNavBar();
getLoggedInUser();
// startJournal();
checkForUser();