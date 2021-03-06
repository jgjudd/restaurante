import React, { useContext } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { ThemeContext } from '../../context/ThemeContext'

const TableHeader = ({ sortObject, handleSort }) => {
    const color = useContext(ThemeContext)
    
    const HeaderRow = styled.tr`
    font-size: 2.5rem;
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;
    background-color: ${color};
    color: white;
    border: 1px solid ${color};
    cursor: pointer;
    
    & th {
        padding: .5rem;
    }
    & th.currentSortHeader {
        background-color: white;
        color: ${color};
    }
`
const Icon = styled.i`
    margin-right: 1rem;
    float: right;
`
    const TH = ({ headerName }) => {
        return (
            <th 
                role="columnheader" 
                className={ sortObject.sortField === headerName ? 'currentSortHeader' : '' }
                onClick={() => handleSort(headerName)}
            >
                { headerName[0].toUpperCase() + headerName.slice(1, headerName.length) } 
                { sortObject.sortField === headerName && sortObject.direction === 'ascending' ? 
                    <Icon className="fa fa-chevron-down" aria-hidden="true"></Icon>
                    : 
                    ''
                }
                { sortObject.sortField === headerName && sortObject.direction === 'descending' ?
                    <Icon className="fa fa-chevron-up" aria-hidden="true"></Icon>
                    : 
                    ''
                } 
            </th>
        )
    }

    return (
        <thead>
            <HeaderRow role='row'>
                <TH headerName='name' />
                <TH headerName='city' />
                <TH headerName='state' />
                <TH headerName='telephone' />
                <TH headerName='genre' />
            </HeaderRow>
        </thead>
    )
}

export default TableHeader

TableHeader.propTypes = { 
    sortObject: PropTypes.object.isRequired, 
    handleSort: PropTypes.func.isRequired
}
