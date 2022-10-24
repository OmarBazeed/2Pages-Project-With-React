import React,{Component} from 'react'
import {NavSection,Logo,Anchor,UnorderdList,ListItem,MainAnchor,NewNavLink,Toggle,Span} from './NavStyle';

class MyNav extends Component {


    handleClick=()=>{
        document.querySelector("[list='true']").classList.toggle("show");
    }

    render(){

    return (
<>
    <div className='First-container'>

                <NavSection >

                        <Logo>
                            <MainAnchor href='https://google.com' target="_blanck"> React Course </MainAnchor> 
                        </Logo>

                        <UnorderdList list="true">
                            <ListItem>
                                <NewNavLink to="/" > Home </NewNavLink>
                            </ListItem>
                            <ListItem>
                                <Anchor href="#"> Work </Anchor>
                            </ListItem>
                            <ListItem>
                                <Anchor href="#"> Portofolio </Anchor>
                            </ListItem>
                            <ListItem>
                                <Anchor href="#"> Profile </Anchor>
                            </ListItem>
                            <ListItem>
                                <Anchor href="#"> Social-Media </Anchor>
                            </ListItem>
                            <ListItem>
                                <NewNavLink to="/Contact" > Contact </NewNavLink>
                            </ListItem>
                            <ListItem>
                                <Anchor hraf="#"> Footer </Anchor>
                            </ListItem>
                        </UnorderdList>

                        <Toggle onClick={this.handleClick}>
                            <Span></Span>
                            <Span></Span>
                            <Span></Span>
                        </Toggle>
                        
                </NavSection>
                
        </div>
    </>

    )
}
}
export default MyNav;
