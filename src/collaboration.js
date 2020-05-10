import React, { Component } from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import './collaboration.css';
import collab_bg from './images/collab_bg.png';
import cls_img from './images/cls_img.png';
import lec_img from './images/lec_img.png';
import work_img from './images/work_img.png';
import proj_img from './images/proj_img.png';
import Collab from './collab.js';
import View from './view.js';
import Success from './success.js';
import Popup from './popup.js'

class Colloboration extends Component {
constructor(props)
{
  super(props)
  this.state={lecture:{heading:"Lecture",sub:"We organise lecture series delivered by professionals , in institute premises",link:"Deliver Lectures"}
  ,workshop:{heading:" Workshop",sub:" We organise workshops that are  conducted by skilled professionals & teams",link:"Conduct Workshop"},
  project:{heading:"Projects",sub:"We are willing to do industrial projects in collaboration with corporates.",link:"Start Project",visible:false,form:false}


}

 this.form_ref = React.createRef();

 this.visible= this.visible.bind(this);
 this.hide= this.hide.bind(this);
 this.form_vis= this.form_vis.bind(this);
 this.form_hide= this.form_hide.bind(this);
  
}

hide()
{
  this.setState({visible:false});
}

visible(){
  this.setState({visible:true});
}

form_vis(){

  (this.form_ref.current).style.display="block";
   window.onclick = (event) =>{
  if (event.target == (this.form_ref.current)) {
    (this.form_ref.current).style.display = "none";
  }
}
}

form_hide(){

  (this.form_ref.current).style.display="none";
 
}



render(){


return(
       <div >

       {(this.state.visible)? <Success visible={this.hide}/> :  null }
       

<div id="title_collab"> Collaborations</div>
<div id="sub_collab">We collaborate and come together for projects, 
workshops and lecture series with different coorporations and industries</div>
       <img id="collab_bg" src={collab_bg}/>


  <div className="row_view">
    <div  onClick ={this.form_vis} className="column_view">
    < View   icon={lec_img} data={this.state.lecture}/>
      </div>
      <div onClick ={this.form_vis}  className="column_view">
      <View icon={work_img} data={this.state.workshop}/>
       </div>

      <div  onClick ={this.form_vis} className="column_view">
      <View icon={proj_img} data={this.state.project}/>
      </div>
       </div>


      <div id="cls_head">Corporate Lecture Series </div>
      <div id="cls_subhead">Proident laborum culpa incididunt do cupidatat dolore dolor amet nulla amet est voluptate 
      dolor Lorem. Do ipsum irure officia reprehenderit anim officia elit. Laborum cupidatat cillum ipsum non magna
       esse ipsum dolor.</div>
       <img id="cls_img" src={cls_img}/>
<div id="cc"> Successful Collaborations</div>
       <Collab/>
       <div ref={this.form_ref} id="myModal" className="modal">
      
       <Popup id="modal-content" hide={this.form_hide}  visible={this.visible}/>
      
       </div>
        </div>



)

}
}


export default Colloboration;
