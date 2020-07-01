import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container,Row, Col} from "react-bootstrap"
import NavBar from "./components/Navbar"
import{BrowserRouter as Router, Route,Link, Switch } from "react-router-dom"
import Homepage from "./components/Homepage"
import Backoffice from './components/Backoffice';
  
class App extends React.Component{
  state= {
    books:[]
  }
  render(){
    return (
      <Router>
      <div>

        <NavBar />
        {/* <Homepage/>
        <Backoffice/> */}
        
         <Switch>
          {/* <Route path="/details/:asin">
            <EditBook />
          </Route> */}
          <Route path="/backoffice">
            <Backoffice />
          </Route>
          <Route path="/" exact>
             <Homepage />
          </Route>
        </Switch> 
      </div>
    </Router>
    );

  }
}
 


export default App;
