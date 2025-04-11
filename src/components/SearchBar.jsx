import './SearchBar.css'
import { useState } from 'react'

import React from 'react'

function SearchBar({ onSubmit }) {
    const [term, setTerm] = useState('')

    const handleFormSubmit = (event) => {
        event.preventDefault()
        console.log('necesito decirle al componenete papa sobre los datos')
        onSubmit(term)
    }

    const handleChange = (event) => {
        setTerm(event.target.value)
    }
    console.log('term', term)
  return (
        <div className="search-bar">
            <form onSubmit={handleFormSubmit}>
                <label>Termino de la busqueda:</label>
                <input onChange={handleChange} value={term} />
            </form>
        </div>
    )
}

export default SearchBar