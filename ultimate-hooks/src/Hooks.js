import { useState } from "react"
import axios from 'axios'

export const useField = (type) => {
    const [value, setValue] = useState('')
  
    const onChange = (event) => {
      setValue(event.target.value)
    }
  
    return {
      type,
      value,
      onChange
    }
  }
  
  export const useResource = (database) => {
    const [resources, setResources] = useState([])
  
    const baseUrl = `http://localhost:3005/${database}`
  
    const create = async (resource) => {
      const response = await axios.post(baseUrl, resource)
      setResources(resources.concat(response.data))
    }
  
    const getAll = async () => {
      const response = await axios.get(baseUrl)
      setResources(response.data)
    }

    const remove = async (note) => {
      const response = axios.delete((`${baseUrl}/${note.id}`))
      return response.data
    }
  
  
    const service = {
      create, getAll, remove
    }
  
    return [
      resources, service
    ]
  }

export default useResource