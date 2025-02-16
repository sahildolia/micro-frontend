import React from "react";
import { useSelector } from "react-redux";

const Notification = ({ showInApp }) => {
  const message = useSelector((state) => state.notification.message);

  if (!message || (showInApp && showInApp !== window.appName)) {
    return null;
  }

  return <div className="alert alert-success">{message}</div>;
};

export default Notification;
