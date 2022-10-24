import styled from "styled-components";


export const Main = styled.div `
background: url('../../images/10.jpg');
height: 100vh;
background-attachment: fixed;
background-size: cover;
position:relative;
`
export const Form = styled.form `
position:absolute;
top:50%;
left:50%;
transform:translate(-50%,-50%)
`
export const Myinput = styled.input `
display: block;
padding: 15px 20px;
background: transparent;
border: 1px solid tomato;
margin-top: 20px;
width: 100%;
color:white;
box-shadow:0 0 5px 3px gray;
border-radius: 10px;
font-size:20px;
text-transform:capitalize;

&:focus{
outline:none;
}

&:invalid{
animation: shaking 1s 1 linear;
}

&::placeholder{
    color:black;
}

@keyframes shaking{

    0%,100%{
    transform:translate(0);
    }
    50%{
    transform:translate(10px);
    filter:blur(1px);
    }
    75%{
    transform:translate(-10px);
    filter:blur(2px);
    }
    
}
`

export const Mytext = styled.textarea `
display: block;
margin-top: 20px;
width: 100%;
height: 100px;
padding: 5px 20px;
border:none;
background: linear-gradient(45deg, #ff5722cf, #9e9e9ebd);
font-size: 20px;
text-transform: capitalize;
resize:none;

&:focus{
outline:none;
}
`
export const Button = styled.button `
padding: 10px 20px;
background: linear-gradient(to right,#03a9f4 ,#009688);
font-size: 20px;
border-radius: 10px;
color: white;
border: none;
width: 100%;
margin-top: 20px;
transition:.5s;
cursor:pointer;

&:focus{
outline:none;
}

&:hover{
transform:scale(1.1);
}
`