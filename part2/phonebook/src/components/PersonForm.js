import React from 'react'


const PersonForm = ({onNameChange, onNumberChange, onAddPerson, newName, newNumber}) => {

    return (
        <form>
            <div>
                name: <input onChange={onNameChange} value={newName} />
            </div>
            <div>
                number: <input onChange={onNumberChange} value={newNumber} />
            </div>
            <div>
                <button type="submit" onClick={onAddPerson}>add</button>
            </div>
        </form>
    )
}


export default PersonForm