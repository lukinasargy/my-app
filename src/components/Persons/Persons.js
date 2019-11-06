import React, {Component} from 'react';

import Person from "./Person/Person";

class Persons extends Component {
    // static getDerivedStateFromProps (props, state) {
    //     console.log("[Persons.js] getDerivedStateFromProps");
    //     return state;
    // }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("[Persons.js] shouldComponentUpdate");
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return {message: 'Snapshot!'};
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] Component did update');
        console.log(snapshot);
    }
    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount');
        //executes before persons component is deleted from DOM, does cleanup work
    }

    render () {
        console.log('[Persons.js] rendering..');
        return this.props.persons.map((person, index) => {
            return <Person
                click={() => this.props.clicked(index)}
                /* or bind this comma index*/
                key={person.id}
                name={person.name}
                age={person.age}
                changed={(event) => this.props.changed(event, person.id)}
            >
                <p>I am Children</p>
            </Person>

        }); //shorten of {return ()}
    }

};


export default Persons ;