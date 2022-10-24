import styled from 'styled-components';

export const H1 = styled.h1 `
font-family:monospace;
font-size:2rem;
`

export const Info = styled.div `
display:flex;
justify-content:center;
align-items:center;
flex-basis:30%;
margin:auto;
`
export const ListOne = styled.ul `
list-style-type:none;
font-weight:bold;
text-align:left;
`

export const ListTwo = styled(ListOne)
`
font-weight:normal;
`

export const Anchor = styled.a `
text-decoration:none;
color:tomato;
`
export const Li = styled.li `
display:block;
margin-top:10px;
color:${(props) => props.second ? "#2196f3" : "initial"}
`
export const Data = styled.div `
display:flex;
justify-content:space-between;
align-items:center;
flex-wrap:wrap;
`
export const Skills = styled.div `
text-align:left;
flex-basis:50%;
margin:auto;
`
export const H2 = styled.h2 `
font-weight:bold;
`
export const Paragraph = styled.p `
color:#777;
`
export const PSkill = styled.p `
font-family:monospace;
position:relative;
display:block;
width:100%;
margin-top:30px;
font-weight:bold;
font-size:20px;


&:before{
    position: absolute;
    top:0;
    left:100%;
    content:attr(data-num);
    font-weight:bold;
}

&:after{
    position: absolute;
    top:calc(100% + 10px);
    left:0;
    width:${props => props["data-num"] ? `${parseInt(props["data-num"])}%` : null };
    background:linear-gradient(to left, tomato,transparent);
    height:10px;
    content:'';
    border-radius: 5px;
}

`