import React from 'react';
import "./gallery.css"
import { Logo } from '../Common/header/header';
import Dropdown from '../widget/dropdown/dropdown';
import Photo from '../widget/photo/photo';

export const Void = ()=>{
    const styles = {
        marginTop: 30
    }

    return(
        <div style={styles} className="grid col grey-t centered-text void">
            <Logo black />
            <h2>An error occurred</h2>
            <p>Sorry we couldn't fetch your content</p>
        </div>
    )
}
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
   const { isLoading, photo} = props.state
   const { photos } = photo
   
    

    return(
        <div className="gallery">
            <Topbar {...props}/>
                {
                    photos !== null && !isLoading ?  
                        <div className="container">
                            <div className='wrapper'>
                                {
                                    photos.map( (photo, index) =>{
                                        const { id, photographer, src:{portrait}, liked } = photo
                                       return(
                                        // SIMULATE MANSORY LAYOUT BY VARYING HEIGHT
                                           index % 2 == 0 ?
                                            <Photo id={id} author={photographer} image={portrait} liked={liked} key={id}/>
                                            :
                                            <Photo height='400px' id={id} author={photographer} image={portrait} liked={liked} key={id}/>
                                       )
                                    })
                                }
                            </div>
                        </div>
                    : 
                    !isLoading && <Void />
                }
                
        </div>
    )
    
}


export default Gallery