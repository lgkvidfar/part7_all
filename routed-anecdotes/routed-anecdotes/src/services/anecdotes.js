import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {
    const object = { content, important:false }
    const response = await axios.post(baseUrl, object)
    return response.data
} 

const updateImportance = async (note) => {
  const updatedNote = {...note, important: !note.important }
  const response = await axios.put(`${baseUrl}/${note.id}`, updatedNote)
  return response.data
}

const exports = { getAll, createNew, updateImportance }
export default exports 