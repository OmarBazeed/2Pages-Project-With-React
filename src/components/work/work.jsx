import React from "react";
import {Mywork,Div,Image,Paragraph,H1,H2}from './workStyle.js';
import image1 from '../../images/1.jpg'
import image2 from '../../images/2.jpg'
import image3 from '../../images/3.jpg'

const Work = ()=>{

    return(
        
<>
            <H1 data-text="My Work">My Work</H1>
            <Mywork>
                    <Div data-number="1">
                        <Image src={image1} alt="good"/>
                        <H2> Mobile Ux</H2>
                        <Paragraph>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat sequi reprehenderit eius modi voluptas quia earum ratione inventore non, saepe ex.</Paragraph>
                    </Div>
                    <Div data-number="2">
                        <Image src={image2} alt="good" />
                        <H2> Mobile Ux</H2>
                        <Paragraph>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat sequi reprehenderit eius modi voluptas quia earum ratione inventore non, saepe ex.</Paragraph>
                    </Div>
                    <Div data-number="3">
                        <Image src={image3} alt="good" />
                        <H2> Mobile Ux</H2>
                        <Paragraph>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat sequi reprehenderit eius modi voluptas quia earum ratione inventore non, saepe ex.</Paragraph>
                    </Div>
            </Mywork>

</>


    )
}

export default Work;