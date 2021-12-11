import React, { useState,useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import Notification from './components/Notification';
import About from './components/About';
import Footer from './components/Footer';
import AnecdoteList from './components/AnecdoteList';
import Anecdote from './components/Anecdote';
import Menu from './components/Menu'
import CreateNew from './components/CreateNew';

const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: '1'
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: '2'
    }
  ])

  const [notification, setNotification] = useState(null)

  const addNew = (anecdote) => {
    console.log(anecdote);
    anecdote.id = (Math.random() * 10000).toFixed(0)
    setAnecdotes(anecdotes.concat(anecdote))
    console.log(anecdotes);
  }

  // const anecdoteById = (id) =>
  //   anecdotes.find(a => a.id === id)

  // const vote = (id) => {
  //   const anecdote = anecdoteById(id)

  //   const voted = {
  //     ...anecdote,
  //     votes: anecdote.votes + 1
  //   }

  //   setAnecdotes(anecdotes.map(a => a.id === id ? voted : a))
  // }

  return (
    <div>
      <Header />
      <Menu />
      <Notification notification={notification} />
      <Routes>
        <Route path="/create" element={ <CreateNew setNotification={setNotification} addNew={addNew} />} />
        <Route path="/about" element={ <About />}/>
        <Route path="/:id" element={<Anecdote anecdotes={anecdotes}/>} />
        <Route path="/" element={ <AnecdoteList anecdotes={anecdotes} />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App;