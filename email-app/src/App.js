import React from "react";
import Button from "app1/Button";
import Notification from "app1/Notification";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { setNotification } from "app1/notificationSlice";

const App = () => {
  const dispatch = useDispatch();

  const sendMessage = () => {
    debugger;
    dispatch(setNotification("Hey! you got a new email in your inbox"));
  };
  return (
    <>
      <Notification showInApp="email" />
      <div
        style={{
          margin: "10px",
          padding: "10px",
          textAlign: "center",
          backgroundColor: "blue",
        }}
      >
        <h1>Email Application</h1>
        <Button onClick={sendMessage} />
      </div>
    </>
  );
};

export default App;
