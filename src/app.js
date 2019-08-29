import React, {Component} from "react";
import {Router,Scene} from 'react-native-router-flux';
import Login from './Login';
import Perfil from './Perfil';
import Home from './Home';

export default class AppB2B extends Component {
  render() {
    return ( 
    <Router hideNavBar="true" >
      <Scene key="root" >
          <Scene key="Login" component={Login} title="Login" initial={true} hideNavBar/>
          <Scene key="Perfil" component={Perfil} title="Login" hideNavBar/>
          <Scene key="Home" component={Home} title="Login" hideNavBar/>
      </Scene> 
    </Router>
    )
  }
}