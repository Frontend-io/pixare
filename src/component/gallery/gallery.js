import React, { useState }from 'react';
import { Link } from 'react-router-dom'
import "./gallery.css"

const Topbar = ()=>{
    const wrapper = {
        borderBottom: "1px solid #eee",
        color: "#555",
        background: "#fff",
        fontSize: "1.5em"
    }
    const select = {
        minWidth: "30%",
        fontSize: "1rem",
        color: "inherit", 
    }

    return(
        <div style={wrapper} className="padded-10 grid grey-t around topBar">
            <span className="black-t ">Trending photos</span>
            <select className="padded-5" style={select}>
                <option>Entertainment</option>
                <option>Children</option>
                <option>Terrain</option>
            </select>
        </div>
    )
}

export const Photo = (props)=>{
    const user = "https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/01/15/11/rexfeatures-5885988bd.jpg"
    const image = !props.image ? "https://scx2.b-cdn.net/gfx/news/hires/2019/2-nature.jpg" : props.image
    const styles = {
        wrapper:{
            marginBottom: 15,
            border: "1px solid #eee",
            background: "#ddd",
            maxWidth: "450px"
        },
        head:{
            color: "#222"
        },
        image: {
            objectFit: "cover",
            marginBottom: "-5px"
        }
    }
    const [ fav, setFav ] = useState(false)
    const addFav = ()=>{
        fav ? setFav(false) : setFav(true)
    }

    const icon = fav ? "favorite" : "favorite_border"
    const favClass = fav ? "favorite" : ""



    return(
        <Link>
            <div style={styles.wrapper} className="photo">
                <div style={styles.head} className="no-wrap white padded-10 align-c grid apart photo-head">
                    <div className="no-wrap align-c grid author">
                        <img src={user} alt="image" height="30" width="30" style={{borderRadius: 100}} />    
                        <p>Alhamad Mustapha</p>  
                    </div>
                    <i onClick={addFav} className={`link material-icons ${favClass}`} >{icon}</i>
                </div>
                <img src={image} alt='image' style={styles.image}/>
            </div>
        </Link>
    )
} 


const Gallery = (props)=>{
    

    return(
        <div className="gallery">
            <Topbar />
            <div className="container">
                <div className='wrapper'>
                    <Photo height="700" image="https://i.pinimg.com/originals/42/2b/8c/422b8ca6e34541b58c75dd1d8431e872.jpg"/>
                    <Photo height="700" image="https://i.pinimg.com/originals/42/2b/8c/422b8ca6e34541b58c75dd1d8431e872.jpg"/>
                    <Photo />
                    <Photo height="700" image="https://i.pinimg.com/originals/42/2b/8c/422b8ca6e34541b58c75dd1d8431e872.jpg"/>
                    <Photo />
                    <Photo />
                    <Photo height="400" image="https://i.pinimg.com/originals/c2/5b/9d/c25b9dd1ae1888b1714f8b2c0888a50c.jpg"  />
                    <Photo />
                    <Photo />
                    <Photo height="700" image="https://i.pinimg.com/originals/42/2b/8c/422b8ca6e34541b58c75dd1d8431e872.jpg"/>
                   
                </div>
            </div>
        </div>
    )
    
}

export default Gallery