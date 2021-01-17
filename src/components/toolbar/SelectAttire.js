import React, { useContext } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { ThemeContext } from '../../context/ThemeContext'

import Button from '../misc/Button'
import Label from '../misc/Label'

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const StyledSelect = styled.select`
    font-size: 2rem;
`

const SelectAttire = ({ attireFilter, setAttireFilter, setCurrentPage }) => {
    const color = useContext(ThemeContext)

    const handleChange = (value) => {
      setCurrentPage(1)
      setAttireFilter(value)
    } 
    return (
      <SelectContainer>
        <Label id='attire-dropdown' text='Filter By Dress Code: ' color='grey' />
        <div>
          <StyledSelect 
            aria-labelledby="attire-dropdown" 
            value={attireFilter} 
            onChange={(e) => handleChange(e.target.value)}
          >
            <option value="All">All</option>
            <option value="casual">Casual</option>
            <option value="business casual">Business Casual</option>
            <option value="smart casual">Smart Casual</option>
            <option value="formal">Formal</option>
          </StyledSelect>
          <Button 
            onClick={() => handleChange('All')} 
            text='Reset' 
            color={color} 
          />
        </div>
      </SelectContainer>
    )
}

export default SelectAttire

SelectAttire.propTypes = {
  setAttireFilter: PropTypes.func.isRequired, 
  setCurrentPage: PropTypes.func.isRequired
}
SelectAttire.defaultProps = { 
  attireFilter: 'All'
}