import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
    const [personsState, setPersonsState] = useState({
        persons: [
            {name: 'Max', age: 29},
            {name: 'Stephanie', age: 29},
            {name: 'Manu', age: 29},
        ]
    });
    const [otherState] = useState('somevalue');
    console.log(personsState, otherState);

    const switchNameHandler = () => {
        setPersonsState({
            persons: [
                {name: 'Maximillian', age: 29},
                {name: 'Stephanie', age: 12},
                {name: 'Manu', age: 29},
            ],
            // otherState: personsState.otherState
        });
    };
    return (
        <div className="App">
            <h1>Hello, world!</h1>
            <button onClick={switchNameHandler}>Switch name</button>
            <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
            <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
            <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
        </div>
    );
};

export default App;

