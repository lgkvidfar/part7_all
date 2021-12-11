import axios from 'axios'

const baseUrl = '/blogs'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getAll = async () => {
  const request = await axios.get(baseUrl)
  return request.data
}

const getCommentByID = async (id) => {
  const request = await axios.get(`${baseUrl}/${id}`)
  return request.data
}

const create = async (newObject, blog) => {
  const config = {
    headers: { 'Authorization': token },
  }
  const response = await axios.post(`${baseUrl}/${blog.id}/comments`, newObject, config)
  return response.data
}

const update = async (id, newBlog) => {
  const config = {
    headers: { 'Authorization': token },
  }

  const request = await axios.put(`${baseUrl}/${id}`, newBlog, config)
  return request.data
}

const remove = async (id) => {
  const config = {
    headers: { 'Authorization': token },
  }

  const request = await axios.delete(`${baseUrl}/${id}`, config)
  return request.data
}

const exports = {
  getAll,
  getCommentByID,
  create,
  update,
  remove,
  setToken
}
export default exports