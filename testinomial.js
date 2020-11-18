import React, { Component } from 'react';
import logo from './logo.svg';
import './cls.css'
import './testinomial.css'
import {Switch,Route,Redirect} from 'react-router-dom';
import Mask from './images/mask.png';
import Comma from './images/comma.svg';
import Line from './images/line.svg';


class Testinomials extends Component {
constructor(props)
{ 
  
  super(props);
  this.state={}
}
render(){


return(

<div id="t_bg">

<div id="t_head">Heading</div>
<div id="t_content">Amet veniam aute on veniam est nostr commodo excepteur magna. Consecteturidf 
adipisicing ea eu earnit pariatur commodonite voluptat inaute.nostr commodo excepteur magna. Consecteturidf adipin...Read </div>
<img src={Mask} id="t_img"/>
<img src={Comma} id="t_comma"/>
<img src={Line} id="t_line"/>
<div id="t_name"> Dr. Ajit K Chaturvedi</div>
<div id="t_des">Director ,IIT Roorkee </div>
    </div>


)


}}


export default Testinomials;
