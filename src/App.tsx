import React from 'react';
// @ts-ignore
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
