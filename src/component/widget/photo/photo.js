import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { addFav } from '../../../container/redux/actions/photo-action/photo-action-creator';
import findFav from '../../../utilities/favoritePhotoFinder';
import parseTitle from '../../../utilities/parseTitle';


const Photo = (props)=>{
    const { dispatch, data: { id, photographer, url, height, src:{portrait} }, state: { favPhotos } } = props
    const title = parseTitle(url) || null
    const currentImage = props.data
    const isFav = findFav(favPhotos, currentImage)

    const styles = {
        wrapper:{
            marginBottom: 15,
            background: "#ddd",
            maxWidth: "450px",
            minHeight: ' 400px'
        },
        head:{
            color: "#fff"
        },
        image: {
            objectFit: "cover",
            width: '100%',
            marginBottom: "-5px",
            // VARY HEIGHT TO SIMULATE MANSORY LAYOUT
            height:  height >= 3000 ? `${(height * 10)/100}px` : '',
            minHeight: '420px'
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
       
        <div title={title} style={styles.wrapper} className="relative photo">
            <div style={styles.head} className="no-wrap white padded-10 align-c grid apart photo-head">
                <p>{photographer}</p>
                <i title={isFav ? 'Remove from Bucket' : 'Add to bucket'} onClick={queueFav} className={`link material-icons ${favClass}`} >{icon}</i>
            </div>
            <Link to={`/view/${id} `}>
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