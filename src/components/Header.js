import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Label from './misc/Label'

const Header = ({ title, theme, setTheme }) => {
    const StyledHeader = styled.header`
        width: 100vw;
        height: 10vh;
        background-color: ${theme};
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
                    <option value="rgb(220,20,60)">Red</option>
                    <option value="rgb(25,25,112)">Blue</option>
                    <option value="rgb(0,128,0)">Green</option>
                    <option value="rgb(75,0,130)">Purple</option>
                    <option value="rgb(0,0,0)">Black</option>
                </select>
            </ThemeSection>
        </StyledHeader>
    )
}

export default Header

Header.propTypes = {
    setTheme: PropTypes.func.isRequired
}
Header.defaultProps = { 
    title: 'Restaurante',
    theme: 'red'
} 
