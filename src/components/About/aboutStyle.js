import styled from "styled-components";

export const H1 = styled.h1 `
color:blue;
`
export const Main = styled.div `
display: flex;
justify-content: end;
align-items: center;
height: 50vh;
padding: 10px;
`
export const Content = styled.div `
text-align:left;
color:black;
max-width:500px;
`

export const Header = styled.h2 `
font-weight:bold;
`

export const Paragraph = styled.p `
margin-top:${props => props.second ? "20px" : "10px"}
`
export const H2 = styled(Header)
`
color:tomato;
`

export const AllAbout = styled.div `
background: url('../../images/10.jpg');
background-size:cover;
background-repeat:no-repeat;
background-attachment: fixed;
`