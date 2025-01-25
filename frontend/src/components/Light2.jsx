
import React from "react";
import { Switch } from "antd";
import { useDispatch } from "react-redux";
import socket from "../services/socket";

const Light2 = ({ lightState, room, light }) => {
  const dispatch = useDispatch();

  const onChange = (checked) => {
    dispatch({ type: "UPDATE_STATE", payload: { [room]: { [light]: checked } } });
    socket.emit("toggleSwitch", { room, light, state: checked });
  };

  return (
    <div className="lightdiv">
      <h3>Light 2</h3>
      <Switch
        className="custom-toggle-button"
        checked={lightState}
        onChange={onChange}
      />
    </div>
  );
};

export default Light2;
