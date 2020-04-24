import React, { useEffect, useState } from 'react';
import "./landing.css";
import { randNum } from '../../utilities/randID';
import SearchForm from '../widget/search-form/search-form';


const Landing = (props)=>{
    const [ready, setReady] = useState('')

    const { state: { photo : {photos} } } = props
    let randomBackground = randNum(photos)
    useEffect(()=>{
        setReady(randomBackground)
    }, [photos])

    
    
    
    const landingImage = {
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, .08), rgba(0, 0, 0, .3)),url(${ready})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
    }
    return(
        <div style={landingImage} className="landing">
            <div className='intro'>
                <span>You love beautify photos?</span>
                <h2>Explore a collection of stock photos by Pexels</h2>
            </div>
            <div className="search-form">   
                <SearchForm {...props} />
            </div>
        </div>
    )
}


export default Landing