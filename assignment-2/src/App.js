import React, {useState} from 'react';
import './App.css';
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent";

const App = () => {
    const [textState, setTextState] = useState({
        text: []
    });

    const textChangeHandler = (event) => {
        const newText = event.target.value.split("");
        setTextState({
            text: newText
        })
    };

    const deleteHandler = (index) => {
        const newText = [...textState.text];
        newText.splice(index, 1);
        setTextState({
            text: newText
        })
    };

    return (
        <div className="App">
            <input type="text"
                   onChange={textChangeHandler}
                   value={textState.text.join("")}
            />
            <p>Length {textState.text.length}</p>
            <ValidationComponent textLength={textState.text.length}/>
            {
                textState.text.map((c, i) => {
                    return <CharComponent
                        key={i}
                        character={c}
                        index={i}
                        delete={() => deleteHandler(i)}
                    />
                })
            }
        </div>
    );
};



export default App;
