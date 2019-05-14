import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import './reset.css';
import Home from './contarners/Home'
import Create from './contarners/Create'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul><Link to="/">Home</Link></ul>
          <ul><Link to="/create">Create</Link></ul>
          <ul><Link to="/edit/10">10</Link></ul>
          <Route path="/" exact component={Home} />
          <Route path="/create" exact component={Create} />
          <Route path="/edit/:id" exact component={Create} />
        </div>
      </Router>
    )
  }
}
export default App; 
