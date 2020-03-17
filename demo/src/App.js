import React, {Component} from 'react';
import classes from "./App.module.css";
import Persons from "./Persons/Persons";
import Cockpit from "./Cockpit/Cockpit";
import withClass from "./hoc/withClass";
import Aux from "./hoc/Aux";

class App extends Component {
    constructor(props) {
        super(props);
        console.log("App.js constructor");

        this.state = {
            persons: [
                {id: "1", name: "max", age: 33},
                {id: "2", name: "manu", age: 29},
                {id: "3", name: "bob", age: 26}
            ],
            showPersons: true,
            showCockpit: true,
            changeCounter: 0,
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

        this.setState((prevState, props) => {
            return {
                persons: persons,
                changeCounter: prevState.changeCounter + 1,
            };
        });
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
            <Aux>
                <p>{this.state.changeCounter}</p>
                <button onClick={() => {this.setState({showCockpit: ! this.state.showCockpit})}}>Show Cockpit</button>
                {
                    this.state.showCockpit ?
                        <Cockpit
                            title={this.props.title}
                            showPersons={this.state.showPersons}
                            personLength={this.state.persons.length}
                            clicked={this.togglePersonsHandler}
                        /> : null
                }
                {persons}
            </Aux>
        );
    }
};

export default withClass(App, classes.App);
