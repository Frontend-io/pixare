import React from 'react'
import { useSelector }  from 'react-redux' 
import { Route, Redirect } from "react-router-dom"


export const ProtectedRoute = ( {component: Component, ...rest }) => {

    const state = useSelector(state=>{
        return{
            state
        }
    })

    

    return(
        <Route 
            {...rest}
            render = {props =>{
                if(2+3 === 5) {
                    return <Component {...props} />
                }else{
                    return <Redirect to={
                        {
                            pathName: "/",
                            state: {
                                from: props.location
                            }
                        }
                    }/>
                }
            }}
        />
    )
}