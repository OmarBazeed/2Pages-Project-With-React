import React,{useState,useEffect} from "react";
import axios from "axios";
import { Main ,H1,Div1,Div2,P,Content,Icon} from "./socialStyle";


const SocialMedia = ()=>{

    const [social,setSocial] = useState([]);

    useEffect(()=>{
        axios.get('http://myjson.dit.upm.es/api/bins/4qwu').then(res=>{
            setSocial(res.data.social)
        })
    },[])

    const Add = social.map((el)=>{
        return(

            <Content key={el.id} num={el.id}>

                <Div1>
                <Icon className={el.icon}></Icon>  
                </Div1>

                <Div2>
                <P>{el.title}</P>
                <P>{el.body}</P>
                </Div2>

            </Content>
        )
    })

    return(
        <>
            <H1> Social Media</H1>

            <div className="container">
            <Main>
                {Add}
            </Main>
            </div>
            
        </>
    )
}

export default SocialMedia;