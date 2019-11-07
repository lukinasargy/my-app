import React, {useEffect} from 'react';
import styles from "./Cockpit.module.css";

const Cockpit = (props) => {
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        //http request imitation
        setTimeout( () => {
            alert('saved data to cloud!');
        },1000);
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
            //should run when cockpit.js is removed
        };
    }, []);
    //should execute when our persons changes and when initialized, or run initially, or unMounted when array is empty
    useEffect (() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect 2nd');
        };
    });
    //executes every update with no argument
    const assignedClasses = [];
    let btnClass='';
    if (props.show) {
        btnClass = styles.Red;
    }
    if (props.persons.length <= 2) {
        assignedClasses.push(styles.red);
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(styles.bold);
    }
    return (
        <div className={styles.Cockpit}>
            <h1>{props.title}</h1>
            
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button onClick={props.toggle} className={btnClass}>Toggle Persons
            </button>
        </div>
    );
};

export default Cockpit;