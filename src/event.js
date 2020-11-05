import React, { Component } from 'react';
import './event.css';
import eve from './images/eve.svg';
import 'font-awesome/css/font-awesome.min.css';



class Event extends Component {
constructor(props)
{
  super(props);
  this.state={events:[
    {topic:"Topic for the event", date:"January 19,2020",details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    {topic:"Topic for the event", date:"January 19,2020",details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    {topic:"Topic for the event", date:"January 19,2020",details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    {topic:"Topic for the event", date:"January 19,2020",details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
  ]};
}

render(){


  return(
    <div>
      <div className="heading">Events</div>
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
            <div className="content">
              <div className="topic">{eve.topic}</div>
              <div className="design">
              <div className="detail">{eve.details}
                <div className="back"><i class="fa fa-angle-down" style={{"font-size":"1.628vw","color":"white","margin":"0.456vw","padding":"-0.781vw","transform": "rotate(-180deg)"}}></i></div>
                <div className="date">{eve.date}</div>
              </div>
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
