import React from "react";

const DisplayTask = ({ taskList, setTaskList, task, setTask }) => {
  const handleDelete = (id) => {
    const updatedTaskList = taskList.filter((task) => task.id !== id);
    setTaskList(updatedTaskList);
  };
  const handleEdit = (id) => {
    const editingTask = taskList.find((task) => task.id === id);
    setTask(editingTask);
  };

  return (
    <section className="showTask">
      <div className="head">
        <div className="">
          <span className="title">Todo</span>
          <span className="count">{taskList.length}</span>
        </div>
        <button className="clearAll" onClick={() => setTaskList([])}>
          Clear ALL
        </button>
      </div>
      <ul>
        {taskList.map((task) => {
          return (
            <li key={task.id}>
              <p>
                <span className="name">{task.name}</span>
                <span className="time">{task.time}</span>
              </p>
              <i
                onClick={() => {
                  handleEdit(task.id);
                }}
                className="bi bi-pencil-square"
              ></i>
              <i
                onClick={() => {
                  handleDelete(task.id);
                }}
                className="bi bi-trash"
              ></i>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default DisplayTask;
