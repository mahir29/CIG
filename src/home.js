import React, { Component } from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import bg from './images/home_bg.svg';
import hand from './images/home_hand.svg';
import man from './images/man.svg';
import up from './images/up.png';
import home_head from './images/home_head.svg';
import home_head_a from './images/home_head_a.png';
import man_a from './images/man_a.svg';
import line from './images/line.svg';
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
       <div  id="btn_home"><span>  Let’s Collaborate</span> </div>
<img  id="img_home" src={bg}/>
<img  id="home_head" src={home_head}/>
<img  id="home_head_a" src={home_head_a}/>
<img  id="hand" src={hand}/>
<img  id="line" src={line}/>

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
<div id="col">
<Collab />
</div>
<div id="heading_feat">Featured Works</div>
<Featured/>

        </div>




)

}
}


export default Home;
