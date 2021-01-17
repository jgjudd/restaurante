import React from 'react'
import Button from './Button'
import styled from 'styled-components'

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const StyledSelect = styled.select`
    font-size: 2rem;
`

const SelectItemsPerPage = ({ itemsPerPage, setItemsPerPage }) => {
    return (
      <SelectContainer>
        <label id='items-per-page-dropdown-label'>Max Items Per Page:</label>
        <div>
          <StyledSelect  
            aria-labelledby='items-per-page-dropdown-label' 
            value={itemsPerPage} 
            onChange={(e) => setItemsPerPage(e.target.value)}
        >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </StyledSelect>
        </div>
      </SelectContainer>
    )
}

export default SelectItemsPerPage
