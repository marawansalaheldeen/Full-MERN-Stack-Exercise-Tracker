import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router , Route } from 'react-router-dom';

import Navbar from './components/navbar';
import ExercisesList from './components/exerciselist';
import CreateUser from './components/createuser';
import CreateExercise from './components/createexercise';

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={ExercisesList} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
