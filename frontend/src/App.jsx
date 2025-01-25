import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import AppRoute from "./routes/Route";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import socket from "./services/socket";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on("updateState", (data) => {
      dispatch({ type: "UPDATE_STATE", payload: data });
    });

    return () => {
      socket.off("updateState");
    };
  }, [dispatch]);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <AppRoute />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App
