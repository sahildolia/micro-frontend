import React, { Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const RemoteApp = React.lazy(() => import("app2/App"));
const RemoteApp2 = React.lazy(() => import("app3/EmailApp"));

const App = () => {
  return (
    <div className="container-fluid p-0">
      <header className="bg-secondary text-white text-center py-4 shadow">
        <h1 className="display-4">
          Welcome to the Micro-Frontend Host Application
        </h1>
        <p className="lead">
          Excited to join Bluebash and contribute to an innovative,
          forward-thinking team! Looking for positive feedback
        </p>
      </header>

      <main className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="mb-4">Integrated Applications</h2>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Chat Application</h5>
                  <Suspense
                    fallback={
                      <div
                        className="spinner-border text-primary"
                        role="status"
                      >
                        <span className="sr-only">Loading Chat...</span>
                      </div>
                    }
                  >
                    <RemoteApp />
                  </Suspense>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Email Application</h5>
                  <Suspense
                    fallback={
                      <div
                        className="spinner-border text-primary"
                        role="status"
                      >
                        <span className="sr-only">Loading Email...</span>
                      </div>
                    }
                  >
                    <RemoteApp2 />
                  </Suspense>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
