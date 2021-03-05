/*
 *   Journal data for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
const journal = [
    {
        id: 1,
        date: "07/24/2025",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "Ok"
    },
    {
        id: 2,
        date: "03/03/21",
        concept: "JavaScript,HTML, & CSS",
        entry: "We finished our Automated World group project and presented them to the class.",
        mood: "Happy"
    },
    {
        id: 3,
        date: "03/04/21",
        concept: "JavaScript",
        entry: "Bryan broke down JavaScript and its uses in order to give us a better understanding. It helped a lot.",
        mood: "Happy"
    }
]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const getJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}