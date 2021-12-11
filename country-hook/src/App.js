import React, { useState, useEffect } from 'react'
import axios from 'axios'

const useField = (type) => {
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

const useCountry = (name) => {
  const url = `https://restcountries.com/v2/name/${name}`

  const [country, setCountry] = useState(null)

  useEffect(() => { 
    axios
    .get(url)
    .then(response =>
      setCountry(response.data[0])).catch(error => console.log(error))
  },[url])
  return country
}

const Country = ({ country }) => {
  if(country) {
    return (
      <div>
        <h3>{country.name} </h3>
        <div>capital {country.capital} </div>
        <div>population {country.population}</div> 
        <img src={country.flag} height='100' alt={`flag of ${country.name}`}/>  
      </div>
    )
  } else {
    return (
    <div>
    no country is matching your search...
  </div>
  )}
}

const WaitingPage = () => (
  <div>
    welcome, type in a the name of a country and press find!
  </div>
)

const App = () => {
  const nameInput = useField('text')
  const [name, setName] = useState('')
  const country = useCountry(name)

  const fetch = (e) => {
    e.preventDefault()
    setName(nameInput.value)
  }

  return (
    <div>
      <form onSubmit={fetch}>
        <input {...nameInput} />
        <button>find</button>
      </form>

      {name && <Country country={country} />}
      {!name && <WaitingPage />}
    </div>
  )
}

export default App
