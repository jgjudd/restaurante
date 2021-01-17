import React from 'react'
import styled from 'styled-components'

const Label = ({ text, color }) => {
    const StyledLabel = styled.label`
        color: ${color};
        font-size: 2rem;
        margin: 1rem 0 1rem 0;
    `
    
    return (
        <StyledLabel>{text}</StyledLabel>
    )
}

export default Label
