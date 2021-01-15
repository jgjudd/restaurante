import React from 'react'
import styled from 'styled-components'

const StyledRow = styled.tr`
    font-size: 2rem;
`

const TableRow = ({ restaurant }) => {
    return (
        <StyledRow>
            <td>{restaurant.name}</td>
            <td>{restaurant.city}</td>
            <td>{restaurant.state}</td>
            <td>{restaurant.telephone}</td>
            <td>{restaurant.genre}</td>
        </StyledRow>
    )
}

export default TableRow
