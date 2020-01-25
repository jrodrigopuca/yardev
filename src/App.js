import React from 'react';
//import logo from './logo.svg';
import './App.css';
import data from './proyectos-data';

//import MyHeader from './components/header';
import AcercaDe from './components/acercade';
import Proyectos from './components/proyectos';
import Contacto from './components/contacto.jsx'
import MyFooter from './components/footer';

function App() {
  return (
    <div className="App">
      {/*
      <MyHeader imagen={logo}></MyHeader>
      */}
      <AcercaDe/>
      <Proyectos data={data}/>
      <Contacto web="https://formspree.io/xlejzwly"/>
      <MyFooter />
    </div>
  );
}

export default App;
