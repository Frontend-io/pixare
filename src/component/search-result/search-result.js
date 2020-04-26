import React from 'react'
import './search-result.css'
import Related from '../widget/related-images/related-image';


const SearchResult = (props)=>{
    const { state: { search: { result, isSearching } } } = props

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


    return(
        <React.Fragment>
            {
                isSearching &&
                <div style={styles.wrapper} className="searchResult">
                    <div style={styles.head}>
                        Search Results for
                    </div>
                    <Related data={result} />
                </div>
            }
        </React.Fragment>
    )
}

export default SearchResult