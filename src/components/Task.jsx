import React, { useState, useEffect } from "react";
import ReminderModal from "./ReminderModal/ReminderModal";

const Task = ({ task, updateTaskCompletion, deleteTask }) => {
  const [isOpen, setIsOpen] = useState(false);
  const reminderString = `Remember to complete your task today to do ${task.title}`;
  const [reminderInput, setReminderInput] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const setReminder = (taskId, input) => {
    setReminderInput(input);
    closeModal();
  };

  useEffect(() => {
    if (reminderInput) {
      if (
        new Date(reminderInput).getHours() === new Date().getHours() &&
        new Date(reminderInput).getMinutes() === new Date().getMinutes() &&
        new Date().getSeconds() === 1
      ) {
        console.log(new Date().getSeconds() === 0, "MILLI");
        alert(reminderString);
      }
    }
    setCurrentTime(new Date());
  }, [currentTime]);

  return (
    <div className="task section" key={task.id}>
      <div className="col s3">
        <p>
          <label>
            <input
              type="checkbox"
              className="filled-in"
              checked={task.is_done}
              onChange={() => updateTaskCompletion(task.id)}
            />
            <span>{task.title}</span>
          </label>
        </p>
      </div>
      <ReminderModal
        setReminder={setReminder}
        task={task}
        isOpen={isOpen}
        closeModal={closeModal}
      />
      <div className="col s3">
        <p>{task.description}</p>
      </div>
      <div className="col s3">
        <button className="btn-small" onClick={() => openModal()}>
          Set Reminder
        </button>
      </div>
      <div className="col s3">
        <button className="btn-small" onClick={() => deleteTask(task.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Task;
