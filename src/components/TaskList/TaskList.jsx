import React, { useState, useEffect } from "react";
import Task from "../Task";

const TaskList = ({ userId }) => {
  const [tasks, setTasks] = useState();

  const fetchTasks = async () => {
    const response = await fetch(
      `http://localhost:9000/api/tasks/user/${userId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    const data = await response.json();
    setTasks(data.data);
  };

  const updateTaskCompletion = (is_done, id) => {
    fetch(`http://localhost:9000/api/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ is_done: !is_done }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success put:", data);
      })
      .catch((error) => {
        console.error("Error put:", error);
      });
    fetchTasks();
  };

  const deleteTask = (id) => {
    fetch(`http://localhost:9000/api/tasks/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success delete:", data);
      })
      .catch((error) => {
        console.error("Error delete:", error);
      });
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, [tasks]);

  return (
    <div className="container">
      {tasks &&
        tasks.map((task, idx) => (
          <div className="row">
            <Task
              key={`${task.id}-${idx}`}
              task={task}
              updateTaskCompletion={() =>
                updateTaskCompletion(task.is_done, task.id)
              }
              deleteTask={() => deleteTask(task.id)}
            />
          </div>
        ))}
    </div>
  );
};

export default TaskList;
