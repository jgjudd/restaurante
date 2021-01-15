import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
    width: 100vw;
    height: 10vh;
    background-color: red;
    color: white;
    font-size: 4rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding-left: 2rem;
`

const HeaderSection = ({ title }) => {
    return <StyledHeader>{title}</StyledHeader>
}

export default HeaderSection

