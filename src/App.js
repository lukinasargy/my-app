import React, {Component} from 'react';
import styles from './App.module.css';
import Person from './Person/Person';
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

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
        let persons = null;
        let btnClass = '';
        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <ErrorBoundary key={person.id}>
                            <Person
                            click={() => this.deletePersonHandler(index)}
                            /* or bind this comma index*/
                            name={person.name}
                            age={person.age}
                            changed={(event) => this.nameChangedHandler(event, person.id)}
                        />
                        </ErrorBoundary>
                    })}
                </div>
            );
            btnClass = styles.Red;
        }

        const assignedClasses = [];
        if (this.state.persons.length <= 2) {
            assignedClasses.push(styles.red);
        }
        if (this.state.persons.length <=1) {
            assignedClasses.push(styles.bold);
        }
        return (
            <div className={styles.App}>
                <h1>Hello, world!</h1>
                <p className={assignedClasses.join(' ')}>This is really working!</p>
                <button onClick={this.togglePersonsHandler} className={btnClass}>Toggle Persons
                </button>
                {persons}
            </div>
        );
    }

};

export default App;

