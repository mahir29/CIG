import React, { Component } from 'react';
import logo from './logo.svg';
import './navigation.css';
import {Switch,Route,Redirect} from 'react-router-dom';
import Login from  './login.js';
import About from  './about.js';
import NavBar from  './navbar.js';
import Home from  './home.js'
import Footer from './footer.js'; 


class App extends Component {
constructor(props)
{
  super(props)
  
}




render(){


return(
       <div id="rt">

        <NavBar/>
<div id="block">
        <Switch>
      <Route path="/about"  render={(props)=><About/>} />
          <Route path="/home"  render={(props)=><Home/>}/>
        </Switch>
        </div>
        <Footer/>
        </div>



)

}
}


export default App;
