import React, { useState } from 'react'

const Table = ({ restaurants, genre = ''}) => {
    console.log(typeof(genre) + ": " + genre)

    const [sortObject, setSortObject] = useState({ sortField: 'name', direction: 'ascending' })

    const handleSort = (sortField) => {
        let direction = 'ascending';
        if (sortObject.sortField === sortField && sortObject.direction === 'ascending') {
            direction = 'descending';
        }
        setSortObject({ sortField, direction });
    }

    const filterByGenre = () => {
        // TODO: Break up search terms so they can be entered in any order,
        //       in order to allow for multiple, non-consecutive search terms
        if (genre === '') {
            return [...restaurants]
        } else {
            let searchTerm = genre.toLowerCase().trim()
            return [...restaurants].filter(restaurant => (
                restaurant.genre.toLowerCase().includes(searchTerm))
            )
        }
    }
    const filteredList = filterByGenre()
    const restaurantList = filteredList.sort((a, b) => {
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
                    <td><button onClick={() => handleSort('name')}>Name</button></td>
                    <td><button onClick={() => handleSort('city')}>City</button></td>
                    <td><button onClick={() => handleSort('state')}>State</button></td>
                    <td><button onClick={() => handleSort('telephone')}>Telephone</button></td>
                    <td><button onClick={() => handleSort('genre')}>Genre</button></td>
                </tr>
            </thead>
            <tbody>
                {
                    restaurantList.map((restaurant, i ) => (
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
