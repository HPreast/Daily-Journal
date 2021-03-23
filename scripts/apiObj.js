export const apiObj = () => {
    const date = document.getElementById("journalDate").value
    const concept = document.getElementById("conceptsCovered").value
    const entry = document.getElementById("journalEntry").value
    const mood = document.getElementById("journalMood").value
    return {
        date: date,
        concept: concept,
        entry: entry,
        mood: mood
    }
}