/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            <ul>
            <li class ="entry-date">${entry.date}</li>
            <li class ="entry-concept">${entry.concept}</li>
            <li class ="entry-entry">${entry.entry}</li>
            <li class ="entry-mood">${entry.mood}</li>
            </ul>
        </section>
    `
}