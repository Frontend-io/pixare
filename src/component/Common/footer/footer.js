import React from 'react';
import { connect } from 'react-redux'
import "./footer.css"
import { withRouter } from "react-router-dom"


const Footer = ( props )=>{
    const { location:{pathname}, state: {photos} } = props
    const route = pathname.split('/')[1]
    const style={
       plain: {
        borderTop: "1px solid #eee",
        padding: "20px",
        marginTop: "100px",
        zIndex: 999,
        background: "#fff"
       },
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
    const extraClass = route === "collections" ? "halve" : ""

    


    return(
       <React.Fragment>
           {
               route !== "view" &&
              <React.Fragment>
                   {
                        route === "home" ?
                            photos === null ?
                                <footer style={style.plain} className="grid centered footer">
                                    <div className="grid col loader">
                                        <p className="no-margin">Loading...</p>
                                        <h3 className="no-margin">Pexels</h3>
                                    </div>
                                </footer>
                            :
                            <footer style={style.themed} className={`grid footer ${extraClass}`} >
                                <div>
                                    <span>Pixare</span><br />
                                    Powered by <b>Pexels</b>
                                </div>
                            </footer>
                        : 
                        <footer style={style.themed} className={`grid footer ${extraClass}`} >
                            <div>
                                <span>Pixare</span><br />
                                Powered by <b>Pexels</b>
                            </div>
                        </footer>
                    }
                   
                   
                    

              </React.Fragment>
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