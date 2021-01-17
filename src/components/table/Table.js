import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import TableHeader from './TableHeader'
import TableRow from './TableRow'
import PageNumbers from './PageNumbers'

import ErrorMessage from '../misc/ErrorMessage'

const StyledTable = styled.table`
    margin-top: 2rem;
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    border: 1px solid black;
    width: 100%;
`

const TableBody = styled.tbody`
    & tr:nth-child(even) {
        background-color: #eeeeee;
    }
`

const Table = ({ 
    restaurants, 
    searchTerm, 
    stateFilter, 
    attireFilter, 
    currentPage, 
    setCurrentPage, 
    itemsPerPage }) => {

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

        if (attireFilter === 'All') {
            // eslint-disable-next-line no-self-assign
            result = result
        } else {
            result = result.filter(restaurant => restaurant.attire.toLowerCase() === attireFilter)
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

    const filteredRestaurantList = applyFilters()
    const sortedRestaurantList = filteredRestaurantList.sort((a, b) => {
        if (a[sortObject.sortField] < b[sortObject.sortField]) {
            return sortObject.direction === 'ascending' ? -1 : 1
        }
        if (a[sortObject.sortField] > b[sortObject.sortField]) {
            return sortObject.direction === 'ascending' ? 1 : -1
        }
        return 0
    })

    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const restaurantList = sortedRestaurantList.slice(indexOfFirstItem, indexOfLastItem) 

    return (
        <React.Fragment>
            {
                restaurantList.length > 0 ? 
                    (<React.Fragment>
                        <StyledTable
                            role='table'
                            aria-label='Restaurants Table'
                        >
                            
                            <TableHeader sortObject={sortObject} handleSort={handleSort} />   
                           
                            <TableBody>
                                {
                                    restaurantList.map((restaurant, i ) => (
                                        <TableRow restaurant={restaurant} key={i} />
                                    ))
                                }
                            </TableBody>
                        </StyledTable>
                        <div>
                            <PageNumbers 
                                itemsPerPage={itemsPerPage} 
                                totalItems={sortedRestaurantList.length}
                                currentPage={currentPage} 
                                setCurrentPage={setCurrentPage} 
                            />
                        </div>
                    </React.Fragment>)
                    :
                    <ErrorMessage text='No Results Were Found That Match That Criteria' />
            }
        </React.Fragment>
    )
}

export default Table

Table.propTypes ={
    restaurants: PropTypes.array.isRequired, 
    setCurrentPage: PropTypes.func.isRequired, 
    itemsPerPage: PropTypes.number.isRequired
}
Table.defaultProps = {
    searchTerm: '',
    stateFilter: 'All', 
    attireFilter: 'All', 
    currentPage: 1
}