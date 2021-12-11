import { useNavigate  } from 'react-router-dom';
import React from 'react'

import { useField } from '../hooks'

const CreateNew = ({ addNew, setNotification }) => {
  const content = useField('text')
  const author = useField('text')
  const url = useField('text')

  const navigate = useNavigate ()

  const handleSubmit = (e) => {
    e.preventDefault()
    addNew({
      'content': content.value,
      'author': author.value,
      'info': url.value,
      'votes': 0
    })
    navigate('/')
    setNotification(`${content.value} added to list of blogs`)
    setTimeout(() => setNotification(null),3000)
  }

  const reset = () => {
    content.reset()
    author.reset()
    url.reset()
  }

  const padding ={padding: 10 }

  return (
    <div>
      <form style={padding} onSubmit={handleSubmit}>
      <h2>create a new anecdote</h2>
        <div>
            <input placeholder="content" type={content.type} value={content.value} onChange={content.onChange}/><br/>
            <input placeholder="author" type={author.type} value={author.value} onChange={author.onChange} /><br/>
            <input placeholder="url" type={url.type} value={url.value} onChange={url.onChange} /><br/>
        </div>
        <div>
          <button type='submit'>create</button>
          <button type='button' onClick={reset}>clear</button>
        </div>
      </form>
    </div>
  )
}

export default CreateNew