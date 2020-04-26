import React from 'react';
import "./gallery.css"
import Dropdown from '../widget/dropdown/dropdown';
import Photo from '../widget/photo/photo';
import Void from '../widget/void-content/void';
import randID from '../../utilities/randID';
import Loader from '../widget/loader/loader';
import findFav from '../../utilities/favoritePhotoFinder';

const Topbar = (props)=>{
   
    const { state: { photo : {category} } } = props
    const wrapper = {
        borderBottom: "1px solid #eee",
        position: 'sticky',
        top: 0, 
        color: "#555",
        background: "#fff",
        fontSize: "1.5em"
    }

    const categories = [
        { title: 'Trending', value: 'trending' },
        { title: 'Nature', value: 'nature' },
        { title: 'Artificial Intelligence', value: 'ai' },
        { title: 'Science', value: 'science' },
        { title: 'Sport', value: 'sport' }
    ]



    return(
        <div style={wrapper} className="padded-10 grid grey-t around align-c topbar">
            <span className="black-t " style={{textTransform: "capitalize"}}>{category} photos</span>
            <Dropdown {...props} type="list" data={categories} />
        </div>
    )
}


const Gallery = (props)=>{
   const { state: { photo: { loading, photos } } } = props
   
   


    return(
        <div className="gallery">
            <Topbar {...props}/>
                {
                    photos && !loading  && 
                    <div className="container">
                        <div className='wrapper'>
                            {
                                photos.map( (photo, index) =>{
                                    return(
                                        <Photo data={photo} index={index} key={randID()}/>
                                    )
                                })
                            }
                        </div>
                    </div>
                }
                {
                    loading && <Loader />
                }
                
        </div>
    )
    
}


export default Gallery