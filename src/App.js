import React, { Component } from 'react';
import "./App.css"
import RouterMain from './container/router/router';
import Header from './component/Common/header/header';
import Footer from './component/Common/footer/footer';
import Navigation from './component/Common/navigation/navigation';


class App extends Component{


    render(){
        return(
            <React.Fragment>
                <Header />
                <RouterMain />
                <Navigation />
                <Footer />
            </React.Fragment>
        )
    }
}

export default App