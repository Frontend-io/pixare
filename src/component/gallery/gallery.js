import React from 'react';
import "./gallery.css"
import Dropdown from '../widget/dropdown/dropdown';
import Photo from '../widget/photo/photo';
import Void from '../widget/void-content/void';
import randID from '../../utilities/randID';
import Loader from '../widget/loader/loader';


const Topbar = (props)=>{

    const { state: { photo : {category} } } = props
    const wrapper = {
        borderBottom: "1px solid #eee",
        position: 'sticky',
        top: 0, 
        color: "#555",
        background: "#fff",
        fontSize: "1.5em",
        transition: '.3s',
    }

    const categories = [
        { title: 'Trending', value: 'trending' },
        { title: 'Nature', value: 'nature' },
        { title: 'Education', value: 'education' },
        { title: 'Health', value: 'health' },
        { title: 'AI', value: 'artificail intelligence' },
        { title: 'Football', value: 'football' },
        { title: 'Wild', value: 'wild' },
        { title: 'Science', value: 'science' },
        { title: 'Sport', value: 'sport' },
        { title: 'Adult', value: 'adult' },
        { title: 'Animations', value: 'animals' },
        { title: 'Military', value: 'military' },
        { title: 'Defense', value: 'defence' },
        { title: 'Religion', value: 'religion' },
        { title: 'Music', value: 'music' },
        { title: 'Business', value: 'business' },
        
    ]



    return(
        <div style={wrapper} className="padded-10 grid grey-t around align-c topbar">
            <span className="black-t " style={{textTransform: "capitalize"}}>{category} photos</span>
            <Dropdown {...props} type="list" data={categories} />
        </div>
    )
}


const Gallery = (props)=>{
   const { state: { photo: { loading, photos, message }, search: {isSearching} } } = props
      
   
   

    return(
        <div className="gallery">
            <Topbar {...props}/>
                {
                    photos && loading === false &&
                    <div className="container">
                        <div style={{ filter: isSearching ? 'blur(5px)' : null}} className='wrapper'>
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
                    loading === true && <Loader black='true' />
                }
                {
                    !photos && loading === false && <Void error={message} />
                }
                
        </div>
    )
    
}


export default Gallery