import React from 'react';

const UserOutput = (props) => {
    const style = {
        border: "10px solid blue"
    };

    return (
        <div style={style}>
            <p> FIRST paragraph</p>
            <p> SECOND paragraph</p>
            <p> USERNAME {props.username}</p>
        </div>
    )
};

export default UserOutput;
