import React from 'react';
import { Route, Switch, Redirect} from 'react-router-dom'
import Home from '../../component/home/home'
import View from '../../component/view-image/view';
import Collections from '../../component/collection/collection';
// import Dashboard from '../../component/dashboard/dashboard';


const RouterMain = ()=>(
    <React.Fragment>
         <Switch>
            <Route exact path="/home" component={ Home } />
            <Route exact path="/view" component={ View } />
            <Route exact path="/collections" component={ Collections } />
            <Redirect from="/" exact to="/home" component={ Home } />
            <Redirect from="*" exact to="/" component={ Home } />
        </Switch>
    </React.Fragment>
)

export default RouterMain