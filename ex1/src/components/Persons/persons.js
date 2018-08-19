import React, {Component} from 'react'
import Person from './Person/Person';

class Persons extends Component  {
    componentWillReceiveProps() {
        console.log( ' [UPDATE persons.js]  inside componentWillReceiveProps' );
    }

    shouldComponentUpdate(nextProps, nextStates) {
        console.log(' [UPDATE persons.js]  inside shouldComponentUpdate');
        // return nextProps.persons !== this.props.persons;
        return true;
    }

    componentWillUpdate(nextProps,  nextStates) {
        console.log(' [UPDATE persons.js]  inside componentWillUpdate' , nextProps, nextStates);
    }

    render () {
        return this. props.persons.map((person, index) => {
            return <Person
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)}
            />
        } );
    }
}

export default Persons;
