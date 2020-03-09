import React, {Component, useState} from 'react';
import classes from "./App.module.css";
import Persons from "./Persons/Persons";
import Cockpit from "./Cockpit/Cockpit";

class App extends Component {
    constructor(props) {
        super(props);
        console.log("App.js constructor");

        this.state = {
            persons: [
                {id: "1", name: "max", age: 28},
                {id: "2", name: "manu", age: 29},
                {id: "3", name: "bob", age: 26}
            ],
            showPersons: true
        };
    }

    static getDerivedStateFromProps(props, state) {
        console.log("App.js derived state");
        return state;
    }

    componentDidMount() {
        console.log("App.js component did mount");
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("App.js should component update")
        return true;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("App.js component did update");
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({persons: persons})
    };

    deletePersonHandler = (index) => {
        const persons = this.state.persons.slice();
        persons.splice(index, 1);
        this.setState({persons: persons});
    };

    togglePersonsHandler = () => {
        const oldState = this.state.showPersons;
        this.setState({
            showPersons: ! oldState
        })
    };


    render() {
        let persons = null;
        if (this.state.showPersons) {
            persons = <Persons
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangedHandler}
            />
        }

        return (
            <div className={classes.App}>
                <Cockpit
                    title={this.props.title}
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}
                    clicked={this.togglePersonsHandler}
                />
                {persons}
            </div>
        );
    }
};

export default App;
