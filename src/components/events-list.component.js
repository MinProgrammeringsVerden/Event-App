import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'



const Event = (props) => (
     
         <tr>
            <td>{props.event.event}</td>
            <td>{props.event.person}</td>
            <td>{props.event.description}</td>
            <td>{props.event.date.substring(0,10)}</td>
            <td>
               
               <Link to ={"/edit/"+props.event._id}>Edit Event</Link> 
                <button type="button" className="btn " onClick= {() => props.deleteEvent(props.event._id)}>Delete Event</button>
            </td>
        </tr>

      

)


class EventsList extends Component {
    constructor(props) {
        super(props);

        this.deleteEvent = this.deleteEvent.bind(this);


        this.state = { 
            events:[]
         }
    }

    

    componentDidMount() {
            
        axios.get('http://localhost:5000/events' )
        .then((response) =>{ console.log(response.data)
            this.setState({events:response.data})})
        .catch((err) =>console.log(err));
   }

   deleteEvent(id){
    axios.delete('http://localhost:5000/events/' +id  )
    .then((response) => {  console.log(response.data) })
    .catch((err) =>console.log(err));

    this.setState({
        events:this.state.events.filter(e => e._id !== id )

    })
   }


    existingEventsLists(){
       return this.state.events.map(event=> { console.log(event)
       return <Event event={event} deleteEvent={this.deleteEvent} key ={event._id}/>
      
       })
    }


    render() { 
        return (
               <div className ="mt-8">
                    <h3>Your Events</h3>
                    <table className="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">Event</th>
                        <th scope="col">Person</th>
                        <th scope="col">Description</th>
                        <th scope="col">Date</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       {this.existingEventsLists()} 
                    </tbody>
                    </table>
            </div>  
        );
    }
}
 

export default EventsList;