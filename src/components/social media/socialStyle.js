import styled from "styled-components";

export const Main = styled.div `
display:flex;
justify-content:space-between;
align-items:center;
flex-wrap:wrap;
`

export const H1 = styled.h1 `
color:red;
`
export const Content = styled.div `
display:flex;
justify-content:start;
align-items:center;
background:${props=> props.num === 1 ? "#0000ff75" : props.num === 2 ? "#2196f3d9" : "#ff5722d1"};
flex-basis: 300px;
padding:0 20px;
margin:7px auto;
border-radius: 15px;
`
export const Div1 = styled.div `
height: 60px;
width: 50px;
background: aqua;
line-height: 70px;
border-radius: 20px;
margin-right:20px;
`
export const Div2 = styled.div `
text-align:left;
font-size:18px;
`
export const P = styled.p `
`
export const Icon = styled.i `
font-size:40px;

`