import React from 'react';
//import logo from './logo.svg';
import './App.css';
import data from './proyectos-data';

//import MyHeader from './components/header';
import AcercaDe from './components/acercade';
import Proyectos from './components/proyectos';
import MyFooter from './components/footer';

function App() {
  return (
    <div className="App">
      {/*
      <MyHeader imagen={logo}></MyHeader>
      */}
      <AcercaDe/>
      <Proyectos data={data}/>
      <MyFooter />
    </div>
  );
}

export default App;
