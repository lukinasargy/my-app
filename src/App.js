import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {name: 'Max', age: 29},
            {name: 'Stephanie', age: 29},
            {name: 'Manu', age: 29},
        ],
        otherState: 'some value'
    };

    switchNameHandler = () => {
        this.setState({
            persons: [
                {name: 'Maximillian', age: 29},
                {name: 'Stephanie', age: 12},
                {name: 'Manu', age: 29},
            ]
        });
    };

    render() {
        return (
            <div className="App">
                <h1>Hello, world!</h1>
                <button onClick={this.switchNameHandler}>Switch name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
            </div>
        );
    }

};

export default App;

