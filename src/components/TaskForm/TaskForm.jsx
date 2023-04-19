import React, { useState } from "react";

const TaskForm = ({ handleSubmit }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskInfo, setTaskInfo] = useState("");

  return (
    <div className="row">
      <form
        onSubmit={(e) => handleSubmit(e, taskTitle, taskInfo)}
        className="col s12"
      >
        <div className="row">
          <div className="input-field col s5">
            <input
              type="text"
              value={taskTitle}
              id="task-title"
              onChange={(e) => setTaskTitle(e.target.value)}
            />
            <label htmlFor="task-title">Task Title</label>
          </div>
          <div className="input-field col s5">
            <input
              type="text"
              value={taskInfo}
              id="task-description"
              onChange={(e) => setTaskInfo(e.target.value)}
            />
            <label htmlFor="task_description">Task Description</label>
          </div>
          <div className="input-field col s2">
            <button className="btn waves-effect waves-light" type="submit">
              Add Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
