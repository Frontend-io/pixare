import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { addFav } from '../../../container/redux/actions/photo-action/photo-action-creator';
import findFav from '../../../utilities/favoritePhotoFinder';


const Photo = (props)=>{
    const { dispatch, data: { id, photographer, url, height, src:{portrait} }, index, state: { favPhotos } } = props
    const title = url.split("/")[4].split('-').join(' ')
      // SIMULATE MANSORY LAYOUT BY VARYING HEIGHT
    const resize = index % 2 === 0
    const currentImage = props.data

    const isFav = findFav(favPhotos,currentImage)
    const styles = {
        wrapper:{
            marginBottom: 15,
            background: "#ddd",
            maxWidth: "450px",
        },
        head:{
            color: "#fff"
        },
        image: {
            objectFit: "cover",
            width: '100%',
            marginBottom: "-5px",
            // VARY HEIGHT TO SIMULATE MANSORY LAYOUT
            height:  height >= 4000 ? height/12 : height/6
        }

    }
    
    const [ fav, setFav ] = useState(false)
    const queueFav = ()=>{
        fav ? setFav(false) : setFav(true)
        // Add to favorite photos 
        dispatch(addFav(currentImage))
    }
    
    

    const icon = fav || isFav ? "favorite" : "favorite_border"
    const favClass = fav || isFav ? "favorite" : ""
    



    return(
       
            <div style={styles.wrapper} className="relative photo">
                <div style={styles.head} className="no-wrap white padded-10 align-c grid apart photo-head">
                    <p>{photographer}</p>
                    <i title={isFav ? 'Remove from Bucket' : 'Add to bucket'} onClick={queueFav} className={`link material-icons ${favClass}`} >{icon}</i>
                </div>
                <Link to={`view/${id} `}>
                    <img src={portrait} alt={photographer} style={styles.image}/>
                </Link>
            </div>
    )
} 



const mapStateToProps = state =>{
    return{
        state: state.photo
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        dispatch: (action)=>{
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Photo)