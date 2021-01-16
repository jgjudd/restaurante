import React from 'react'
import Button from './Button'
import styled from 'styled-components'

const SearchBarContainer = styled.div`
    padding: 2rem;
`

const SearchBar = ({ searchTerm, setSearchTerm }) => {
    return (
        <SearchBarContainer>
            <input type='text' placeholder='Filter By Name/City/Genre' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            <Button onClick={() => setSearchTerm('')} text='Clear' color='red' backgroundColor='white' />
        </SearchBarContainer>
    )
}

export default SearchBar
