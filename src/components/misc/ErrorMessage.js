import React from 'react'
import styled from 'styled-components'

const StyledSpan = styled.span`
    color: red; 
    font-size: 3rem;
`

const ErrorMessage = ({ text }) => {
    return (
        <StyledSpan>{text}</StyledSpan>
    )
}

export default ErrorMessage
