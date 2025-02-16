import React, { Suspense } from "react";
const RemoteApp = React.lazy(() => import("app2/App"));
const RemoteApp2 = React.lazy(() => import("app3/EmailApp"));
// import RemoteApp from "app2/App";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <div
        style={{
          margin: "10px",
          padding: "10px",
          textAlign: "center",
          backgroundColor: "greenyellow",
        }}
      >
        <h1>Host Application</h1>
      </div>
      <Suspense fallback={"loading..."}>
        <RemoteApp />
      </Suspense>
      <Suspense fallback={"loading..."}>
        <RemoteApp2 />
      </Suspense>
    </>
  );
};

export default App;
