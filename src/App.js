import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {id: 'qwde', name: 'Max', age: 29},
            {id: 'qwdee', name: 'Stephanie', age: 29},
            {id: 'qwdeee',name: 'Manu', age: 29},
        ],
        otherState: 'some value',
        showPersons: false
    };



    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(pers => {
            return pers.id ===id;
        });
        const person = {
            ...this.state.persons[personIndex]
        };

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        person.name = event.target.value;
        this.setState( {
            persons:persons
        });
    };

    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
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
                            changed={(event) => this.nameChangedHandler(event, person.id)}
                            key={person.id}
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

