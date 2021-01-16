import React from 'react'
import Button from './Button'
import styled from 'styled-components'

const SearchBarContainer = styled.div`
    display: flex;
    align-items: center;
`
const StyledInput = styled.input`
    font-size: 2rem;
    
    display: flex;
    flex-direction: row;

`

const SearchBar = ({ searchTerm, setSearchTerm }) => {
    return (
        <SearchBarContainer>
            <StyledInput type='text' placeholder='Filter By Name/City/Genre' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            <Button onClick={() => setSearchTerm('')} text='Clear' color='red' backgroundColor='white' />
        </SearchBarContainer>
    )
}

export default SearchBar
