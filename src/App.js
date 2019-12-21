import React from 'react';
import logo from './logo.svg';
import './App.css';

import MyHeader from './components/header';
import AcercaDe from './components/acercade';
import Proyectos from './components/proyectos';

function App() {
  return (
    <div className="App">
      <MyHeader imagen={logo}></MyHeader>
      <AcercaDe/>
      <section>
        <Proyectos/>
      </section>
    </div>
  );
}

export default App;
