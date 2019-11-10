import React from 'react'
import Person from './Person'


const Persons = ({filter, persons, onRemovePerson}) => {

    const renderPersons = () => {
        const personsToRender = filter.length > 0 ?
            persons.filter(p => p.name.toUpperCase().includes(filter.toUpperCase())) :
            persons
    
        // return personsToRender.map(person => <div key={person.name}>{person.name} {person.number}</div>)
        return personsToRender.map(person => <Person key={person.name} person={person} onRemovePerson={onRemovePerson}/>)
    }
    
    return (
        <div>
            {renderPersons()}
        </div>
    )
}


export default Persons