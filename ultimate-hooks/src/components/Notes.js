import React from 'react'

const Note = ({ note }) => {
  console.log(note.content);
  return (
    <div>
        <li>{note.content}</li>
    </div>
  )
}

const Notes = ({ notes }) => (
  <div>
    {notes.map(note => <Note key={note.id} note={note} />)}
  </div>
)

export default Notes