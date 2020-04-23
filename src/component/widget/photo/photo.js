import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Photo = (props)=>{
    const user = "https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/01/15/11/rexfeatures-5885988bd.jpg"
    const styles = {
        wrapper:{
            marginBottom: 15,
            // border: "1px solid #eee",
            background: "#ddd",
            maxWidth: "450px",
        },
        head:{
            color: "#222"
        },
        image: {
            objectFit: "cover",
            width: '100%',
            marginBottom: "-5px",
            height: props.height ? props.height : ' auto'
        }

    }
    const { author, id, image, liked } = props
    const [ fav, setFav ] = useState(false)
    const addFav = ()=>{
        fav ? setFav(false) : setFav(true)
    }

    const icon = fav ? "favorite" : "favorite_border"
    const favClass = fav ? "favorite" : ""
    



    return(
        <Link to={`view/${id} `}>
            <div style={styles.wrapper} className="photo">
                {/* <div style={styles.head} className="no-wrap white padded-10 align-c grid apart photo-head">
                    <div className="no-wrap align-c grid author">
                        <img src={user} alt="image" height="30" width="30" style={{borderRadius: 100}} />    
                        <p>{author}</p>  
                    </div>
                    <i onClick={addFav} className={`link material-icons ${favClass}`} >{icon}</i>
                </div> */}
                <img src={image} alt='image' style={styles.image}/>
            </div>
        </Link>
    )
} 


export default Photo