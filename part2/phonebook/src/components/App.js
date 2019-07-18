import React, { useState, useEffect } from 'react'
import Persons from './Persons'
import PersonForm from './PersonForm'
import Filter from './Filter'
import axios from 'axios';

const App = () => {
    const [ persons, setPersons] = useState([])
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber] = useState('')
    const [ filterTerm, setFilterTerm] = useState('')

    useEffect(() => {
        axios
            .get("http://localhost:3001/persons")
            .then(response => {
                setPersons(response.data)
            })
    }, [])

    const addRecord = (event) => {
        event.preventDefault()
        const names = persons.map(person => person.name)
        if (names.indexOf(newName) !== -1) window.alert(`${newName} is already added to phonebook`)
        else setPersons(persons.concat({ name: newName, number: newNumber}))
    }

    const filterContent = (event) => {
        setFilterTerm(event.target.value)
    }

    const handleNameChange = (event) => setNewName(event.target.value)
    const handleNumberChange = (event) => setNewNumber(event.target.value)

    return (
        <div>
        <h2>Phonebook</h2>
        <Filter filterContent={filterContent} />
        <h2>add a new</h2>
        <PersonForm newName={newName} newNumber={newNumber} 
                    handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}
                    addRecord={addRecord}/>
        <h2>Numbers</h2>
        <Persons persons={persons} filterTerm={filterTerm} />
        </div>
    )
}

export default App
