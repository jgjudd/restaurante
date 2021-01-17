import React from 'react'
import styled from 'styled-components'

const Icon = styled.i`
    font-size: 48px; 
    color: red;
    animation: spin 2s linear infinite;

    @keyframes spin {
    0%  { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
    } 
`

const Loading = () => {
    return <Icon className="fa fa-circle-o-notch"></Icon>
}

export default Loading
