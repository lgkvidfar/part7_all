import React from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';


const AnecdoteList = ({ anecdotes }) => {
    console.log(anecdotes);
    return (
    <div>
      <h2>anecdotes</h2>
      <ul>
      {anecdotes.map(anecdote =>
      <li key={anecdote.id}>
            <Link to={`/${anecdote.id}`}>
              {anecdote.content}
            </Link>
        </li>
        )}
      </ul>
    </div>
  )}

  export default AnecdoteList