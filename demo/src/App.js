import React, {useState} from 'react';
import classes from "./App.module.css";
import Person from './Person/Person';

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

    const btnClasses = [classes.Button];
    let persons = null;
    if (showPersonsState.showPersons) {
        persons = (
            <div>
                {personsState.persons.map((person, index) => {
                    return <Person
                        name={person.name}
                        age={person.age}
                        click={() => deletePersonHandler(index)}
                        nameChange={(event) => nameChangedHandler(event, person.id)}
                        key={person.id}
                    />
                })}
            </div>
        );

        btnClasses.push(classes.Red);
    }

    const appliedClasses = [];
    if (personsState.persons.length <= 2) {
        appliedClasses.push(classes.red);
    }
    if (personsState.persons.length <= 1) {
        appliedClasses.push(classes.bold);
    }

return (
        <div className={classes.App}>
            <h1>hello react</h1>
            <p className={appliedClasses.join(" ")}>hello</p>
            <button className={btnClasses.join(" ")} onClick={togglePersonsHandler}>Toggle</button>
            <div>{persons}</div>
        </div>
    );
};

export default App;
