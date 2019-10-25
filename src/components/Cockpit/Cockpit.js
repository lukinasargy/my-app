import React, {useEffect} from 'react';
import styles from "./Cockpit.module.css";

const Cockpit = (props) => {
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        //http request
        setTimeout( () => {
            alert('saved data to cloud!');
        },1000);
    }, [props.persons]);
    //should execute when our persons changes and when initialized, or run initially when array is empty


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