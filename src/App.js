import React, { Component } from 'react';
import "./App.css"
import RouterMain from './container/router/router';
import Header from './component/Common/header/header';
import Footer from './component/Common/footer/footer';
import Navigation from './component/Common/navigation/navigation';
import { Provider } from "react-redux"
import store from './container/redux/store/store';


class App extends Component{


    render(){
        return(
           <Provider store={store}>
                <React.Fragment>
                    <Header />
                    <RouterMain />
                    <Navigation />
                    <Footer />
                </React.Fragment>
           </Provider>
        )
    }
}

export default App