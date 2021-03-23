export const getEntries = () => {
    return fetch("http://localhost:8088/entries")
    // , {
    //     headers : {
    //         "Content-Type": "application/json",
    //         "Accept": "application/json"
    //     }
    // })
        .then(response => response.json())
    }

export const postEntry = (entry) => {
    return fetch("http://localhost:8088/entries", {
        method: "POST",
        headers : {
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