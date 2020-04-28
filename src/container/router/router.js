import React from 'react';
import { Route, Switch, Redirect} from 'react-router-dom'
import Home from '../../component/home/home'
import View from '../../component/view-image/view';
import Collections from '../../component/collection/collection';
import { ProtectedRoute } from './protectedRoute';


const RouterMain = ()=>(
    <>
        <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/home" component={ Home } />
            <Route exact path="/view/:id" component={ View } />
            <ProtectedRoute  exact path="/collections" component={ Collections } />
            <Redirect from="*" exact to="/" component={ Home } />
        </Switch>
    </>
)

export default RouterMain