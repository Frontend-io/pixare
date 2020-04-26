import React, { useEffect } from 'react';
import "./collection.css"
import { connect } from 'react-redux'
import { img } from '../view-image/view';
import Void from '../widget/void-content/void';
import Related from '../widget/related-images/related-image';
import { emptyFav, addFav } from '../../container/redux/actions/photo-action/photo-action-creator';

const Collections = (props)=>{
    const { dispatch, state: { photo: { message, favPhotos } } } = props
    const { id, photographer, url, src:{portrait} }  = favPhotos[0]
    const title = url.split("/")[4].split('-').join(' ')
    
    // Empty fav list
    const clearFav = (e)=>{
        e.target.innerText = 'Emptying Bucket...'

        setTimeout(()=>{
            dispatch(emptyFav())
        }, 1000)
    }
    const handleRemove = ()=>{
        dispatch(addFav(id))
    }
    
    
    


    return(
        <React.Fragment>
            {
                favPhotos ? 
                <React.Fragment>
                    <div className="grid apart align-c -width content-head">
                        <div className="">
                            <h2>My Bucket</h2>
                            <label className="red-t"> You currently have {favPhotos.length} pictures</label>
                        </div>
                        {
                            favPhotos.length ?
                            <button onClick={clearFav} className="red">
                                Empty Backet
                            </button>
                            : null                            
                        }
                    </div>
                    <div className="collections">
                        <div className="action-tab">
                           {
                               favPhotos.length &&
                               <React.Fragment>
                                   <div className="grey-t title">
                                        <label>{title} by <b className='blue-t'>{photographer}</b> </label> 
                                    </div>
                                    <div className="specimen">
                                        <img src={portrait} alt={title} />
                                    </div>
                                    <div className="action">
                                        <button onClick={handleRemove} className="full-width">Remove favourite</button>
                                        <button className="full-width">Download</button>
                                    </div>
                               </React.Fragment>
                           }
                        </div>
                        <div className={`collection-content ${favPhotos.length ? 'column' : ''}`}>
                            {
                                favPhotos.length ? 
                                <Related data={favPhotos}/>
                                : <Void empty="true" />
                            }
                        </div>
                    </div>
                </React.Fragment>
                :
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
export default connect(mapStateToProps, mapDispatchToProps)(Collections)