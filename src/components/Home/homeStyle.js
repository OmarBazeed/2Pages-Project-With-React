import styled from 'styled-components'

export const Button = styled.button `
    padding: 10px;
    border: none;
    background-color: tomato;
    color: white;
    font-size: 20px;
    cursor: pointer;
    border-radius: 10px;
    transform-style: preserve-3d;
    transition: .5s;
    box-shadow: 0 0 5px 0 gray;

`

export const TheHome = styled.div `
    height: 50vh;
    position: relative;
    text-align:center;

    &:hover ${Button}{
        transform: scale(1.1) rotate(360deg);
    }

`
export const Overlay = styled.div `
    position: absolute;
    top: 0;
    left: 0;
    height: 100% ;
    width: 100% ;
    background: rgb(33 150 243 / 22%);
`

export const Content = styled.div `
    position: absolute;
    top: 40% ;
    left: 50% ;
    transform: translate(-50% , -40% );
    perspective: 1000px;
    width: 80%;
`

export const Header = styled.h1 `
    color: white;
`

export const H2 = styled.h2 `
    color: tomato;
`

export const Paragraph = styled.p `
    color: white;
    font-size:20px;

    @media (max-width:425px){
        font-size: 16px;
    }
`