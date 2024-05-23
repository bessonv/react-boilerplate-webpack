import { useState } from "react";
import "./App.scss";
import image from "./assets/react.png";
import { Input } from "@components";

const App = () => {
  const [name, setName] = useState<string>("World");
  return (
    <main className="title__title-box">
      <h1 className="title__name ">Hello {name}</h1>
      <img src={image} alt="react-icon" />
      <Input
        placeholder="World"
        onInput={(e) => {
          if (e.currentTarget.value) {
            setName(e.currentTarget.value);
          } else {
            setName("World");
          }
        }}
      />
    </main>
  );
};

export default App;
