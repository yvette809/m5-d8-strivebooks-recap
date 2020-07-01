import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container,Row, Col} from "react-bootstrap"
import NavBar from "./components/Navbar"
import{BrowserRouter as Router, Route,Link, Switch } from "react-router-dom"
  
class App extends React.Component{
  state= {
    books:[]
  }
  render(){
    return (
      <Router>
      <div>

        <NavBar />
        
        <Switch>
          <Route path="/details/:asin">
            <EditBook />
          </Route>
          <Route path="/backoffice">
            <BackOffice />
          </Route>
          <Route path="/" exact>
             <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
    );

  }
}
 


export default App;
