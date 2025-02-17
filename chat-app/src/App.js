import React, { useState } from "react";
import Button from "app1/Button";
import Notification from "app1/Notification";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { setNotification } from "app1/notificationSlice";

const App = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = () => {
    dispatch(setNotification("New message from Chat App!"));
  };

  const handleSend = () => {
    if (message.trim()) {
      setMessages([...messages, message]);
      setMessage("");
    }
  };

  return (
    <div className="container py-5">
      <Notification showInApp="chat" />
      <h1 className="mb-4 text-center text-primary">Chat Application</h1>
      <div className="card shadow p-4 bg-light">
        <div className="mb-3">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Type a message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className="d-flex justify-content-between">
          <Button onClick={handleSend} label="Send Message" />
          <Button onClick={sendMessage} label="Notify" />
        </div>
        <hr />
        <div className="mt-4">
          <h5>Messages:</h5>
          <ul className="list-group">
            {messages.map((msg, index) => (
              <li
                key={index}
                className="list-group-item bg-info text-white mb-2 rounded"
              >
                {msg}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
