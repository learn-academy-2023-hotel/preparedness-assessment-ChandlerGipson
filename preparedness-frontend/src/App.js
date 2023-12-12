import React, { useState } from "react";
import { Button, Input, Label } from "reactstrap";
import ModalComponent from "./components/ModalComponent";
import "./App.css";


const App = () => {
  const [modal, setModal] = useState(false);
// this insures when the servee is loaded its loaded without the promt untill an imput is put in
  const [name, setName] = useState("");
// the usestate with an empty array makes sure the theres nothing in it until something is imputted

  const handleChange = (e) => {
    // will handle change in the input field
    setName(e.target.value);
  };

  const toggle = () => setModal(!modal);
  // toggles the value of modal

  const reset = () => setName("");

  // Return the JSX representing the component's UI
  return (
    <div className="entire-content">
      <h1>Preparedness Assessment</h1>
      <div className="form">
        <div className="input">
          <Label for="name">Enter your name</Label>
          <Input type="text" onChange={handleChange} value={name} />
        </div>
        <Button onClick={toggle}>Click Me</Button>
        <Button onClick={reset}>Reset</Button>
        <ModalComponent modal={modal} toggle={toggle} name={name} />
      </div>
    </div>
  );
};

export default App;
