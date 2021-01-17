import React from 'react'
import styled from 'styled-components'

const HeaderRow = styled.tr`
    font-size: 2.5rem;
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;
    background-color: red;
    color: white;
    border: 1px solid red;
    cursor: pointer;
    
    & th.currentSortHeader {
        background-color: white;
        color: red;
    }
`
const Icon = styled.i`
    margin-right: 1rem;
    float: right;
`

const TableHeader = ({ sortObject, handleSort }) => {

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
