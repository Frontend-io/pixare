import React from 'react';
import { connect } from 'react-redux'
import "./footer.css"
import { withRouter } from "react-router-dom"
import { Logo } from '../../widget/logo/logo';
import Loader from '../../widget/loader/loader';


const Footer = ( props )=>{
    const { location:{pathname}, state: {photo : {photos, loading }} } = props
    const route = pathname.split('/')[1]
    const style={
       themed: {
        borderTop: "1px solid #eee",
        padding: "20px",
        zIndex: 999,
        background: "#222",
        color: "#eee",
        minHeight: "150px",
        marginTop : photos !== null ? '30px' : null
       }
    }
    const extraClass = route === "collections" && photos ? "halve" : ""

    


    return(
       <React.Fragment>
           {
               route !== "home" || 'view' &&
               
               <footer style={style.themed} className={`grid footer ${extraClass}`} >
                    <div>
                        <Logo black />
                        <small>Powered by <b>Pexels</b></small> 
                    </div>
                </footer>

            //   <React.Fragment>
            //        {
            //             // route === "home" ?
            //             //     loading ?
            //             //         <Loader />
            //             //     :
            //             //     photos !== null && 
            //             //     <footer style={style.themed} className={`grid footer ${extraClass}`} >
            //             //         <div>
            //             //             <Logo black />
            //             //             <small>Powered by <b>Pexels</b></small> 
            //             //         </div>
            //             //     </footer>
            //             // : 
                        
            //         }
            //   </React.Fragment>
           }
       </React.Fragment>
    )
}



const mapStateToProps = state =>{
    return{
        state
    }
}
export default connect(mapStateToProps)(withRouter(Footer))