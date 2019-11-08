import React, { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '1234567890' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
  }

  const handleAddPerson = (event) => {
    event.preventDefault()

    console.log(newName, newNumber, persons)

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
