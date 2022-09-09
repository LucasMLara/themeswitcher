import styled from 'styled-components'

export const Container = styled.header`

display:flex;
align-items:  center;
justify-content: space-around;
height: 7em;
width: 100vw;
color: #fff;
background-color: ${props => props.theme.colors.primary};
`