import React,{useState,useEffect}  from 'react';
import axios from 'axios';

import {Image,Content,UnorderdList,ListItem} from './portofolioStyle'


const Portofolio = ()=> {

// This Is The Principle Of Hooks ( الى هو انك تستعمل الاستيت و اللايف سايكل بتاع الكومبوننت زى (الكومبوننت ديد مونت و الكومبوننت ديد ابديت و الريترن و الريندر و غيره )  فى الفانكشن بييزد كومبوننت ) By Calling ( useState , useEffect ) ==> From Reat Library Cause ..
// 1- useState --> Which Enables Us To Use setState({}) Like class Based Component And It Happens Like This ( const [ your array variable(imgs) , set Your variable(setImgs) ] = useState([]--> It Is The Initial Value Of Your Variable Imgs ) ) Ok ...
// 2- useEffect --> Which Enables Us To Use componentDidMount() Function And It Happens Like This ( useEffect(()=> { Any Function Or Code You Want And You Have To Use The Method ( useState(Imgs) ) Or Use axios.get().then() To Set The State And By This You Modified The Images Array Variable } , []) ) Ok...

const [images,setImages] = useState([]);

useEffect( () => {

    // We Can Use The Site --> ((My JSON)) To Convert Our Own JSON File To A Link Or URL Have A Real API 
    axios.get('https://myjson.dit.upm.es/api/bins/3v76').then(res =>{
        setImages(res.data.portfolio) 
    })

},[])



const Final = images.map((el)=>{
    return(
        <Image key={el.id} src={el.image} alt="image" first={el.id}  />
    )
})

        return(
            <>

            <h1> Our Potofolio </h1>

            <UnorderdList>

                <ListItem active>All</ListItem>
                <ListItem>Html</ListItem>
                <ListItem>Css</ListItem>
                <ListItem>Javascript</ListItem>
                <ListItem>React</ListItem>
            </UnorderdList>

            <Content>
            {Final}
            </Content>

            </>
        )

};

export default Portofolio;