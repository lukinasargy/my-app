import React, {useEffect, useRef, useContext} from 'react';
// import styles from "./Cockpit.module.css";
import AuthContext from "../../context/auth-context";
import styled from 'styled-components';


const StyledButton = styled.button`
    border: 1px solid dodgerblue;
    padding: 16px;
    background-color: ${props => props.altButton ? 'red' : 'green'};
    font: inherit;
    color: #fff;
    transition: 0.3s all;
    cursor: pointer;
    &:hover  {
    background-color:  ${props => props.altButton ? 'salmon' : 'lightgreen'};
    color: #000;
    }
`;
const Cockpit = (props) => {

    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);
    console.log('Cockpit.js' + authContext.authenticated);

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        toggleBtnRef.current.click();

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
    // if (props.show) {
    //     btnClass = styles.Red;
    // }
    // if (props.personsLength <= 2) {
    //     assignedClasses.push(styles.red);
    // }
    // if (props.personsLength <= 1) {
    //     assignedClasses.push(styles.bold);
    // }
    return (
        <div >
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <StyledButton altButton={props.show} ref={toggleBtnRef} onClick={props.toggle} >Toggle Persons
            </StyledButton>
            <br/>
            <br/>
                <StyledButton onClick={authContext.login}>Log in</StyledButton>
        </div>
    );
};

export default React.memo(Cockpit);
//wrapping functional component instead of shouldComponentUpdate for class based component also we have to get rid of state dependencies. Memo rerender if only inputs change