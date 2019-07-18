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

    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                {name: newName, age: 29},
                {name: 'Manu', age: 12},
                {name: 'Stephanie', age: 29},
            ]
        });
    };

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                {name: 'Max', age: 29},
                {name: event.target.value, age: 12},
                {name: 'Stephanie', age: 29},
            ]
        });
    };

    render() {
        return (
            <div className="App">
                <h1>Hello, world!</h1>
                <button onClick={() => this.switchNameHandler('MAXX')}>Switch name</button> {/*not recommended*/}
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}
                    click={this.switchNameHandler}
                />
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    click={this.switchNameHandler.bind(this, 'Max!')}
                    changed={this.nameChangedHandler}

                />
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age}
                    click={this.switchNameHandler}

                />
            </div>
        );
    }

};

export default App;

