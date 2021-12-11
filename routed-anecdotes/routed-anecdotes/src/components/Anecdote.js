import React from 'react'
import { BrowserRouter as Router, useParams } from 'react-router-dom';


const Anecdote = ({ anecdotes }) => {
    const id = useParams().id
    console.log(anecdotes)
    const anecdote = anecdotes.find(a => a.id === id) 
    console.log(anecdote.info)
    return (
        <div> 
          <p>'{anecdote.content}' | {anecdote.votes} <button>vote</button></p><br/>
          <div>
            by {anecdote.author}<br/>
            <a href={anecdote.info}>read more</a>
          </div><br/>
        </div>
      )
  }

  export default Anecdote