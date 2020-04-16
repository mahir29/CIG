import React, { Component } from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import './contact.css';
import contact_map from './images/contact_map.png';
import contact_phone from './images/contact_phone.png';
import contact_msg from './images/contact_msg.png';
import lin_contact  from'./images/lin_contact.png';
import fb_contact from './images/fb_contact.png';
import mail_contact from './images/mail_contact.png';
import Form from './form.js'


class Contact extends Component {
constructor(props)
{
  super(props)
  this.state={director:"abcdef dvgxhfxh (Ass. Dean)",dire_phone:"7685867979",head:"himanshu pal (chairperson)",head_phone:"76480958"}
}




render(){


return(
       <div id="contact_bg" >
<div id="contact_head"> Contact Us</div>
<div id="dir_name">{this.state.director}</div>

<div id="dir_mob">{this.state.dire_phone}</div>

<div id="head_name">{this.state.head}</div>

<div id="head_mob">{this.state.head_phone}</div>
<div>
<img id="contact_phone" src={contact_phone}/>
</div>
<img id="contact_map" src={contact_map}/>
<div id="soc">Social Links</div>
<img id="contact_msg" src={contact_msg}/>
<img id="lin_contact" src={lin_contact}/>
<img id="fb_contact" src={fb_contact}/>
<img id="mail_contact" src={mail_contact}/>

<Form/>
        </div>



)

}
}


export default Contact;
