import React from "react";

const ValidationComponent = (props) => {
    const msg = props.textLength < 5 ?
        "too short" : "long enough";

    return (
        <div>{msg}</div>
    )
};

export default ValidationComponent;
