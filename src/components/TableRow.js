import React from 'react'
import styled from 'styled-components'

const Row = styled.tr`
    font-size: 2rem;
    &:nth-child(even){background-color: #f2f2f2;}
    &:hover {background-color: #ddd;}

    & td {
        padding: 1rem;
    }
`

const TableRow = ({ restaurant }) => {
    return (
        <Row role='row'>
            <td role='cell'>{restaurant.name}</td>
            <td role='cell'>{restaurant.city}</td>
            <td role='cell'>{restaurant.state}</td>
            <td role='cell'>{restaurant.telephone}</td>
            <td role='cell'>{restaurant.genre}</td>
        </Row>
    )
}

export default TableRow
