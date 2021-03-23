export const entryEdit = (entry) => {
    return `
    <div class="newEntry">
    <h3>Edit This Entry</h3>
    <form>
                <fieldset>
                    <label for="entryDate">Date of Entry</label>
                    <input type="date" name="journalDate" id="journalDate">
                </fieldset>
                <fieldset>
                    <label for="conceptsCovered">Concepts Covered</label>
                    <input type="text" name="conceptsCovered" id="conceptsCovered">
                </fieldset>
                <fieldset>
                    <label for="textArea">Journal Entry</label>
                    <input type="textArea" name="journalEntry" id="journalEntry">
                </fieldset>
                <fieldset>
                    <label for="mood">Mood for the Day</label>
                    <select name="mood" id="journalMood" form="moodForm">
                        <option value="Happy">Happy</option>
                        <option value="Content">Content</option>
                        <option value="Sad">Sad</option>
                        <option value="Confused">Confused</option>
                        <option value="Irritated">Irritated</option>
                      </select>
                </fieldset>
                <button id="updateEntry__${entry.id}">Update</button>
		        <button id="newEntry__cancel">Cancel</button>
            </form>
    </div>`
}