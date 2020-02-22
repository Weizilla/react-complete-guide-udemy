import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>hello react</h1>
                <Person name="Max" age="28"/>
                <Person name="Manu" age="29">My hobby is racing</Person>
                <Person name="Bob" age="28"/>
            </div>
        );
    }
}

export default App;
