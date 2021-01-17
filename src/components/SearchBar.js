import React from 'react'
import styled from 'styled-components'
import Label from './Label'

const SearchBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    min-width: 25%;
`
const StyledInput = styled.input`
    font-size: 2rem;

`

const SearchBar = ({ searchTerm, setSearchTerm }) => {
    return (
        <SearchBarContainer>
            <Label id='search-bar-label' text='Filter Results By Name, City, or Genre' />
            <StyledInput 
                type='text' 
                aria-labelledby='search-bar-label'
                placeholder='Search Term...' 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
            />
        </SearchBarContainer>
    )
}

export default SearchBar
