import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Signup from "./Signup/Signup";
import Login from "./Login/Login";
import TaskPage from "./TaskPage/TaskPage";

const App = () => {
  const [isAuthenticated, setAuth] = useState(false);
  const [user, setUser] = useState({});

  const PrivateRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/" />;
  };

  return (
    <div className="app container">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={<Signup setAuth={setAuth} setUser={setUser} />}
          />
          <Route
            path="/login"
            element={<Login setAuth={setAuth} setUser={setUser} />}
          />
          <Route
            path="/tasks"
            element={
              <PrivateRoute>
                <TaskPage user={user} />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
      {/* <TaskFormContainer />
      <TaskList /> */}
    </div>
  );
};

export default App;
