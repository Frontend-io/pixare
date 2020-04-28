import React, { useEffect } from 'react';
import './home.css'
import { connect } from 'react-redux'
import Landing from '../landing/landing';
import Gallery from '../gallery/gallery';
import { fetchPhoto } from '../../container/redux/actions/photo-action/photo-action-creator';
import SearchResult from '../search-result/search-result';


const Home = (props)=>{
    const { dispatch, state:{ photo: { photos } }} = props
    useEffect(()=>{
        dispatch(fetchPhoto())
    }, [dispatch])

    
    return(
       <React.Fragment>
            {   photos &&
                <Landing {...props} />
            }
            {
                <SearchResult {...props} />
            }
            <Gallery {...props} />
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
export default connect(mapStateToProps, mapDispatchToProps)(Home)