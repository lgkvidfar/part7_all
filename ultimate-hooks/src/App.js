import React, { useState, useEffect } from 'react'

import Notes from './components/Notes'
import Persons from './components/Persons'
import NoteForm from './components/NoteForm'
import PersonForm from './components/PersonForm'
import { useField, useResource } from './Hooks'

const App = () => {
  const name = useField('text')
  const number = useField('text')

  const content = useField('text')
  const [notes, noteService] = useResource('notes')
  const [persons, personService] = useResource('persons')

  const handleNoteSubmit = (event) => {
    event.preventDefault()
    noteService.create({ content: content.value })
  }
 
  const handlePersonSubmit = (event) => {
    event.preventDefault()
    personService.create({ name: name.value, number: number.value})
  }

  useEffect(() => {
    noteService.getAll()
    personService.getAll()
  }, [])

  return (
    <div>
      <h2>notes</h2>
      <NoteForm handleNoteSubmit={handleNoteSubmit} content={content}/>
      <Notes notes={notes}/>

      <h2>persons</h2>
      <PersonForm handlePersonSubmit={handlePersonSubmit} name={name} number={number}/>
      <Persons persons={persons}/>
    </div>
  )
}

export default App