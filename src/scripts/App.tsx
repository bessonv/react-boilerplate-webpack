import * as React from "react";
import "Scss/style.scss";
import image from 'Images/react.png';

const App = () => {
    return (
        <main className="title__title-box">
            <h1 className="title__name ">Hello World</h1>
            <img src={image} alt="react-icon"/>
        </main>
    );
}

export default App;
