import React from 'react';
import logo from './logo.svg';
import './App.css';
import img from './asset/Rectangle 93.png'


function App() {
  return (
    <div className="App">
      <div style={{display:'flex'}}>
          <div style={{width:'10%'}}></div>

          <img src={img}  />
      </div>
    </div>
  );
}

export default App;
