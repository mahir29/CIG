import React, { Component } from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import bg from './images/home_bg.png';
import btn from './images/btn.png';
import man from './images/man.png';
import up from './images/up.png';
import home_head from './images/home_head.png';
import home_head_a from './images/home_head_a.png';
import man_a from './images/man_a.png';
import Collab from './collab.js';
import Featured from './featured.js'
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
    	
       window.scrollTo(0,window.scrollY-60);
        this.scroll();
    }, 2);
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
<img  id="home_head" src={home_head}/>
<img  id="home_head_a" src={home_head_a}/>

<a id="vw"> View resources</a>
<a id="vw_a"> View resources</a>
<img  id="arrow" onClick={this.scroll.bind(this)} src={up}/>

</div>
<div>
<img  id="man" src={man}/>
</div>
<div>
<img  id="man_a" src={man_a}/>
</div>

<div id="suc_col">Successful Collaborations </div>
<Collab/>
<Featured/>

        </div>




)

}
}


export default Home;
