import React from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";

const Login = ({ setAuth, setUser }) => {
  const navigate = useNavigate();

  const login = async (e, email, password) => {
    e.preventDefault();
    await fetch("http://localhost:9000/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success post:", data);
        setAuth(true);
        setUser(data.data);
        navigate("/tasks");
      })
      .catch((error) => {
        console.error("Error post:", error);
      });
  };

  return (
    <div className="container">
      <LoginForm login={login} />
    </div>
  );
};

export default Login;
