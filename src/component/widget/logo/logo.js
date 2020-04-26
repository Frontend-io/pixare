import React from 'react';




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
            {
                props.loading ? 
                <span style={styles.span} className="no-margin">Loading</span>
                :
                <span style={styles.span} className="no-margin">ixare</span>
            }
        </div>
    )
}


export default Logo