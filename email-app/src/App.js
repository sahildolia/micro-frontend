import React, { useState } from "react";
import Button from "app1/Button";
import Notification from "app1/Notification";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { setNotification } from "app1/notificationSlice";

const App = () => {
  const dispatch = useDispatch();
  const [emails, setEmails] = useState([]);
  const [newEmail, setNewEmail] = useState({ to: "", subject: "", body: "" });

  const handleSendEmail = () => {
    if (newEmail.to && newEmail.subject && newEmail.body) {
      const email = { ...newEmail, id: Date.now(), read: false };
      setEmails([...emails, email]);
      setNewEmail({ to: "", subject: "", body: "" });
      dispatch(setNotification("Hey! you got a new email in your inbox"));
    }
  };

  const markAsRead = (id) => {
    setEmails(
      emails.map((email) =>
        email.id === id ? { ...email, read: true } : email
      )
    );
  };

  return (
    <div className="container py-5">
      <Notification showInApp="email" />
      <h1 className="mb-4 text-center text-primary">Email Application</h1>
      <div className="card shadow p-4 bg-light">
        <h5>Compose Email</h5>
        <input
          type="email"
          placeholder="To"
          className="form-control mb-2"
          value={newEmail.to}
          onChange={(e) => setNewEmail({ ...newEmail, to: e.target.value })}
        />
        <input
          type="text"
          placeholder="Subject"
          className="form-control mb-2"
          value={newEmail.subject}
          onChange={(e) =>
            setNewEmail({ ...newEmail, subject: e.target.value })
          }
        />
        <textarea
          className="form-control mb-3"
          placeholder="Body"
          rows="3"
          value={newEmail.body}
          onChange={(e) => setNewEmail({ ...newEmail, body: e.target.value })}
        />
        <Button onClick={handleSendEmail} label="Send Email" />
        <hr />
        <h5>Inbox</h5>
        {emails.length === 0 ? (
          <p>No emails yet</p>
        ) : (
          emails.map((email) => (
            <div
              key={email.id}
              className={`alert ${
                email.read ? "alert-secondary" : "alert-primary"
              }`}
              onClick={() => markAsRead(email.id)}
            >
              <strong>{email.subject}</strong>
              <p>To: {email.to}</p>
              <small>{email.read ? "Read" : "Unread"}</small>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default App;
