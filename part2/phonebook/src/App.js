import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const renderPersons = () => persons.map(person => <div key={person.name}>{person.name}</div>)

  const handleNameChange = (event) => {
    console.log(event.target.value)

    setNewName(event.target.value)
  }

  const handleAddPerson = (event) => {
    event.preventDefault()

    console.log(newName, persons)

    const newPerson = { name: newName }
    setPersons(persons.concat([newPerson]))
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input onChange={handleNameChange} value={newName} />
        </div>
        <div>
          <button type="submit" onClick={handleAddPerson}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {renderPersons()}
    </div>
  )
}

export default App
