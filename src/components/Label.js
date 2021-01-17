import React from 'react'
import styled from 'styled-components'

const StyledLabel = styled.label`
    color: grey;
    font-size: 2rem;
    margin: 1rem 0 1rem 0;
`

const Label = ({ text }) => {
    return (
        <StyledLabel>{text}</StyledLabel>
    )
}

export default Label
