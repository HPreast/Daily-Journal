/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            <ul>
            <li class ="entry-details">${entry.date}</li>
            <li class ="entry-details">${entry.concept}</li>
            <li class ="entry-details">${entry.entry}</li>
            <li class ="entry-details">${entry.mood}</li>
            </ul>
        </section>
    `
}