import React from 'react';
import './App.css';
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends React.Component {
    state = {
        username: "USERNAME"
    };

    usernameChangeHandler = (event) => {
        this.setState({
            username: event.target.value
        })
    };

    render() {
        return (
            <div className="App">
                <UserInput
                    change={this.usernameChangeHandler}
                    username={this.state.username}
                />
                <UserOutput username={this.state.username}/>
            </div>
        );
    }
}

export default App;
