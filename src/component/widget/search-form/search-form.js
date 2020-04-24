import React, { useEffect, useState } from 'react';
import './search-form.css'
import { searchingBegin, searchingEnd, searching } from '../../../container/redux/actions/search-action-creator';


const SearchForm = (props)=>{

    const { dispatch } = props
    const [searchTerm, setSearchTerm ] = useState('')

    const searchHandler = (e)=>{
        setSearchTerm(e.target.value)
    }

    useEffect(()=>{
        searchTerm.length > 0 ?
            dispatch(searching(searchTerm, 10))
        :
            dispatch(searchingEnd())
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



export default SearchForm