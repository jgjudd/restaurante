import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Row = styled.tr`
    font-size: 2rem;
    &:nth-child(even){background-color: #f2f2f2;}
    &:hover {background-color: #ddd;}

    & td {
        padding: 1rem;
    }
    & td.telephone {
        min-width: 15rem;
        text-align: center;
    }
    & td.state {
        text-align: center;
    }
`

const TableRow = ({ restaurant }) => {
    return (
        <Row role='row'>
            <td role='cell'>{restaurant.name}</td>
            <td role='cell'>{restaurant.city}</td>
            <td role='cell' className='state'>{restaurant.state}</td>
            <td role='cell' className='telephone'>{restaurant.telephone}</td>
            <td role='cell'>{restaurant.genre}</td>
        </Row>
    )
}

export default TableRow

TableRow.propTypes = {
    restaurant: PropTypes.object.isRequired
}