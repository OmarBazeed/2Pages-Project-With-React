import React,{Component} from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './components/Contact/Contact';
import Home from './components/Home/home';
import MyNav from './components/Navbar/Nav';




class App extends Component {

    render(){

    return (

    <div className="App">

    <MyNav />

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
    </Routes>


    </div>

    )
}
}
export default App;
