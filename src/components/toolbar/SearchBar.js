import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Label from '../misc/Label'

const SearchBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    min-width: 25%;
`
const StyledInput = styled.input`
    font-size: 2rem;
`

const SearchBar = ({ searchTerm, setSearchTerm, setCurrentPage }) => {
    const handleChange = (value) => {
        setCurrentPage(1)
        setSearchTerm(value)
    }
    return (
        <SearchBarContainer>
            <Label id='search-bar-label' text='Filter Results By Name, City, or Genre' color='grey' />
            <StyledInput 
                type='text' 
                aria-labelledby='search-bar-label'
                placeholder='Search Term...' 
                value={searchTerm} 
                onChange={(e) => handleChange(e.target.value)} 
            />
        </SearchBarContainer>
    )
}

export default SearchBar

SearchBar.propTypes = {
    setSearchTerm: PropTypes.func.isRequired, 
    setCurrentPage: PropTypes.func.isRequired
}
SearchBar.defaultProps = {
    searchTerm: ''
}