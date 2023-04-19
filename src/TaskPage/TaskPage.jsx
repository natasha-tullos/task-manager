import React from "react";
import TaskFormContainer from "../components/TaskForm/TaskFormContainer";
import TaskList from "../components/TaskList/TaskList";

const TaskPage = ({ user }) => {
  return (
    <div>
      <h1 className="center-align">Task Dashboard</h1>
      <TaskFormContainer />
      <TaskList userId={user.id} />
    </div>
  );
};

export default TaskPage;
