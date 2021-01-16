import React, { useState } from 'react'
import styled from 'styled-components'
import TableRow from './TableRow'


const StyledTable = styled.table`
    
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
`

const TableBody = styled.tbody`
    & tr:nth-child(even) {
        background-color: #eeeeee;
    }
`

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
        <StyledTable>
            {
                restaurantList.length > 0 ? 
                    (<StyledTable>
                        <thead>
                            
                            <TableRow isHeader handleSort={handleSort} />   
                            
                        </thead>
                        <TableBody>
                            {
                                restaurantList.map((restaurant, i ) => (
                                    <TableRow restaurant={restaurant} key={i} />
                                ))
                            }
                        </TableBody>
                    </StyledTable>
                    ) :
                    <span>No Results Were Found That Match That Criteria</span>
            }
        </StyledTable>
    )
}

export default Table
