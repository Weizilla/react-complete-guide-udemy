import React, {useEffect} from "react";
import classes from "./Cockpit.module.css";

const Cockpit = (props) => {
    useEffect(() => {
        console.log("Cockpit.js useEffect");

        const timer = setTimeout(() => {
            alert("Saved data to cloud")
        }, 1000);

        return () => {
            clearTimeout(timer);
            console.log("Cockpit.js clean up after");
        }
    });

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
            <h1>{props.title}</h1>
            <p className={appliedClasses.join(" ")} > hello </p>
            <button className={btnClasses} onClick={props.clicked}>Toggle</button>
        </div>
    );
};

export default Cockpit;
