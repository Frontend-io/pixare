import React, { useEffect, useState } from 'react';
import './search-form.css'
import { searchingEnd, searching } from '../../../container/redux/actions/search-action/search-action-creator';


const SearchForm = (props)=>{

    const { dispatch } = props
    const [searchTerm, setSearchTerm ] = useState('')

    const searchHandler = (e)=>{
        setSearchTerm(e.target.value)
    }
    const beginSearch = (e)=>{
        e.preventDefault()
        dispatch(searching(searchTerm, 20))
        setSearchTerm('')
    }




    return(
        <form onSubmit={beginSearch}> 
            <div className=" relative no-wrap align-c grid field">
                <input 
                    onChange={searchHandler}
                    value = {searchTerm}
                    autoComplete="off"
                    name="searchImage" 
                    placeholder="What are you looking for?" 
                    className="form-fix" 
                />
                <i type='submit' className='grey-t absolute material-icons'>search</i>
            </div>
        </form>
    )
}



export default SearchForm