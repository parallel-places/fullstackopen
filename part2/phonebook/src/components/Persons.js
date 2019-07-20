import React from 'react'

const Persons = ({ persons, filterTerm, handleClick }) => {
    let personsToRender = persons
    if (filterTerm !== '') {
        personsToRender = persons.filter(person => person.name.toLowerCase().indexOf(filterTerm) !== -1)
    }
    return (
        <div>
            {personsToRender.map((person) => 
            <div key={person.name}>{person.name} {person.number}
            <button onClick={() => handleClick(person.id)}>delete</button></div>)}
        </div>
    )
}

export default Persons
