import React from 'react'

const Persons = ({ persons, filterTerm}) => {
    let personsToRender = persons
    if (filterTerm !== '') {
        personsToRender = persons.filter(person => person.name.toLowerCase().indexOf(filterTerm) !== -1)
    }
    return (
        <div>
            {personsToRender.map((person) => <div key={person.number}>{person.name} {person.number}</div>)}
        </div>
    )
}

export default Persons
