import React from "react";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import socket from "../services/socket";
import "../styles/Styles.css";

const MyButton = () => {
  const dispatch = useDispatch();

  // Function to turn on all lights
  const turnAllOn = () => {
    const updatedState = {
      bedroom: { light1: true, light2: true },
      kitchen: { light1: true, light2: true },
    };
    dispatch({ type: "UPDATE_STATE", payload: updatedState });
    socket.emit("toggleAll", { state: true }); 
  };

  // Function to turn off all lights
  const turnAllOff = () => {
    const updatedState = {
      bedroom: { light1: false, light2: false },
      kitchen: { light1: false, light2: false },
    };
    dispatch({ type: "UPDATE_STATE", payload: updatedState });
    socket.emit("toggleAll", { state: false }); 
  };

  return (
    <div className="user-buttons">
      <Button onClick={turnAllOn}>All ON</Button>
      <Button onClick={turnAllOff}>All OFF</Button>
    </div>
  );
};

export default MyButton;
