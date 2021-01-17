import React from 'react'
import styled from 'styled-components'

const PageNumbers = ({ itemsPerPage, totalItems, setCurrentPage }) => {
    const pageNumbers = []

    for(let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div>
            {
                pageNumbers.map(item => (
                    <button 
                        aria-label={`Navigate to page ${item}`}
                        onClick={() => setCurrentPage(item)}
                    >
                        {item}
                    </button>
                ))
            }
        </div>
    )
}

export default PageNumbers
