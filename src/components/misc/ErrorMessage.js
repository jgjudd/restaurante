import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

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

ErrorMessage.propTypes = {
    text: PropTypes.string.isRequired
}