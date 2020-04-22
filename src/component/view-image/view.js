import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import "./view.css"
import Related from './related-images/related-image';



export const img = "https://i.pinimg.com/originals/42/2b/8c/422b8ca6e34541b58c75dd1d8431e872.jpg"

const View = (props)=>{
    const [ fullView, setFullView ] = useState(false)
    // Toggle full view
    const toggleView = ()=>{
        fullView ? setFullView(false) : setFullView(true)
    }
    const view = fullView ? "fullscreen" : "";
    const icon = fullView ? "fullscreen_exit" : "fullscreen"
    
    
    return(
        <div className="view">
            {
                !fullView && 
                <div className='grid apart view-detail'>
                    <div>
                        <span>Children swimming in the waters</span>
                        <div className="no-wrap align-c grid author">
                            <h3>By Alhamad Mustapha</h3> in 
                            <NavLink to={"/"} className="blue-t">Nature</NavLink>
                            <i className="link material-icons">favorite_border</i>
                        </div>
                    </div>
                    <button className="red">Download</button>
                </div>
            }
            <div className={ `container ${view}` } >
                <div className='view-content'>
                    <div className="img-cont">
                        <i  onClick={toggleView} className="fullscreen material-icons">{icon}</i>
                        <img src={img} alt={""} />
                    </div>
                    <p className="view-extra">
                        Captured on Nikon 5FS Pro
                    </p>
                </div>

                {/* RELATED IMAGES */}
                {
                    !fullView &&
                    <Related intro />
                }
            </div>
        </div>
    )
}

export default View