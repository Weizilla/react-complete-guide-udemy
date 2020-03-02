import React from "react";
import classes from "./Cockpit.module.css";

const cockpit = (props) => {
    let btnClasses = "";
    if (props.showPersons) {
        btnClasses = classes.Red;
    }

    const appliedClasses = [];
    if (props.persons.length <= 2) {
        appliedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
        appliedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>hello react</h1>
            <p className={appliedClasses.join(" ")} > hello </p>
            <button className={btnClasses} onClick={props.clicked}>Toggle</button>
        </div>
    );
};

export default cockpit;
