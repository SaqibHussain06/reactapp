import React from 'react';
import './App.css';
import Student from './student.js';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Student course = 'Bootcamp'/>
        <Student task ='React App'/>
      </header>
    </div>
  );
}

export default App;
