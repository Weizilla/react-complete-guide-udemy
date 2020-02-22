import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person';

const App = () => {
    const [personsState, setPersonsState] = useState({
        persons: [
            {name: "max", age: 28},
            {name: "manu", age: 29},
            {name: "bob", age: 26}
        ]
    });

    const switchNameHandler = (name) => {
        //console.log("was clicked");
        setPersonsState({
            persons: [
                {name: name, age: 28},
                {name: "manu", age: 29},
                {name: "bob", age: 27}
            ]
        })
    };

    const nameChange = (event) => {
        setPersonsState({
            persons: [
                {name: event.target.value, age: 28},
                {name: "ojasidf", age: 29},
                {name: "bob", age: 27}
            ]
        })
    };

    const style = {
        backgroundColor: "white",
        font: "inherit",
        border: "1px solid blue",
        padding: "8px",
        cursor: "pointer"
    };

    return (
        <div className="App">
            <h1>hello react</h1>
            <button
                style={style}
                onClick={() => switchNameHandler("burritos")}>Switch names</button>
            <Person name={personsState.persons[0].name}
                    age={personsState.persons[0].age}
                    click={switchNameHandler.bind(this, "tacos")}
                    nameChange={nameChange}
            />
        </div>
    );
};

export default App;
