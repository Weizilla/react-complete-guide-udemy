import React, {useState} from 'react';
import './App.css';
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

    const style = {
        backgroundColor: "white",
        font: "inherit",
        border: "1px solid blue",
        padding: "8px",
        cursor: "pointer"
    };

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
        )
    }

    return (
        <div className="App">
            <h1>hello react</h1>
            <button onClick={togglePersonsHandler}>Toggle</button>
            <div>{persons}</div>

        </div>
    );
};

export default App;
