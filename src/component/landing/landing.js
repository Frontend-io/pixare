import React from 'react';
import "./landing.css";

const image = "https://i.pinimg.com/originals/7a/2e/e4/7a2ee4491e1c030b9063b6dc3fb08584.png"

const landingImage = {
    backgroundImage: `linear-gradient(to right, rgba(0, 0, 200, .5), rgba(100,0, 0, .5)),url(${image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
}
const Landing = (props)=>{


    return(
        <div style={landingImage} className="landing">
            <div className='intro'>
                <span>You love beautify photos?</span>
                <h2>Explore a collection of stock photos by Pexels</h2>
            </div>
            <div className="search-form">   
                <form> 
                    <div className=" relative no-wrap align-c grid field">
                        <input 
                            name="searchImage" 
                            placeholder="What are you looking for?" 
                            className="form-fix" 
                        />
                        <i className='grey-t absolute material-icons'>search</i>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Landing