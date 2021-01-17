import React from 'react'
import styled from 'styled-components'

const Header = styled.tr`
    font-size: 2.5rem;
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;
    background-color: #606a61;
    color: white;
`

const Row = styled.tr`
    font-size: 2rem;
    &:nth-child(even){background-color: #f2f2f2;}
    &:hover {background-color: #ddd;}

    & td {
        padding: 1rem;
    }
`

const TableRow = ({ restaurant, isHeader, handleSort }) => {
    return (
        <React.Fragment>
        {
            isHeader ? (
                <Header role='row'>
                    <th role="columnheader" onClick={() => handleSort('name')}>Name</th>
                    <th role="columnheader" onClick={() => handleSort('city')}>City</th>
                    <th role="columnheader" onClick={() => handleSort('state')}>State</th>
                    <th role="columnheader" onClick={() => handleSort('telephone')}>Telephone</th>
                    <th role="columnheader" onClick={() => handleSort('genre')}>Genre</th>
                </Header>
            ) : (
                <Row role='row'>
                    <td role='cell'>{restaurant.name}</td>
                    <td role='cell'>{restaurant.city}</td>
                    <td role='cell'>{restaurant.state}</td>
                    <td role='cell'>{restaurant.telephone}</td>
                    <td role='cell'>{restaurant.genre}</td>
                </Row>
            )
        }
        </React.Fragment>
    )
}

export default TableRow
