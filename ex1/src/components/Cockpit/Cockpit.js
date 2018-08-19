import React from 'react'
import classes from './Cockpit.css'
const cockpit = (props) => {
    let assigneedclass = ['red', 'bold'].join('  ');
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.red;
    }
    return (
        <div className={classes.Cockpit}>
            <h1>Hi, I'm React app</h1>
            <p className={assigneedclass}>This is really working?</p>
            <button className={btnClass} onClick={props.clicked}  > Switch name </button>
        </div>
    ) ;
}

export default cockpit;
