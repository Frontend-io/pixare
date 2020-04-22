import React, { useState } from 'react';
import { Link, withRouter } from "react-router-dom"
import "./navigation.css"


const Navigation = ()=>{
    const [ navOpen, setNav ] = useState(false)
    const toggler = (e)=>{
        navOpen ? setNav(false) : setNav(true)
    }
    const icon = navOpen ? "close" : "menu"
    
    return(
        <React.Fragment>
            {
                navOpen && 
                <div onClick={toggler} className="overlay"></div>
            }
            <div className="fixed navigation">
                {
                    navOpen &&
                    <nav className="lines nav">
                        <li className="grid apart ">
                            <span>Favorites</span>
                            <span className="red-t">323</span>
                        </li>
                        <Link onClick={toggler} to={"/collections"}>
                            <i className="material-icons">person_outline</i> 
                            <span>My Bucket</span>
                        </Link>
                        <Link onClick={toggler} to="">
                            <i className="material-icons">cloud</i>
                            <span>Downloaded</span>
                        </Link>
                        <Link onClick={toggler} to={"/view"}>
                        <i className="material-icons">link</i>
                            <span>View</span>
                        </Link>
                        <Link onClick={toggler} to="">
                            <i className="material-icons">list</i>
                            <span>Categories</span>
                        </Link>
                        <li className="grey-t">
                            <b className="black-t">Pixare</b> <br />
                            <small>Powered by Pexels</small>
                        </li>                                
                    </nav>
                }
                <i onClick={toggler} className="menu material-icons">{icon}</i>
            </div>
        </React.Fragment>
    )
}


export default withRouter(Navigation)