import React, {Component} from "react";
import Person from "./Person/Person";

class Persons extends Component {
    static getDerivedStateFromProps(props, state) {
        console.log("Persons.js get derived");
        return state;
    }

    shouldComponentUpdate(nextProps,nextState) {
        console.log("Persons.js should update");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("Persons.js before update");
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Person.js did update");
    }

    render() {
        console.log("Persons.js render");
        return this.props.persons.map((person, index) => {
            return <Person
                name={person.name}
                age={person.age}
                click={() => this.props.clicked(index)}
                nameChange={(event) => this.props.changed(event, person.id)}
                key={person.id}
            />
        });
    }
}

export default Persons;
