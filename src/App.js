
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BackgroundLoader from './BackgroundLoader';
import Login from "./Component/Login/View/Login";
import Logout from "./Component/Logout/View/Logout";
import Home from "./Component/Home//View/Home";
import { StateProvider } from './Context';
import ErrorBoundary from './ErrorBoundary';
import './font-awesome/css/font-awesome.css';
import PrivateRoutes from './PrivateRoutes';




class App extends Component {

  componentDidCatch(err) {
    
    this.props.history.push({
      pathname: '/',
    });
  }

  render() {
    return (

      <ErrorBoundary>
        <React.Suspense fallback={<BackgroundLoader />}>
        <StateProvider>
         <BrowserRouter >
       <Switch>
       <Route exact path="/" component={Login}/>
       <PrivateRoutes>
         <Switch> 
      <Route exact path ="/Home" component ={Home}/>
      <Route exact path ="/Logout" component={Logout}/>
      </Switch>
         </PrivateRoutes>             
       
       
       </Switch>
       </BrowserRouter>
       </StateProvider>
       </React.Suspense>
      </ErrorBoundary>
      
    
     
    );
  }
}

export default App;