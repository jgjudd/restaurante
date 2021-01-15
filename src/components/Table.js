import React, { useState } from 'react'

const Table = ({ restaurants, searchTerm = '', stateFilter }) => {
    console.log(typeof(searchTerm) + ": " + searchTerm)

    const [sortObject, setSortObject] = useState({ sortField: 'name', direction: 'ascending' })

    const handleSort = (sortField) => {
        let direction = 'ascending';
        if (sortObject.sortField === sortField && sortObject.direction === 'ascending') {
            direction = 'descending';
        }
        setSortObject({ sortField, direction });
    }

    const applyFilters = () => {
        let result;
        if (stateFilter === 'All') {
            result = [...restaurants]
        } else {
            result = [...restaurants].filter(restaurant => restaurant.state === stateFilter)
        }
        // TODO: Break up search terms so they can be entered in any order,
        //       in order to allow for multiple, non-consecutive search terms
        if (searchTerm !== '') {
            let term = searchTerm.toLowerCase().trim()
            result = result.filter(restaurant => (
                restaurant.name.toLowerCase().includes(term) |
                restaurant.city.toLowerCase().includes(term) |
                restaurant.genre.toLowerCase().includes(term)
            ))
        }
        return result
    }

    const filteredList = applyFilters()
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
        <React.Fragment>
            {
                restaurantList.length > 0 ? 
                    (<table>
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
                    ) :
                    <span>No Results Were Found That Match That Criteria</span>
            }
        </React.Fragment>
    )
}

export default Table
