import React from 'react'
import styled from 'styled-components'

const StyledToolbar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 1rem;
`

const ToolbarSection = (props) => {
    return (
        <StyledToolbar>
            {props.children}
        </StyledToolbar>
    )
}

export default ToolbarSection
