import React from "react";
import {AllAbout,H1,Content,Header,H2,Paragraph,Main} from './aboutStyle'

const About = ()=>{


    return(

        <>
        <H1>About</H1>

        <AllAbout>
            <div className="container">
                <Main>
                    <Content>
                        <Header> Omar Bazeed </Header>   
                        <H2> Creative Director</H2>
                        <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic vero non obcaecati veritatis, labore architecto ab nobis distinctio temporibus nostrum tempora adipisci, </Paragraph>
                        <Paragraph second>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic vero non obcaecati veritatis, labore architecto ab nobis distinctio temporibus nostrum tempora adipisci, </Paragraph>
                    </Content>
                </Main>
            </div>

        </AllAbout>
        </>
    )
}

export default About;