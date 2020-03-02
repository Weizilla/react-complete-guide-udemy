import React, {useState} from 'react';
import classes from "./App.module.css";
import Persons from "./Persons/Persons";
import Cockpit from "./Cockpit/Cockpit";

const App = () => {
    const [personsState, setPersonsState] = useState({
        persons: [
            {id: "1", name: "max", age: 28},
            {id: "2", name: "manu", age: 29},
            {id: "3", name: "bob", age: 26}
        ]
    });

    const [showPersonsState, setShowPersonsState] = useState({
        showPersons: true
    });

    const nameChangedHandler = (event, id) => {
        const personIndex = personsState.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...personsState.persons[personIndex]
        };

        person.name = event.target.value;

        const persons = [...personsState.persons];
        persons[personIndex] = person;

        setPersonsState({persons: persons})
    };

    const deletePersonHandler = (index) => {
        const persons = personsState.persons.slice();
        persons.splice(index, 1);
        setPersonsState({persons: persons});
    };

    const togglePersonsHandler = () => {
        const oldState = showPersonsState.showPersons;
        setShowPersonsState({
            showPersons: ! oldState
        })
    };

    let persons = null;

    if (showPersonsState.showPersons) {
        persons = <Persons
            persons={personsState.persons}
            clicked={deletePersonHandler}
            changed={nameChangedHandler}
        />
    }

    return (
        <div className={classes.App}>
            <Cockpit
                showPersons={showPersonsState.showPersons}
                persons={personsState.persons}
                clicked={togglePersonsHandler}
            />
            {persons}
        </div>
    );
};

export default App;
