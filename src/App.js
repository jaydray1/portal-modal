import React from "react";
import "./styles.css";
import styled from "styled-components";
import Modal from "./Modal";
import useModal from "./useModal";
import { imageArray } from "./models";

const Button = styled.button`
  background-color: black;
  color: white;
  width: 20em;
  height: 3em;
  border-radius: 3%;
  :hover {
    cursor: pointer;
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const App = () => {
  const { isShowing, toggle } = useModal();
  const [currentUrl, setCurrentUrl] = React.useState("");

  const modalHandler = val => {
    setCurrentUrl(val);
  };

  return (
    <div className="App">
      <h1>Options to Images Proto</h1>
      <h2>Click the button to see images</h2>
      <Button onClick={toggle}>Click Here to Open Modal</Button>
      <Modal
        isShowing={isShowing}
        hide={toggle}
        images={imageArray}
        modalHandler={modalHandler}
      />
      <div style={{ marginTop: "10px" }}>{currentUrl}</div>
    </div>
  );
};

export default App;
