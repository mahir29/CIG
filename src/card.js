import React, { Component } from 'react';
import './card.css';
import {Switch,Route,Redirect} from 'react-router-dom';
import card_msg from './images/card-msg.png'; 
import card_mob from './images/card-mob.png'; 



class Card extends Component {
constructor(props)
{
  super(props)
  
}




render(){


return(
       <div >
      <div id="big">

 <img src={this.props.admin.img} id="img"/>
  <img src={card_msg} id="crd_msg" />
   <img src={card_mob}  id="crd_mob"/>
 <div id="nm">{this.props.admin.name} </div>
 <div id="desig">{this.props.admin.desig}</div>
 <div id="email_id">{this.props.admin.email}</div>
 <div id="mob_num">{this.props.admin.mob}</div>
      </div>
        </div>



)}}


export default Card;
