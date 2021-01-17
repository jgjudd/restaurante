import React from 'react'
import styled from 'styled-components'

const ButtonRow = styled.div`
    display: flex;
    justify-content: center; 
    margin: 1rem;
    padding: 1rem;
`
const Button = styled.button`
    margin-right: 1rem;
    background-color: white;
    color: red; 
    padding: .5rem 1.5rem .5rem 1.5rem;
    border: .1rem solid red;
    border-radius: 2rem;
    font-size: 1.5rem;

    outline: 0;

    &.activeButton {
        color: white;
        background-color: red;
    }
`


const PageNumbers = ({ itemsPerPage, totalItems, currentPage, setCurrentPage }) => {

    const pageNumbers = []

    for(let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <ButtonRow>
            {
                pageNumbers.map(item => (
                    <Button
                        className={ currentPage === item ? 'activeButton' : ''} 
                        aria-label={`Navigate to page ${item}`}
                        onClick={() => setCurrentPage(item)}
                    >
                        {item}
                    </Button>
                ))
            }
        </ButtonRow>
    )
}

export default PageNumbers
