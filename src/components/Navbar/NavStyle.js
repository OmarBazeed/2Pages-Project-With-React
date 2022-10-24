import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavSection = styled.div `
display: flex;
align-items: center;
height: 75px;
justify-content: space-around;
background: linear-gradient(to right, #03a9f4c2, #ff57227d);
`


export const Logo = styled.h1 `
    perspective: 1000px;
    border-radius: 10px;
    width: fit-content;
    position: relative;

    &:before{
            position: absolute;
            height: 37px;
            top: 4px;
            left: 0;
            content: '';
            width: 0;
            background: #f4433693;
            z-index: -1;
            transition: .5s;
            border-radius: 10px;
    }

    &:hover::before{
        width:100%
    }
`



export const MainAnchor = styled.a `
    color: white;
    text-shadow: 0 0 5px #2196f3;
    cursor: pointer;
    text-decoration: none;
    
`

export const Anchor = styled.a `
text-decoration: none;
color: white;
transition: .5s;
cursor:pointer;
`
export const ListItem = styled.li `
    display: inline-block;
    margin-right: 10px;
    padding: 5px;
    color: white;
    font-size: 20px;

    &:hover ${Anchor}{
        color: black;
    }
`
export const UnorderdList = styled.ul `
    list-style-type: none;

    @media(max-width:570px){
        display:none;
    }

    &.show{
        display:block;
        background: #ff572278;
        z-index: 200;
        position: absolute;
        top: 59px;
        height: 285px;
        text-align: left;
        font-weight: bold;
        left: 0;
        width: 113px;

        ${ListItem}{
        display:block;
        font-weight:bold;
        }
    }
`





export const NewNavLink = styled(NavLink).attrs({
    activeclassname: 'active',
})
`
text-decoration: none;
color: white;
transition: .5s;

&.active{
    border-bottom: 2px solid rgb(52, 150, 241);
    color: black !important;
}

&:hover{
    color: black;
}
`

export const Toggle = styled.div `
width: 30px;
height: 30px;
display:none;
cursor:pointer;

@media(max-width:570px){
    display:block;
}
`

export const Span = styled.span `
display:block;
width:100%;
height:3px;
background:white;
margin-top:5px;
`