import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import ExercisesList from "./components/jobs-list.component";
import EditExercise from "./components/edit-job.component";
import CreateExercise from "./components/createjob.component";
import CreateUser from "./components/createuser.component";
import JobList from './components/jobs-list.component';
import EditJob from './components/edit-job.component';
import CreateJob from './components/createjob.component';

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={JobList} />
      <Route path="/edit/:id" component={EditJob} />
      <Route path="/create" component={CreateJob} />
      <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;