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
        otherState: 'some value',
        showPersons: false
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
    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons
        this.setState({
            showPersons: !doesShow
        });
    };

    render() {
        const style = {
            backgroundColor: 'skyblue',
            font: 'inherit',
            border: '1px solid skyblue',
            padding: '8px',
            cursor: 'pointer'
        };
        return (
            <div className="App">
                <h1>Hello, world!</h1>
                <button style={style}
                        onClick={this.togglePersonsHandler}>Toggle Persons
                </button>
                {/*not recommended*/}
                {this.state.showPersons ?
                    <div>
                        <Person
                            name={this.state.persons[0].name}
                            age={this.state.persons[0].age}
                            click={this.switchNameHandler.bind(this, 'Max!')}
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
                            click={this.switchNameHandler.bind(this, 'Max!')}

                        />
                    </div> : null
                }
            </div>
        );
    }

};

export default App;

