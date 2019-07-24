import React, { useState, useEffect } from 'react'
import Persons from './Persons'
import PersonForm from './PersonForm'
import Filter from './Filter'
import Message from './Message'
import services from '../services/phonebookServices'

const App = () => {
    const [ persons, setPersons] = useState([])
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber] = useState('')
    const [ filterTerm, setFilterTerm] = useState('')
    const [ message, setMessage] = useState({text: null, type: null})

    useEffect(() => {
        services.getAll().then(data => setPersons(data))
    }, [])

    const addRecord = (event) => {
        event.preventDefault()
        const names = persons.map(person => person.name.toLowerCase())
        if (names.indexOf(newName.toLowerCase()) !== -1) {
            const matchedPerson = persons.find(p => p.name === newName)
            if (matchedPerson.number === newNumber) {
                window.alert(`${newName} is already added to phonebook`)
            } else if (window.confirm(`${matchedPerson.name} is already added to phonebook, replace the old number with a new one?`)) {
                services.update({...matchedPerson, number: newNumber}).then(updatedPerson => 
                    {
                        setPersons(persons.map(p => p.id === updatedPerson.id ? updatedPerson : p))
                        setMessage({text: `Updated ${updatedPerson.name}'s number`, type: 'success'})
                        setTimeout(() => setMessage({text: null, type: null}), 5000)
                    }).catch(error => {
                        setMessage({text: `Information of ${newName} has already been removed from server`, type: 'error'})
                        setTimeout(() => setMessage({text: null, type: null}), 5000)
                    })
            }
        } 
        else {
            services.create(
                { name: newName, number: newNumber}
            ).then(newPerson => {
                setPersons(persons.concat(newPerson))
                setMessage({text: `Added ${newPerson.name} to the phonebook`, type: 'success'})
                setTimeout(() => setMessage({text: null, type: null}), 5000)
            })
        }
    }

    const handleClick = (id) => {
        if (window.confirm(`Delete ${persons.find(p => p.id === id).name}?`)) {
            services.deleteEntry(id).then(r => {
                if (r.status === 204) {
                    setPersons(persons.filter(p => p.id !== id))
                    setMessage({text: `Deleted entry successfully`, type: 'success'})
                } else {
                    setMessage({text: `Couldn't delete the resource with id ${id}`, type: 'error'})
                }
                setTimeout(() => setMessage({text: null, type: null}), 5000)
            })
        }
    }

    const filterContent = (event) => {
        setFilterTerm(event.target.value)
    }

    const handleNameChange = (event) => setNewName(event.target.value)
    const handleNumberChange = (event) => setNewNumber(event.target.value)

    return (
        <div>
            <h2>Phonebook</h2>
            <Message message={message} />
            <Filter filterContent={filterContent} />
            <h2>add a new</h2>
            <PersonForm newName={newName} newNumber={newNumber} 
                        handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}
                        addRecord={addRecord}/>
            <h2>Numbers</h2>
            <Persons persons={persons} filterTerm={filterTerm} handleClick={handleClick}/>
        </div>
    )
}

export default App
