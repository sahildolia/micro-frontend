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
    dispatch(setNotification("New message from Chat App!"));
  };
  return (
    <>
      <Notification showInApp="chat" />
      <div
        style={{
          margin: "10px",
          padding: "10px",
          textAlign: "center",
          backgroundColor: "cyan",
        }}
      >
        <h1>Chat Application</h1>
        <Button onClick={sendMessage} label="Send message" />
      </div>
    </>
  );
};

export default App;
