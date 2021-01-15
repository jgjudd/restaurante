import React from 'react'
import styled from 'styled-components'

const StyledTable = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 1rem;
`

const TableSection = (props) => {
    return (
        <StyledTable>
            {props.children}
        </StyledTable>
    )
}

export default TableSection
