import React from 'react';
import './App.css'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './components/Header/Header'
import Navbartop from './components/Navbartop/Navbartop'
import Home from './containers/Home/Home'
import Posts from './containers/Posts/Posts'
import Subscribe from './containers/Subscribe/Subscribe'
import Contact from './containers/Contact/Contact'


function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Navbartop />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/posts' component={Posts} />
        <Route exact path='/subscribe' component={Subscribe} />
        <Route exact path='/contact' component={Contact} />
      </Switch> 
    </BrowserRouter>
    
  );
}

export default App;
