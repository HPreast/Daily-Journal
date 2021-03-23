/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            <ul>
            <li class ="entry-date">Date: ${entry.date}</li>
            <li class ="entry-concept">Concept: ${entry.concept}</li>
            <li class ="entry-entry">Entry: ${entry.entry}</li>
            <li class ="entry-mood">Mood: ${entry.mood}</li>
            </ul>
        </section>
    `
}