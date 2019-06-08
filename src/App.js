import React from 'react';
import './App.css';

import Home from './Paginas/Home'
import Rooms from './Paginas/Rooms'
import SingleRoom from './Paginas/SingleRoom'
import Error from './Paginas/Error'

import {Route, Switch} from 'react-router-dom'

import Navbar from './Component/Navbar'

function App() {
  return (
    <>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/Mihabitacion/" component={Rooms}/>
      <Route exact path="/Habitaciones/:slug" component={SingleRoom}/>
      <Route component={Error}/>
    </Switch>
    </>
  );
}

export default App;
