import React from "react";
import { useNavigate } from "react-router-dom";
import SignupForm from "./SignupForm";

const Signup = ({ setAuth, setUser }) => {
  const navigate = useNavigate();

  const createAccount = async (e, name, email, password) => {
    e.preventDefault();
    await fetch("http://localhost:9000/api/users/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
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
      <SignupForm createAccount={createAccount} />
    </div>
  );
};

export default Signup;
