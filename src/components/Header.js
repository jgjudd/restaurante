import React from 'react'
import styled from 'styled-components'
import Label from './Label'

const Header = ({ title, backgroundColor, theme, setTheme }) => {
    const StyledHeader = styled.header`
        width: 100vw;
        height: 10vh;
        background-color: ${backgroundColor};
        color: white;
        font-size: 4rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding-left: 2rem;
    `
    const Icon = styled.i`
        padding-right: 2rem; 
    `
    const ThemeSection = styled.div`
        margin-right: 5rem;
        margin-left: 1rem;
    ` 

    return (
        <StyledHeader role='banner'>
            <div>
                <Icon className="fa fa-cutlery" aria-hidden="true"></Icon>        
                {title}
            </div>
            <ThemeSection>
                <Label text='Theme: ' color='white' />
                <select id='select-theme' value={theme} onChange={(e) => setTheme(e.target.value)}>
                    <option value='red'>Red</option>
                    <option value='blue'>Blue</option>
                    <option value='green'>Green</option>
                    <option value='black'>Black</option>
                </select>
            </ThemeSection>
        </StyledHeader>
    )
}

export default Header
