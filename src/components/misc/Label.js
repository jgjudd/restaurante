import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Label = ({ id, text, color }) => {
    const StyledLabel = styled.label`
        color: ${color};
        font-size: 2rem;
        margin: 1rem 0 1rem 0;
    `
    
    return (
        <StyledLabel id={id}>{text}</StyledLabel>
    )
}

export default Label

Label.propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}
Label.defaultProps = { 
    color: 'grey'
}