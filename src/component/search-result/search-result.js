import React from 'react'
import './search-result.css'
import Related from '../widget/related-images/related-image';
import { searchingEnd } from '../../container/redux/actions/search-action/search-action-creator';


const SearchResult = (props)=>{
    const { dispatch, state: { search: { result, searchTerm, isSearching } } } = props

    const styles = {
        wrapper: {
            results: 'column-count: 2',
            padding: ' 0px 20px 20px 20px',
            margin: '20px auto',
            borderBottom: '1px solid #eee'
        },
        head: {
            textAlign: 'center',
            fontSize: '20px',
            marginBottom: '20px',
            color: '#222'
        }
    }
    const handleClick = ()=>{
        dispatch(searchingEnd())
    }

    return(
        <React.Fragment>
            {
               result && isSearching ?
                <div style={styles.wrapper} className="searchResult">
                    {
                        isSearching && result.length &&
                        <div style={styles.head}>
                            Search Results for <b>{searchTerm.toUpperCase()}</b> | <span onClick={handleClick} className='link red-t'>Close Search</span>
                        </div>
                    }
                    {
                        isSearching ? <Related data={result} /> 
                        :
                        isSearching && result.length && <h3 style={{minHeight: 100}} className='centered-text'>Sorry, your search didn't return any match</h3>
                    }
                </div>
                : null
            }
        </React.Fragment>
    )
}

export default SearchResult