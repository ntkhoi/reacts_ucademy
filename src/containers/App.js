import React, { Component } from 'react';
import logo from '../logo.svg';
import classes from './App.css';
// import Radium, { StyleRoot } from 'radium';
import Person from '../components/Persons/Person/Person'
import ErrorBoundary from '../components/errorBoundary/ErrorBoundary'

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
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return  <ErrorBoundary key={person.id}> <Person
                            click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}
                            key={person.id}
                            changed={(event) => this.nameChangedHandler(event, person.id)}
                        /></ErrorBoundary>
                    })}
                </div>
            );
            style.backgroundColor = 'red';
            btnClass = classes.Red;
        }
        let assigneedclass = ['red', 'bold'].join('  ');
        return (
            <div className={classes.App}>
                <h1>Hi, I'm React app</h1>
                <p className={assigneedclass}>This is really working?</p>
                <button className={btnClass} onClick={this.togglePersonsHandler}  > Switch name </button>
                {persons}
            </div>
        );
    }
}

export default App;
