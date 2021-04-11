import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} 
from "react-router-dom";
import Home from './components/Home/Home/Home';
import Appointment from './components/Appointment/Appointment/Appointment';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = "/">
          <Home></Home>
        </Route>
        <Route path ="/appointment">
          <Appointment></Appointment>
        </Route>
        <Route path ="/dashboard/appointment">
          <Dashboard></Dashboard>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
