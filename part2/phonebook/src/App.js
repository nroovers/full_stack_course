import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'



const App = () => {

  //useEffect makes the code run only once after rendering
  //otherwise the following code would lead to an infinite loop
  //as the setPersons functiond re-renders the page and causes the code to run again
  useEffect(() => {
    console.log('start effect')
    axios.get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])


  console.log('set states')
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const handleNameChange = (event) => {
    // console.log('handleNameChange ', event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    // console.log('handleNumberChange ', event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    // console.log('handleFilterChange ', event.target.value)
    setFilter(event.target.value)
  }

  const handleAddPerson = (event) => {
    event.preventDefault()

    console.log('handleAddPerson ', newName, newNumber, persons)

    // debugger;

    if (persons.map(person => person.name).includes(newName)) {
      alert(`${newName} is already added to phonebook`)
    }
    else {
      const newPerson = { name: newName, number: newNumber }
      setPersons(persons.concat([newPerson]))
      setNewName('')
      setNewNumber('')
    }
  }


  console.log('return')
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onFilterChange={handleFilterChange} filter={filter} />

      <h3>add a new</h3>
      <PersonForm
        onNameChange={handleNameChange} onNumberChange={handleNumberChange} onAddPerson={handleAddPerson}
        newName={newName} newNumber={newNumber} />

      <h3>Numbers</h3>
      <Persons filter={filter} persons={persons} />

    </div>
  )
}

export default App
