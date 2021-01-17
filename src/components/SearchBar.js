import React from 'react'
import styled from 'styled-components'

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
            <labe>Filter Results By Name, City, or Genre</labe>
            <StyledInput 
                type='text' 
                placeholder='Search Term...' 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
            />
        </SearchBarContainer>
    )
}

export default SearchBar
