import React, { useState } from 'react'

const Table = ({ restaurants }) => {
    const [sortObject, setSortObject] = useState({ sortField: 'name', direction: 'ascending' })
    
    const handleSort = (sortField) => {
        let direction = 'ascending';
        if (sortObject.sortField === sortField && sortObject.direction === 'ascending') {
            direction = 'descending';
        }
        setSortObject({ sortField, direction });
    }

    const sortedRestaurants = [...restaurants].sort((a, b) => {
        if (a[sortObject.sortField] < b[sortObject.sortField]) {
            return sortObject.direction === 'ascending' ? -1 : 1
        }
        if (a[sortObject.sortField] > b[sortObject.sortField]) {
            return sortObject.direction === 'ascending' ? 1 : -1
        }
        return 0
    })

    return (
        <table>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>City</td>
                    <td><button type='button' onClick={() => handleSort('state')}>State</button></td>
                    <td>Telephone</td>
                    <td>Genre</td>
                </tr>
            </thead>
            <tbody>
                {
                    sortedRestaurants.map((restaurant, i ) => (
                        <tr key={i}>
                            <td>{restaurant.name}</td>
                            <td>{restaurant.city}</td>
                            <td>{restaurant.state}</td>
                            <td>{restaurant.telephone}</td>
                            <td>{restaurant.genre}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default Table
