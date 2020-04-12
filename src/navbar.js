import React, { Component } from 'react';
import logo from './logo.svg';
import './navigation.css';
import cig_logo from './images/cig_logo.png';
import {Switch,Route,Redirect,Link} from 'react-router-dom';


class NavBar extends Component {
constructor(props)
{
  super(props)
 
}




render(){

return(


      <div>

     
          <div id="bg">
       <Link to="/home"><img id="cig_logo" src={cig_logo}/></Link>
          <div id="logo">CIG </div>
          <div id="logo_head">Coorporate Interaction Group </div>
          <Link to="/home" id="first">Collaborations </Link>
          <Link to="/about"><div id="second">About Us </div></Link>
          <div id="third">Our Projects </div>
          <div id="fourth">Resources </div>
          <div id="fifth">Contact</div>
         
         </div>
         
        </div>



)

}}

export default NavBar;