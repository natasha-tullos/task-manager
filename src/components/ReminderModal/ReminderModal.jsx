import React, { useState } from "react";
import Modal from "react-modal";

const ReminderModal = ({ task, setReminder, isOpen, closeModal }) => {
  const [reminderDate, setReminderDate] = useState("");

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <div className="modal">
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Reminder Modal"
      >
        <div className="modal-content">
          <div className="row">
            <div className="col s9">
              <h2>Set a Reminder</h2>
            </div>
            <div className="col s3">
              <button className="btn-small" onClick={closeModal}>
                close
              </button>
            </div>
          </div>
          <div>Set up a time to be reminded to complete a task</div>
          <div className="row">
            <form
              className="col s6"
              onSubmit={() => setReminder(task.id, reminderDate)}
            >
              <div className="row">
                <label htmlFor="reminder-time">Set Time for Reminder</label>
                <input
                  type="datetime-local"
                  id="reminder-time"
                  onChange={(e) => setReminderDate(e.target.value)}
                />
              </div>
              <button type="submit" className="btn-small">
                Add Reminder
              </button>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ReminderModal;
