export const entryForm = () => {
    return `<section class ="formContainer">
    <h2>Entry Form</h2>
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
        <button type="submit" id="submit">Record Journal Entry</button>
    </form>
</section>`
}