import React, { Component } from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import Login from  './login.js';
import feat_rect from './images/feat_rect.png';
import icon from './images/feat_icon.png';
import './featured.css';
class Featured extends Component {
constructor(props)
{
  super(props)
  this.state={feat:[{head:"zaud ",sub:"dffd"},{head:"zaud ",sub:"dffd"},{head:"zaud ",sub:"dffd"}]}
}




render(){


return(
       <div id="featured_bg" >

   <div  className="row_feat" >
{this.state.feat.map((feat, index) => (
    <div  className="card_feat" id={index} > 
<img className="icn" src={icon}/>
<div id="card_heading">Samsung Workshop</div>
<div id="card_content">Technology workshop on “Advanced Embedded Technology” presented by the eminent personalities,
 who are from the largest overseas R&D Centre of Samsung Electronics, Samsung Research Institute, Bangalore (SRI-B). 
 This event is being conducted by the joint efforts of the CSE department and the CIG </div>

    </div>
  
    ))}

    </div>
        </div>



)

}
}


export default Featured;
