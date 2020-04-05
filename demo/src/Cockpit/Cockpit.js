import React, {useEffect, useRef, useContext} from "react";
import classes from "./Cockpit.module.css";
import AuthContext from "../context/auth-context";

const Cockpit = (props) => {
    const toggleBottleRef = useRef(null);
    const authContext = useContext(AuthContext);

    console.log("Cockpit context", authContext);

    useEffect(() => {
        console.log("Cockpit.js useEffect");

        //const timer = setTimeout(() => {
        //    alert("Saved data to cloud")
        //}, 1000);

        //toggleBottleRef.current.click();

        return () => {
            //clearTimeout(timer);
            console.log("Cockpit.js clean up after");
        }
    });

    let btnClasses = "";
    if (props.showPersons) {
        btnClasses = classes.Red;
    }

    const appliedClasses = [];
    if (props.personsLength <= 2) {
        appliedClasses.push(classes.red);
    }
    if (props.personsLength <= 1) {
        appliedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={appliedClasses.join(" ")} > hello </p>
            <button ref={toggleBottleRef} className={btnClasses} onClick={props.clicked}>Toggle</button>
            <button onClick={authContext.login}>Login</button>
        </div>
    );
};

export default React.memo(Cockpit);
