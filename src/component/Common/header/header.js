import React from 'react';
import "./header.css"

export const Logo = (props)=>{

    const styles = {
        box: {
            height: ' 30px' ,
            width: ' 30px ' ,
            background: `${ props.black ? '#aaa' : 'var(--primary-color)' } `,
            textAlign: 'center',
            boxSizing: ' border-box ',
            padding: ' 1px 0px 0px 2px ', 
            color: `${ props.black ? '#eee' : 'white' } `,
        },
        span: {
            paddingLeft: ' 2px ',
            color: `${ props.black ? '#555' : 'white' } `,

        }
    }

    return(
        <div className="full-width padded-10 grid centered align-c logo">
            <h2  style={styles.box} className="no-margin">P</h2>
            <span style={styles.span} className="no-margin">ixare</span>
        </div>
    )
}

const Header = ()=>{


    return(
        <header>
           <Logo />
        </header>
    )
}

export default Header