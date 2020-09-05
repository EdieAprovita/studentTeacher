import React from 'react';
import './App.css';
//import './Home.css';
import Student from './Student';
import Menu from './Menu';
import Teahcer from './Teacher';
import { BrowserRouter, Route } from 'react-router-dom';
import Teacher from './Teacher';
import App from './App';

function Homepage() {
  return (
    <BrowserRouter>
    
      <Menu />  
      <switch>
       <Route path="/" exact component={App} />
       <Route path="/student" component={Student} />
       <Route path="/teacher" component={Teacher} />
       </switch>
    
    </BrowserRouter>
  );
}

const Home = () => {

  return (
     <div className="homestyle"> 
        <h2> This is the Home Page. </h2>
      </div>
    )

}

export default Homepage;
