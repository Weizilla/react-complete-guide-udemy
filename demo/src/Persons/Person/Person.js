import React, {Component} from 'react';
import classes from "./Person.module.css";
import withClass from "../../hoc/withClass"
import Aux from "../../hoc/Aux";
import PropTypes from "prop-types";

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  componentDidMount() {
    this.inputElementRef.current.focus();
  }

  render() {
    console.log("Person.js render");
    return (
      <Aux>
        <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age}!</p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.nameChange}
          value={this.props.name}
          ref={this.inputElementRef}
        />
      </Aux>
    )
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  nameChange: PropTypes.func,
};

export default withClass(Person, classes.Person);


