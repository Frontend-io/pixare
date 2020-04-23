import React, { useEffect, useState } from 'react';
import "./landing.css";
import { randNum } from '../../utilities/randID';
import { searchingBegin, searchingEnd } from '../../container/redux/actions/search-action-creator';

export const SearchForm = (props)=>{
    const { dispatch } = props

    const [searchTerm, setSearchTerm ] = useState('')
    const searchHandler = (e)=>{
        const { value } = e.target
        setSearchTerm(value)

        // Ready search result onfocus
        if( value.length ){
            dispatch(searchingBegin())
        }else{
            dispatch(searchingEnd())
        }
    }

    useEffect(()=>{
        searchTerm !== "" &&
        dispatch(searchingBegin())
    }, [searchTerm])
    
    return(
        <form> 
            <div className=" relative no-wrap align-c grid field">
                <input 
                    onFocus = {searchHandler}
                    onChange={searchHandler}
                    value = {searchTerm}
                    autoComplete="off"
                    name="searchImage" 
                    placeholder="What are you looking for?" 
                    className="form-fix" 
                />
                <i className='grey-t absolute material-icons'>search</i>
            </div>
        </form>
    )
}


const Landing = (props)=>{
    const { state: { photo : {photos} } } = props
    const randomBackground = randNum(photos)

    useEffect(()=>{
        console.log(photos)
    },[photos])

    console.log('changing')
       
    
    const landingImage = {
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 200, .08), rgba(0, 0, 200, .1)),url(${randomBackground})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
    }
    return(
        <div style={landingImage} className="landing">
            <div className='intro'>
                <span>You love beautify photos?</span>
                <h2>Explore a collection of stock photos by Pexels</h2>
            </div>
            <div className="search-form">   
                <SearchForm {...props}/>
            </div>
        </div>
    )
}

export default Landing