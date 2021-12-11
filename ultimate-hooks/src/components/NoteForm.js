import React from "react"

const NoteForm = ({handleNoteSubmit, content}) => (
<form onSubmit={handleNoteSubmit}>
<input {...content} placeholder="note" />
<button type="submit" >create</button>
</form>
)

export default NoteForm

