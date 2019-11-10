import React from 'react'

const Person = ({ person, onRemovePerson }) => {

    return (
        <div>{person.name} {person.number}
            <button onClick={() => { onRemovePerson(person) }}>delete</button>
        </div>

    )
}

export default Person