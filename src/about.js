import React, { Component } from 'react';
import logo from './logo.svg';
import './about.css';
import {Switch,Route,Redirect} from 'react-router-dom';
import pic from './images/img-a.png'; 
import mission from './images/mission.png'; 
import objective from './images/objective.png'; 
import vision from './images/vision.png'; 
import Card from './card.js'; 

class About extends Component {
constructor(props)
{ 
  
  super(props);
  this.state={admin_body:[{name:"zaid",desig:"head",img:"https://cdn.stocksnap.io/img-thumbs/960w/architecture-abstract_0OXTLB0E5N.jpg",email:"z@gmail.com",mob:"4658875"},
  {name:"zaid",desig:"head",img:"https://cdn.stocksnap.io/img-thumbs/960w/architecture-abstract_0OXTLB0E5N.jpg",email:"z@gmail.com",mob:"4658875"},
  {name:"zaid",desig:"head",img:"https://cdn.stocksnap.io/img-thumbs/960w/architecture-abstract_0OXTLB0E5N.jpg",email:"z@gmail.com",mob:"4658875"},
  {name:"zaid",desig:"head",img:"https://cdn.stocksnap.io/img-thumbs/960w/architecture-abstract_0OXTLB0E5N.jpg",email:"z@gmail.com",mob:"4658875"}]}
  
}

render(){


return(


      <div>


<div id="about_heading">Coorporate Interaction Group IIT Roorkee</div>
<div id="about_sub_heading">Corporate Interaction Group(CIG) is a student body of IITR founded on 1st October 2015 that 
works for creating and nurturing excellent relationships with Industries catering to technological and 
research needs of Industry and walking together towards innovating our society that is mutually beneficial to both
 IIT Roorkee and the Industries</div>

  <div id="pic">
    <img  id="pc" src={pic}/>
 </div>

    <div className="row">
    <div className="column">
    <img  id="msn" src={mission}/>
      </div>
      <div className="column">
      <img  id="obj" src={objective}/>
       </div>

      <div className="column">
      <img  id="vis" src={vision}/>
      </div>
       </div>
  
<div id="tm"> Our Team </div>
<div id="adm"> Administrative Body </div>
  <div  className="row" >
{this.state.admin_body.map((adm, index) => (
    <Card id={index} admin={adm}/> 
    ))}
 </div>

 <div id="std">Student body</div>

   <div  className="row" >
{this.state.admin_body.map((adm, index) => (
    <Card id={index} admin={adm}/> 
    ))}
 </div>
 

    </div>


)


}}


export default About;
