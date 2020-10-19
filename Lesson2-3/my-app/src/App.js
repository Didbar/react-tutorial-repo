import React from 'react';
import Header from './components/Header'
import MainComponent from './components/MainComponent'
import Footer from './components/Footer'
import './App.css';
import GetTime from './components/GetTime';


function App() {
  return (
    <div className="App">
      <GetTime />
      <Header />
      <MainComponent />
      <Footer />
    </div>
  );
}

export default App;
