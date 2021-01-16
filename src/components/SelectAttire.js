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

const SelectAttire = ({ attireFilter, setAttireFilter }) => {
    return (
      <SelectContainer>
        <label for='state-dropdown'>Filter By Dress Code:</label>
        <div>
          <StyledSelect name="state-dropdown" value={attireFilter} onChange={(e) => setAttireFilter(e.target.value)}>
            <option value="All">All</option>
            <option value="casual">Casual</option>
            <option value="business casual">Business Casual</option>
            <option value="smart casual">Smart Casual</option>
            <option value="formal">Formal</option>
          </StyledSelect>
          <Button onClick={() => setAttireFilter('All')} text='Reset' color='red' backgroundColor='white' />
        </div>
      </SelectContainer>
    )
}

export default SelectAttire
