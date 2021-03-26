let entryCollection = [];

export const useEntryCollection = () => {
    return [... entryCollection];
}

export const getEntries = () => {
    const userId = getLoggedInUser().id
    return fetch(`http://localhost:8088/entries?_expand=user`)
      .then(response => response.json())
      .then(parsedResponse => {
        console.log("data with user", parsedResponse)
        entryCollection = parsedResponse
        return parsedResponse;
      })
  }

// export const getEntries = () => {
//     return fetch("http://localhost:8088/entries")
//         // , {
//         //     headers : {
//         //         "Content-Type": "application/json",
//         //         "Accept": "application/json"
//         //     }
//         // })
//         .then(response => response.json())
// }

export const postEntry = (entry) => {
    return fetch("http://localhost:8088/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(entry)
    })
        .then(response => response.json())
}

export const deletePost = postId => {
    return fetch(`http://localhost:8088/entries/${postId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .then(getEntries)
}

export const getSingleEntry = (entryId) => {
    return fetch(`http://localhost:8088/entries/${entryId}`)
        .then(response => response.json())
}

export const updateEntry = (entry) => {
    return fetch(`http://localhost:8088/entries/${entry.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
    })
        .then(response => response.json())
        .then(getEntries)
}

let loggedInUser = {}

export const logoutUser = () => {
    loggedInUser = {}
}

export const getLoggedInUser = () => {
    return {...loggedInUser};
}

export const setLoggedInUser = (userObj) => {
    loggedInUser = userObj;
}

export const loginUser = (userObj) => {
    return fetch(`http://localhost:8088/users?name=${userObj.name}&email=${userObj.email}`)
        .then(response => response.json())
        .then(parsedUser => {
            //is there a user?
            console.log("parsedUser", parsedUser) //data is returned as an array
            if (parsedUser.length > 0) {
                setLoggedInUser(parsedUser[0]);
                return getLoggedInUser();
            } else {
                //no user
                return false;
            }
        })
}

export const registerUser = (userObj) => {
    return fetch(`http://localhost:8088/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userObj)
    })
        .then(response => response.json())
        .then(parsedUser => {
            setLoggedInUser(parsedUser);
            return getLoggedInUser();
        })
}

