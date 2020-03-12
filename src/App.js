import React from "react";
import "./styles.css";
import styled from "styled-components";
import Modal from "./Modal";
import useModal from "./useModal";

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
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Button onClick={toggle}>Click Here to Open Modal</Button>
      <Modal isShowing={isShowing} hide={toggle} />
    </div>
  );
};

export default App;
