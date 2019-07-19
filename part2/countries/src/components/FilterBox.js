import React from 'react'

const FilterBox = ({ inputTerm, handleInputChange }) =>
    <React.Fragment>
        find countries  <input value={inputTerm} onChange={handleInputChange}></input>
    </React.Fragment>

export default FilterBox
