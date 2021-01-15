import React from 'react'

const SearchBar = ({ searchTerm, setSearchTerm }) => {
    return (
        <div>
            <input type='text' placeholder='Filter By Name/City/Genre' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            <button onClick={() => setSearchTerm('')}>X</button>
      </div>
    )
}

export default SearchBar
