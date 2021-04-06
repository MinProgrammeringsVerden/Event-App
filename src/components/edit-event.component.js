import React, { Component } from 'react';
import axios from 'axios'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



class EditEvent extends Component {
    constructor(props) {
        super(props);

        this.onChangePerson = this.onChangePerson.bind(this);
        this.onChangeEvent = this.onChangeEvent.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = { 
            event:'' , 
            person:'',
            description: '', 
            date: new Date(),
            persons:[]  
            }
           

    }


    componentDidMount() {
     
       axios.get('http://localhost:5000/events/'+this.props.match.params.id )
        .then((response => {
                this.setState({
                    event: response.data.event,
                    person: response.data.person,
                    description: response.data.description,
                    date: new Date(response.data.date)
                    })
                   
                }
              ))
          
        .catch((err) =>{
            console.log(err)
        });

     
    axios.get('http://localhost:5000/persons' )
        .then((response) => {
          if(response.data.length > 0){
            this.setState({
                persons:response.data.map((p)=> (p.person))
                
            })
          
        }
        
        }).catch((err) =>console.log(err));
        
        
  }

 


  

 

    onChangePerson(e) {
        this.setState({
        person: e.target.value
        })
        };


    onChangeEvent(e){
        this.setState({
            event:e.target.value
        })  
        };


    onChangeDescription(e) {
        this.setState({
            description:e.target.value
        })  
        }

    onChangeDate(date){
        this.setState({
            date:date
        }) 
        }

    onSubmit(e) {
         e.preventDefault();

         const event = {
            event:this.state.event,
            person : this.state.person,
            descriprion:this.state.description,
            date :this.state.date

          } 

        console.log(event);

    axios.post('http://localhost:5000/events/update/' + this.props.match.params.id ,  event)
        .then((response) => console.log(response.data)) 
        .catch((err) =>console.log(err));

       //window.location ='/' ;
    
        }
            




     render() { 
             return (
                     <div>

                        <h3>Edit Event</h3>
                        <form onSubmit={this.onSubmit}>
                        <div className="form-group"> 
                            <label>Person: </label>
                            <select ref="personInput"
                                required
                                className="form-control"
                                value={this.state.person}
                                onChange={this.onChangePerson}>
                                {
                                this.state.persons.map(function(person) {
                                    return <option 
                                    key={person}
                                    value={person}>{person}
                                    </option>;
                                })
                                }
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Event:</label>
                            <input 
                                type="text" 
                                required
                                className="form-control"
                                value={this.state.event}
                                onChange={this.onChangeEvent}
                                />
                        </div>
                         <div className="form-group">
                            <label>Description:</label>
                            <input 
                                type="text" 
                                required
                                className="form-control"
                                value={this.state.description}
                                onChange={this.onChangeDescription}
                                />
                        </div>
                        <div className="form-group">
                            <label>Date: </label>
                            <div>
                            <DatePicker
                                selected={this.state.date}
                                onChange={this.onChangeDate}
                            />
                            </div>
                        </div>
                
                        <div className="form-group">
                            <input type="submit" value="Update Event" className="btn btn-primary" />
                        </div>
                        </form>
        
        </div>  );
    }
}
 

export default EditEvent;