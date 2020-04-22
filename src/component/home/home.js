import React from 'react';
import './home.css'
import Landing from '../landing/landing';
import Gallery from '../gallery/gallery';


const Home = ()=>{

    return(
       <React.Fragment>
            <Landing />
            <Gallery />
       </React.Fragment>
    )
}
export default Home