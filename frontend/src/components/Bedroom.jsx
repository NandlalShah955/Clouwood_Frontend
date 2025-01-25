import React from "react";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import socket from "../services/socket";
import Light1 from "./Light1";
import Light2 from "./Light2";
import "../styles/Styles.css";

const Bedroom = () => {
  const bedroom = useSelector((state) => state.bedroom); // Access bedroom state from Redux
  const dispatch = useDispatch();

  // Handle "Both On" button
  const turnOnBoth = () => {
    const updatedState = { ...bedroom, light1: true, light2: true };
    dispatch({ type: "UPDATE_STATE", payload: { bedroom: updatedState } });
    socket.emit("toggleBoth", { room: "bedroom", state: true });
  };

  // Handle "Both Off" button
  const turnOffBoth = () => {
    const updatedState = { ...bedroom, light1: false, light2: false };
    dispatch({ type: "UPDATE_STATE", payload: { bedroom: updatedState } });
    socket.emit("toggleBoth", { room: "bedroom", state: false });
  };

  return (
    <div className="bedroom">
      <h2>Bed Room</h2>
      <Light1 lightState={bedroom.light1} room="bedroom" light="light1" />
      <Light2 lightState={bedroom.light2} room="bedroom" light="light2" />
      <div className="bedroom-buttons">
        <Button onClick={turnOnBoth}>Both On</Button>
        <Button onClick={turnOffBoth}>Both Off</Button>
      </div>
    </div>
  );
};

export default Bedroom;
