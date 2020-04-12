import React, { Component } from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import bg from './images/home_bg.png';
import btn from './images/btn.png';
import man from './images/man.png';
import up from './images/up.png';
import './home.css';


class Home extends Component {
constructor(props)
{
  super(props)
  
}

scroll(){
if(window.scrollY!=0)
{
    setTimeout(()=> {
    	
       window.scrollTo(0,window.scrollY-30);
        this.scroll();
    }, 6);
   }

}



render(){


return(
       <div >
       <div id="home_img">
       <div id="title"> Bridging the gap between Corporate & Academia</div>
       <div id="sub">By providing a platform for academia and industry to interact, CIG proffers to connect, collaborate and innovate</div>
       <img  id="btn" src={btn}/>
<img  id="img_home" src={bg}/>
<img  id="arrow" onClick={this.scroll.bind(this)} src={up}/>

</div>
<img  id="man" src={man}/>
        </div>



)

}
}


export default Home;
