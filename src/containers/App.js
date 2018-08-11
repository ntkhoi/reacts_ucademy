import React, { Component } from 'react';
import logo from '../logo.svg';
import classes from './App.css';
// import Radium, { StyleRoot } from 'radium';
import Person from '../components/Persons/Person/Person'
import Persons from '../components/Persons/persons'
import ErrorBoundary from '../components/errorBoundary/ErrorBoundary'
import Cockpit from '../components/Cockpit/Cockpit'


class App extends Component {
    state = {
        persons: [
            { id: '123', name: 'Max', age: 28 },
            { id: '43', name: 'Manu', age: 23 },
            { id: '212131', name: 'Goh Nguyen', age: 26 },
        ]
    }


    nameChangedHandler = (event, id) => {
        console.log(id);
        console.log(event.target.value);
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });
        const person = {
            ...this.state.persons[personIndex]
        };
        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;
        this.setState({ persons: persons });
    }

    togglePersonsHandler = () => {
        this.setState({ showPersons: !this.state.showPersons });
    }

    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({ persons: persons });
    }

    render() {
        const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
        };

        let persons = null;
        let btnClass = '';
        if (this.state.showPersons) {
            persons = <Persons
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangedHandler}
            />;
            style.backgroundColor = 'red';
            btnClass = classes.Red;
        }

        return (
            <div className={classes.App}>
                <Cockpit
                    showPersons={this.state.showPersons}
                    clicked = {this.togglePersonsHandler}
                />
                {persons}
            </div>
        );
    }
}

export default App;
