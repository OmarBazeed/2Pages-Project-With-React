import styled from 'styled-components';



export const Mywork = styled.div `
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap:wrap;
    margin-top:20px
`

export const Paragraph = styled.p ` 
    color: #777;
`

export const Div = styled.div `
    border: 1px solid black;
    box-shadow: 0 0 5px 0 black;
    max-width:400px;
    padding: 5px;
    background: #e0e0e0d6;
    position: relative;
    overflow: hidden;
    margin-top:10px;

    &:before{
        position: absolute;
        width: 16px;
        height: 30px;
        color: white;
        top: 70%;
        right: 31%;
        background: black;
        transition: .7s;
        font-size: 20px;
        font-weight: bold;
        z-index: 100;
        content: attr(data-number);
        border-radius: 7px;
    }

    &:hover:before{
        box-shadow: 0 0 0 400px #ff572240;
    }
    &:hover ${Paragraph}{
        color:#00a8ff;
    }
    
`

export const Image = styled.img `
    max-width: 100%;
    
    &:last-of-type{
        height:368px
    }
`


export const H2 = styled.h2 ` 
    color: tomato;
    width: 130px;
    margin: auto;
    background-color: black;
    padding: 5px;
    border-radius: 5px;
`

export const H1 = styled.h1 `
position: relative;
margin: auto;
width: -webkit-fit-content;
width: -moz-fit-content;
width: fit-content;
-webkit-text-stroke: 2px black;
color: transparent;
font-size: 3rem;
overflow:hidden;


&:before{
    content:attr(data-text);
    color:#00a8ffa1;
    position:absolute;
    bottom:0;
    left:0;
    width:100%;
    height:100%;
    animation: waving infinite 5s linear;


    @keyframes waving {
        0%{
            height:0 
        }
        10%{
            height:10% 
        }

        20%{
            height:20% 
        }
        30%{
            height:30% 
        }
        40%{
            height:40% 
        }
        50%{
            height:50% 
        }
        60%{
            height:60% 
        }
        70%{
            height:70% 
        }
        80%{
            height:80% 
        }
        90%{
            height:90%;
        }
        100%{
            height:100%;

        }
    }
}
`