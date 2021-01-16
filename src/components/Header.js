import React from 'react'
import styled from 'styled-components'

const HeaderSection = ({ title, color, backgroundColor }) => {
    const StyledHeader = styled.header`
        width: 100vw;
        height: 10vh;
        background-color: ${backgroundColor};
        color: ${color};
        font-size: 4rem;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        padding-left: 2rem;
    `

    return <StyledHeader>{title}</StyledHeader>
}

export default HeaderSection
