import React from 'react'
import styled from 'styled-components'

const StyledTable = styled.div`

`

const TableSection = (props) => {
    return (
        <StyledTable>
            {props.children}
        </StyledTable>
    )
}

export default TableSection
