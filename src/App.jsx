import React from 'react';
import './App.css'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './components/Header/Header'
import Navbartop from './components/Navbartop/Navbartop'
import Home from './containers/Home/Home'
import Posts from './containers/Posts/Posts'
import Subscribe from './containers/Subscribe/Subscribe'
import Contact from './containers/Contact/Contact'
import Login from './components/Auth/Login';
import Cookies from 'js-cookie'
import AdminPanel from './components/Auth/components/AdminPanel';
import PageNotFound from './containers/PageNotFound/PageNotFound'


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
        <Route exact path='/login' component={Login} />
        { Cookies.get('urbanShadesToken') ? <Route exact path='/admin' component={AdminPanel} /> : null} 

        <Route component={PageNotFound} />       
      </Switch> 
    </BrowserRouter>
    
  );
}

export default App;
