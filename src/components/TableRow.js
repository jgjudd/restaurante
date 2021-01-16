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
                <Header>
                    <th onClick={() => handleSort('name')}>Name</th>
                    <th onClick={() => handleSort('city')}>City</th>
                    <th onClick={() => handleSort('state')}>State</th>
                    <th onClick={() => handleSort('telephone')}>Telephone</th>
                    <th onClick={() => handleSort('genre')}>Genre</th>
                </Header>
            ) : (
                <Row>
                    <td>{restaurant.name}</td>
                    <td>{restaurant.city}</td>
                    <td>{restaurant.state}</td>
                    <td>{restaurant.telephone}</td>
                    <td>{restaurant.genre}</td>
                </Row>
            )
        }
        </React.Fragment>
    )
}

export default TableRow
