// import axios from 'axios';
// import React,{useState,useEffect} from 'react';
import React from 'react';
import {H1,Info,ListOne,Li,ListTwo,Anchor,Data,Skills,H2,Paragraph,PSkill} from './profileStyle'

function Profile(props){

//*-* ==> We Don't Have An API Or JSON File For This Component So Don't Have To Use Hooks( useState,useEffect ) But We Wrote The Informations As A Revsion... 

// const [data,setData] = useState([]);

// useEffect(()=>{
//     axios.get('http://myjson.dit.upm.es/api/bins/3v76').then(res=>{
//         setData(res.data.profile)
//     })
// },[])

// const Show = data.map((el)=>{
//     return (
//     )
// })


    return(
        <>
        <H1> My Profile </H1>

<div className='container'>
    <Data>

        <Info>
            <ListOne >
                <Li>Name</Li>
                <Li>Birthday</Li>
                <Li>Adress</Li>
                <Li>Phone</Li>
                <Li>Email</Li>
                <Li>WebSite</Li>
            </ListOne>

            <ListTwo >
                <Li second>Omar</Li>
                <Li second>29/12/1194</Li>
                <Li second>Mansourah</Li>
                <Li second>1234567</Li>
                <Li second>omar@gmail.com</Li>
                <Li><Anchor href="hhtps://google.com">Google</Anchor></Li>
            </ListTwo>
        </Info>

        <Skills>
            <H2>Some Skills</H2>
            <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ducimus amet veniam ab natus quisquam ex tempore corrupti vero rem</Paragraph>

            <PSkill data-num="100%" >Html</PSkill>
            <PSkill data-num="80%">Css</PSkill>
            <PSkill data-num="90%">Javascript</PSkill>
        </Skills>
    </Data>
</div>
        </>
    )
}

export default Profile;