import React from 'react';
import {Main,Form,Myinput,Mytext,Button} from './contactStyle';


const Contact = ()=> {

const done = (e)=>{
    e.preventDefault();
}

return (
    <Main onSubmit={done} >
        <div className='container'>
                <Form>
                    <Myinput type="text" placeholder="Enter Your Name" pattern='[a-zA-z]' />
                    <Myinput type="password" placeholder="Enter Your Pass" pattern='[0-9]' />
                    <Myinput type="subject" placeholder="Enter Your subjects" />
                    <Mytext placeholder='Enter Your Message' /> 
                    <Button type="submit">Submit</Button>
                </Form>
        </div>
    </Main>
    )

}
export default Contact;