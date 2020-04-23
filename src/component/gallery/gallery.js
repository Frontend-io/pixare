import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import "./gallery.css"
import { fetchPhoto } from '../../container/redux/actions/action-creator';

const Topbar = (props)=>{
    const { dispatch } = props.props
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

    const [category, setCategory] = useState('')
    const handleChange = (e)=>{
        const { value } = e.target
        setCategory(value)
    }
    useEffect(()=>{
        dispatch(fetchPhoto(category))
    }, [category])



    return(
        <div style={wrapper} className="padded-10 grid grey-t around topBar">
            <span className="black-t " style={{textTransform: "capitalize"}}>{category} photos</span>
            <select onChange={handleChange} className="padded-5" style={select}>
                <option selected value="trending">Trending</option>
                <option value="children">Children</option>
                <option value="science">Science</option>
                <option value="africa">Africa</option>
                <option value="covid-19">Covid-19</option>
                <option value="ai">Artificial Intelligence</option>
            </select>
        </div>
    )
}

export const Photo = (props)=>{
    const user = "https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/01/15/11/rexfeatures-5885988bd.jpg"
    // const image = !props.image ? "https://scx2.b-cdn.net/gfx/news/hires/2019/2-nature.jpg" : props.image
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
                <div style={styles.head} className="no-wrap white padded-10 align-c grid apart photo-head">
                    <div className="no-wrap align-c grid author">
                        <img src={user} alt="image" height="30" width="30" style={{borderRadius: 100}} />    
                        <p>{author}</p>  
                    </div>
                    <i onClick={addFav} className={`link material-icons ${favClass}`} >{icon}</i>
                </div>
                <img src={image} alt='image' style={styles.image}/>
            </div>
        </Link>
    )
} 


const Gallery = (props)=>{
    useState(()=>{
        props.dispatch(fetchPhoto("people"))
    }, [])
    const { isLoading, message, photos } = props.state
    

    return(
        <div className="gallery">
            <Topbar props={props}/>
            <div className="container">
                {
                    photos &&
                    <div className='wrapper'>
                        {
                            photos.map(photo=>{
                                const { id, photographer, src:{portrait}, liked } = photo
                                return(
                                    <Photo id={id} author={photographer} image={portrait} liked={liked} key={id}/>
                                )
                            })
                        }
                    </div>
                }
            </div>
        </div>
    )
    
}

const mapStateToProps = state =>{
    return{
        state
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        dispatch: (action)=>{
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Gallery)