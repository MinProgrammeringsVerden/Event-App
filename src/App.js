import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import  Navbar  from './components/navbar.component';
import EventsList  from './components/events-list.component';
import  AddPerson from './components/add-person.component';
import  AddEvent  from './components/add-event.component';
import  EditEvent  from './components/edit-event.component';

function App() {
  return (
   <Router>
      <div className="container">
          <Navbar/>
          <Route path="/" exact component={EventsList}/>
          <Route path="/add" component={AddEvent}/>
          <Route path="/edit/:id" component={EditEvent}/>
          <Route path="/persons" component={AddPerson}/>
          
      </div>
 </Router>
 );
}

export default App;
