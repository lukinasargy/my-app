import React, {Component} from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from "../components/Cockpit/Cockpit";
import WithCLass from "../hoc/WithClass";

class App extends Component {
    constructor(props) {
        super(props);
        console.log("[App.js] constructor");
    }

    state = {
        persons: [
            {id: 'qwde', name: 'Max', age: 29},
            {id: 'qwdee', name: 'Stephanie', age: 29},
            {id: 'qwdeee', name: 'Manu', age: 29},
        ],
        otherState: 'some value',
        showPersons: false,
        showCockpit: true,
    };

    static getDerivedStateFromProps(props, state) {
        console.log("[App.js] getDerivedStateFromProps", props);
        return state;
    };

    componentDidMount() {
        console.log("[App.js] componentDidMount");

    };

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('[App.js] shouldComponentUpdate');
        return true;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[App.js] componentDidUpdate');
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(pers => {
            return pers.id === id;
        });
        const person = {
            ...this.state.persons[personIndex]
        };

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        person.name = event.target.value;
        this.setState({
            persons: persons
        });
    };

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    };

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons
        this.setState({
            showPersons: !doesShow
        });
    };

    render() {
        console.log('[App.js] render');
        let persons = null;
        if (this.state.showPersons) {
            persons = <Persons
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangedHandler}/>
        }


        return (
            <WithCLass classes={classes.App}>
                <button
                    onClick={() => {
                        this.setState({showCockpit: false})
                    }}
                >
                    Remove Cockpit
                </button>
                {this.state.showCockpit ? <Cockpit
                    title={this.props.appTitle}
                    personsLength={this.state.persons.length}
                    toggle={this.togglePersonsHandler}
                    show={this.state.showPersons}/> : null}
                {persons}
            </WithCLass>
        );
    }

}

export default App;

