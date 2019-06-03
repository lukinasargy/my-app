import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
        <h1>Hello, world!</h1>
        <Person name={"Max"} age={"28"}/>
        <Person name={"Stephanie"} age={"26"}/>
        <Person name={"Manu"} age={"29"}>
            <p>children text</p>
            <p>children text</p>
            <p>children text</p>
        </Person>
    </div>
  );
}

export default App;
