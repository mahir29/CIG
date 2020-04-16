import React, { Component } from 'react';
import logo from './logo.svg';
import './navigation.css';
import {Switch,Route,Redirect} from 'react-router-dom';
import Login from  './login.js';
import About from  './about.js';
import NavBar from  './navbar.js';
import Home from  './home.js'
import Footer from './footer.js';
import Resources from './resources.js'; 
import Project from './project.js'; 
import Contact from './contact.js'; 

class App extends Component {
constructor(props)
{
  super(props)
  
}




render(){


return(
       <div id="rt">

        <NavBar/>
<div >
        <Switch>
          <Route path="/about"  render={(props)=><About/>} />
          <Route path="/home"  render={(props)=><Home/>}/>
            <Route path="/resources"  render={(props)=><Resources/>}/>
               <Route path="/project"  render={(props)=><Project/>}/>
                   <Route path="/contact"  render={(props)=><Contact/>}/>
        </Switch>
        </div>
   <Footer/>
        </div>



)

}
}


export default App;
