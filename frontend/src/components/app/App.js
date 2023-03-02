// import logo from './logo.svg';
import './App.css';
import React from 'react';
import FlightForm from '../form/form';
import Header from '../header/header';

function App() {
  return (
    <div className="App">
      <Header />
      <FlightForm />
    </div>
  );
}

export default App;