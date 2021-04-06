import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Navbar extends Component {
   
    render() { 
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link to ="/" className="navbar-brand">Eventer</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collpase navbar-collapse">
                          <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Events <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/add">Add New Event</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to ="/persons">Add New Person</Link>
                            </li>
                        
                        </ul>
                    </div>
                </nav>

              
            </div> 
          );
    }
}
 
export default Navbar;