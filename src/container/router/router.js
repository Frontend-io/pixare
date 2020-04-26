import React from 'react';
import { Route, Switch, Redirect} from 'react-router-dom'
import Home from '../../component/home/home'
import View from '../../component/view-image/view';
import Collections from '../../component/collection/collection';
import { ProtectedRoute } from './protectedRoute';


const RouterMain = ()=>(
    <React.Fragment>
         <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/home" component={ Home } />
            <Route  path="/view/:id" component={ View } />
            <ProtectedRoute  exact path="/collections" component={ Collections } />
            <Redirect from="/view" exact to="/" component={ Home } />
            <Redirect from="*" exact to="/" component={ Home } />
        </Switch>
    </React.Fragment>
)

export default RouterMain