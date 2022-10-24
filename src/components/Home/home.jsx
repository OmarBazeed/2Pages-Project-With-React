import React from 'react'
import {Overlay,Content,Header,H2,Paragraph,Button,TheHome} from './homeStyle'

import Work from '../work/work';
import Portofolio from '../portofolio/Portofolio';
import Profile from '../profile/profile';
import About from '../About/about';
import SocialMedia from '../social media/socialMedia';
import Footer from '../Footer/footer';


const Home = ()=>{

return (

<>
        <div className='homeParent'> 
                <div className='container'>
                        <TheHome>

                                <Overlay></Overlay>

                                <Content>
                                        <Header> Omar Bazeed </Header>   
                                        <H2> Creative Director</H2>
                                        <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic vero non obcaecati veritatis, labore architecto ab nobis distinctio temporibus nostrum tempora adipisci, </Paragraph>
                                        <Button>Let's Begin</Button>
                                </Content>

                        </TheHome>
                </div>
        </div>

        <Work/>
        <Portofolio />
        <Profile />
        <About />
        <SocialMedia />
        <Footer />

</>

)

}
export default Home;

// الحمد لله حمداً ملئ السموات و الارض 
// الحمد لله حمداً طيباً مباركاُ فيه
// الحمد لله عدد ما كان و عدد ما يكون و عدد الحركات و السكون
// الحمد لله حمداً كثيراً
// الحمد لله حتى يرضى و الحمد لله عند الرضى و الحمد لله بعد الرضى
// الحمد لله حمداً تطيب به النفوس
// الحمد لله حتى يبلغ الحمد منتهاه