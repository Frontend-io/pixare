import React, { useEffect, useState } from 'react';
import "./landing.css";
import { randNum } from '../../utilities/randID';
import SearchForm from '../widget/search-form/search-form';


const Landing = (props)=>{
    const [imageDetail, setImageDetail] = useState({
        background: '',
        author: ''
    })

    const { state: { photo : {photos} } } = props

    const { image, author } = randNum(photos) !== null ? randNum(photos) : '' 
    useEffect(()=>{
        setImageDetail({
            background: image,
            author
        })
    }, [photos])

    
    
    
    const landingImage = {
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, .1), rgba(0, 0, 0, .3)),url(${imageDetail.background})`,
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
                <p className='grid align-c centered'><b> {imageDetail.author}</b></p>
            </div>
        </div>
    )
}


export default Landing