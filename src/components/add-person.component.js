import React, { Component } from 'react';
import axios from 'axios';


class AddPerson extends Component {
    constructor(props) {
        super(props);


        this.onChangePerson = this.onChangePerson.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            person:''
          }
    }


    onChangePerson(e) {
        this.setState({
            person: e.target.value
        })
    };


    onSubmit(e) {
       e.preventDefault();

        const newPerson = {
         person : this.state.person
        } 

        console.log(newPerson );

        axios.post('http://localhost:5000/persons/add' ,  newPerson)
           .then((response) => console.log(response.data)) 
           .catch((err) =>console.log(err));


        this.setState({
            person:''
        })

    };
      

    render() { 
        return (

        <div>
            <h3>Add Person</h3>
            <form onSubmit={this.onSubmit}>
            <div className="form-group">
                            <label>Person:</label>
                            <input 
                                type="text" 
                                className="form-control"
                                value={this.state.person}
                                onChange={this.onChangePerson}
                                />
             </div>
             <div className="form-group">
                            <input type="submit" value="Add Person" className="btn btn-primary" />
                        </div>
                        </form>
             </div>
    
       
        
         )
    }
}
 

export default AddPerson;