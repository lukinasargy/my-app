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



    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                {name: 'Max', age: 29},
                {name: event.target.value, age: 12},
                {name: 'Stephanie', age: 29},
            ]
        });
    };

    deletePersonHandler = (personIndex) => {
        const persons = this.state.persons;
        persons.splice(personIndex, 1);
        this.setState({persons : persons});
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
        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person
                            click={() => this.deletePersonHandler(index)}
                            /* or bind this comma index*/
                            name={person.name}
                            age={person.age}

                        />
                    })}
                </div>
            );
        }
        return (
            <div className="App">
                <h1>Hello, world!</h1>
                <button style={style}
                        onClick={this.togglePersonsHandler}>Toggle Persons
                </button>
                {persons}
            </div>
        );
    }

};

export default App;

