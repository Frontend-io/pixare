import React from 'react';
import Logo from '../logo/logo';

const Loader = ()=>{
        
    const styles = {
        // borderTop: "1px solid #eee",
        padding: "20px",
        marginTop: "100px",
        zIndex: 999,
        background: "#fff"
    }


    return(
        <div style={styles} className="grid centered loader">
            <div className="grid col loader">
                {/* <p className="no-margin">Loading...</p> */}
               <Logo loading black />
            </div>
        </div>
    )
}


export default Loader