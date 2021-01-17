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
        <label for='state-dropdown'>Max Items Per Page:</label>
        <div>
          <StyledSelect name="state-dropdown" value={itemsPerPage} onChange={(e) => setItemsPerPage(e.target.value)}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </StyledSelect>
        </div>
      </SelectContainer>
    )
}

export default SelectItemsPerPage
