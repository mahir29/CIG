import React, { Component } from 'react';
import './event.css';
import eve from './images/eve.svg';
import poly from './images/Polygon.svg';
import ar from './images/ar.svg';
import 'font-awesome/css/font-awesome.min.css';



class Event extends Component {
constructor(props)
{
  super(props);
  this.state={events:[
    {topic:"Topic for the event", date:"January 19,2020",details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    {topic:"Topic for the event", date:"January 19,2020",details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    {topic:"Topic for the event", date:"January 19,2020",details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    {topic:"Topic for the event", date:"January 19,2020",details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
  ]};
}

handleClick=(event)=>{
  var element = document.getElementsByClassName("detail");
  element.classList.toggle("mystyle");
}

render(){


  return(
    <div>
      <div className="h">Events</div>
      <div className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </div>
      <div className="image">
        <img src={eve}></img>
      </div>
      <div className="timeline_head">Timeline for our events</div>
      
      <div className="timeline">
        <ul>
        {this.state.events.map((eve,index)=>(
          <li>
            <div className="text">
              <div className="topic">{eve.topic}</div>
              <div className="design">
              <div className="detail">{eve.details}</div>
              <div className="tab" onClick={this.handleClick}>
                <div className="back"><img src={poly}></img></div>
                <div className="expand">
                  <div>Expand</div>
                  <img src={ar}></img>
                </div>
              </div>
                <div className="date">{eve.date}</div>
            
              </div>
            </div>
          </li>
        )
        )}
        <div style={{"clear":"both"}}></div>
        </ul>
      </div>
      
     
    </div>



  )}}


export default Event;
