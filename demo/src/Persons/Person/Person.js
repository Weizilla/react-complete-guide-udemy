import React, {Component} from 'react';
import classes from "./Person.module.css";

class Person extends Component {
    render() {
        console.log("Person.js");
        return (
            <div className={classes.Person}>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age}!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.nameChange} value={this.props.name}/>
            </div>
        )
    }
}

export default Person;

