export const getEntries = () => {
    return fetch("http://localhost:8088/posts")
    // , {
    //     headers : {
    //         "Content-Type": "application/json",
    //         "Accept": "application/json"
    //     }
    // })
        .then(response => response.json())
    }

export const postEntry = (entry) => {
    return fetch("http://localhost:8088/posts", {
        method: "POST",
        headers : {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(entry)
    })
        .then(response => response.json())
}