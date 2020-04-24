import React, { useEffect } from 'react';
import './home.css'
import { connect } from 'react-redux'
import Landing from '../landing/landing';
import Gallery from '../gallery/gallery';
import { fetchPhoto } from '../../container/redux/actions/action-creator';
import SearchResult from '../search-result/search-result';


const Home = (props)=>{
    const { dispatch, state: {search : { isSearching} } } = props

    useEffect(()=>{
        dispatch(fetchPhoto('Trending'))
    }, [])

    
    return(
       <React.Fragment>
            <Landing {...props} />
            {
                isSearching &&
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