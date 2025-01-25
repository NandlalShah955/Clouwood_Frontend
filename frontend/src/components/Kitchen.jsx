import React from "react";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import socket from "../services/socket";
import Light1 from "./Light1";
import Light2 from "./Light2";
import "../styles/Styles.css";

const Kitchen = () => {
  const kitchen = useSelector((state) => state.kitchen); 
  console.log(kitchen);
  const dispatch = useDispatch();

  const turnOnBoth = () => {
    const updatedState = { ...kitchen, light1: true, light2: true };
    dispatch({ type: "UPDATE_STATE", payload: { kitchen: updatedState } });
    socket.emit("toggleBoth", { room: "kitchen", state: true });
  };

  const turnOffBoth = () => {
    const updatedState = { ...kitchen, light1: false, light2: false };
    dispatch({ type: "UPDATE_STATE", payload: { kitchen: updatedState } });
    socket.emit("toggleBoth", { room: "kitchen", state: false });
  };

  return (
    <div className="kitchen">
      <h2>Kitchen</h2>
      <Light1 lightState={kitchen.light1} room="kitchen" light="light1" />
      <Light2 lightState={kitchen.light2} room="kitchen" light="light2" />
      <div className="bedroom-buttons">
        <Button onClick={turnOnBoth}>Both On</Button>
        <Button onClick={turnOffBoth}>Both Off</Button>
      </div>
    </div>
  );
};

export default Kitchen;
