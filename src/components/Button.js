import React from 'react'
import styled from 'styled-components'



const Button = ({ onClick, text, color }) => {
    const StyledButton = styled.button`
        margin-left: 1rem;
        padding: .5rem 1.5rem .5rem 1.5rem;
        border: .1rem solid ${color};
        border-radius: 2rem;
        font-size: 1.5rem;
        color: ${color};
        background-color: white;
        outline: 0;

        &:hover {
            color: white;
            background-color: ${color};
        }
        &:active {
            color: ${color};
            background-color: white;
            outline: 0;
        }
`
    return <StyledButton onClick={onClick}>{text}</StyledButton>
}

export default Button
