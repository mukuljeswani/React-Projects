import React from 'react';
import "./style.css"
import Button from './Button';

const App = () => {
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Hello World</h1>
            {/* <button className = "button">Heyy</button> */}
            <Button title = "App Store" />
            <Button title = "Play Store"/>
        </div>
    );
}

export default App;