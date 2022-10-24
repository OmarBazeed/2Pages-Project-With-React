import styled from "styled-components";


export const Content = styled.div `
display:flex;
flex-wrap:wrap;
margin:auto;
justify-content:center;
perspective:900px;
`
export const Image = styled.img `
width:450px;
height:300px;
border:1px solid gray;
box-shadow:0 0 5px 2px black;
margin:5px 10px 5px 0;
transition:.5s;
transform-style:preserve-3d;
border: ${ props => props.first === 1 ? "2px solid #00a8ff":"1px solid gray"};

&:hover{
    transform:rotateY(5deg) translateX(10px);
}
@media (max-width:425px){
    width:300px;
    margin:auto;
    margin-bottom:5px;
}
`

export const UnorderdList = styled.ul `
list-style-type:none;
`
export const ListItem = styled.li `
display:inline-block;
padding:10px;
border:1px solid black;
margin-right:5px;
font-size:1.3em;
font-weight:bold;
margin-bottom:5px;

background:${props => props.active ? "tomato":""}

`