import React from 'react';
import "./UserInput.css"

const UserInput = (props) => {
    return (
        <div className="UserInput">
            <input onChange={props.change} type="text"
                   value={props.username}
            >

            </input>
        </div>
    )
};

export default UserInput;
