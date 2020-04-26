import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../logo/logo'





export const Void = (props)=>{
    const { empty, error } = props
    const styles = {
        paddingTop: 100,
        minHeight: '280px',
        display: 'flex',
        minHeight: ' 55vh'
    }

    return(
        <div style={styles} className="grid col grey-t centered-text void">
            <Logo black />
           {
                error && <h2>A {error} occurred</h2> 
           }
           {
               !error && !empty && <h2>Something went wrong</h2>
           }
           {
               empty && <p>You have not added any photos to your bucket! <br />
               <Link className="blue-t" to={'/home'}>Start adding...</Link></p>
           }
            {
                !empty && <p>Sorry we couldn't load your content, please try again!</p>
            }
        </div>
    )
}

export default Void