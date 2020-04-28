import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import "./view.css"
import Void from '../widget/void-content/void';
import { findMatch, addFav } from '../../container/redux/actions/photo-action/photo-action-creator';
import Related from '../widget/related-images/related-image';
import parseTitle from '../../utilities/parseTitle';
import Loader from '../widget/loader/loader';



const View = (props)=>{
    const { dispatch, state: { photo: { message, loading, photos, favPhotos, favPreview } }, match: {params : {id :currentImage }} } = props
    const { photographer, url, src } = favPreview || {}
    const { portrait } = src || {}
    
    
    const title = parseTitle(url)
    const [ fullView, setFullView ] = useState(false)

    // Toggle full view
    const toggleView = ()=>{
        fullView ? setFullView(false) : setFullView(true)
    }
    const view = fullView ? "fullscreen" : "";
    const icon = fullView ? "fullscreen_exit" : "fullscreen"
    const setIcon = ()=>{

        for( let i in favPhotos ){
            let index = favPhotos[i]
            if(parseInt(index.id) === parseInt(currentImage)){
                return true
            }else{
            return false
            }
            
        }
    }
    var favStatus = setIcon() ? 'favorite' : 'favorite_border'
    useState(()=>{
        favStatus = setIcon() ? 'favorite' : 'favorite_border'
    }, [favPhotos])

  



    // FETCH PHOTO FOR RELATED IMAGES

    useEffect(()=>{
        dispatch(findMatch(currentImage))
    }, [currentImage, dispatch])

    const handleEvent = ()=>{
        dispatch(addFav(favPreview))
    }


    // FETCH FOR PREVIEW
    
    
    
    return(
        <React.Fragment>
            {
                favPreview && !loading  && 
                    <div className="view">
                    {
                        !fullView && 
                        <div className='grid apart view-detail'>
                            <div>
                                <span className='title'>{title}</span>
                                <div className="no-wrap align-c grid author">
                                    <h3>By {photographer}</h3> in 
                                    <span to={"/"} className="blue-t">Nature</span>
                                    <i onClick={handleEvent} style={{color: setIcon() ? 'red' : null}} className="link material-icons">{favStatus}</i>
                                </div>
                            </div>
                            <button className="red">Download</button>
                        </div>
                    }
                        <div className={ `container ${view}` } >
                            <div className='view-content'>
                                <div className="img-cont">
                                    <i  onClick={toggleView} className="fullscreen material-icons">{icon}</i>
                                    <img src={portrait} alt={""} />
                                </div>
                                <p className="view-extra">
                                    Captured on Nikon 5FS Pro
                                </p>
                            </div>
            
                            {/* RELATED IMAGES */}
                            {
                                !fullView &&
                                <Related withIntro data={photos} />
                            }
                        </div>
                    </div> 
            }
            {
                loading && <Loader />
            }
            {
                !favPreview && !loading && 
                <Void error={message}/>
            }
        </React.Fragment>
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
export default connect(mapStateToProps, mapDispatchToProps)(View)