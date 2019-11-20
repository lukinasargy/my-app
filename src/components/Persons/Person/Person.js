import React, {Component} from 'react';
import Aux from '../../../hoc/Auxiliary';
import classes from './Person.module.css';


class Person extends Component{
    render  () {
        console.log('[Person.js] rendering...');
        return (
            <Aux>
                <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old!</p>
                <div>{this.props.children}</div>
                <input type="text"  onChange={this.props.changed} value={this.props.name}/>
            </Aux>
        )
    };
    }

export default Person;