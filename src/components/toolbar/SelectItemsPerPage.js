import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Label from '../misc/Label'

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const StyledSelect = styled.select`
  width: 100%;
  font-size: 2.3rem;
`

const SelectItemsPerPage = ({ itemsPerPage, setItemsPerPage, setCurrentPage }) => {

    const handleChange = (value) => {
      setCurrentPage(1)
      setItemsPerPage(value)
    }

    return (
      <SelectContainer>
        <Label id='items-per-page-dropdown-label' text='Max Items Per Page: ' color='grey' />
        <div>
          <StyledSelect  
            aria-labelledby='items-per-page-dropdown-label' 
            value={itemsPerPage} 
            onChange={(e) => handleChange(e.target.value)}
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

SelectItemsPerPage.propTypes = {
  setItemsPerPage: PropTypes.func.isRequired, 
  setCurrentPage: PropTypes.func.isRequired
}
SelectItemsPerPage.defaultProps = { 
  itemsPerPage: 10
}
