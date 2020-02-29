import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    width: 60%;
    margin: auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;
    background-color: blue;
    
    "@media (min-width: 500px)": {
        width: "450px"
    }
`;

const person = (props) => {
    return (
        <StyledDiv>
            <p onClick={props.click}>I'm {props.name} and I am {props.age}!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.nameChange} value={props.name}/>
        </StyledDiv>
    )
};

export default person;


