import React from "react";
import TaskForm from "./TaskForm";

const TaskFormContainer = () => {
  const handleSubmit = (e, title, description, userId = 1) => {
    e.preventDefault();
    fetch(`http://localhost:9000/api/tasks/task`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description, user_id: userId }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success post:", data);
      })
      .catch((error) => {
        console.error("Error post:", error);
      });
  };

  return <TaskForm handleSubmit={handleSubmit} />;
};

export default TaskFormContainer;
