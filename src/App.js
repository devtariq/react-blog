import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
/*
https://www.youtube.com/watch?v=4pO-HcG2igk&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=8
*/

function App () {
  return (
    <div className="App">
       <Navbar/>
       <Home/>
    </div>
  );
}

export default App;
