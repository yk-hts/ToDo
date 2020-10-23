import React, { useState, useEffect } from "react";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [fintasks, setFinTasks] = useState([]);

  useEffect(() => {
    if ("tasks" in localStorage) {
      setTasks(JSON.parse(localStorage.getItem("tasks")));
    }
    // localStorage.clear();
  }, []);

  const deleteTask = (i) => {
    const tmp = [...tasks];
    let fintmp = [];
    if ("fintasks" in localStorage) {
      fintmp = JSON.parse(localStorage.getItem("fintasks"));
    }
    fintmp = [...fintasks, tasks[i]];
    tmp.splice(i, 1);
    setTasks(tmp);
    setFinTasks(fintmp);
    localStorage.setItem("tasks", JSON.stringify(tmp));
    localStorage.setItem("fintasks", JSON.stringify(fintmp));
  };

  return (
    <div>
      <section className="section">
        <label className="title is-2">UpComing</label>
        {tasks.map((task, i) => {
          return (
            <div className="card" key={i}>
              <header className="card-header">
                <p className="card-header-title">{task.title}</p>
                <a
                  className="card-header-icon"
                  aria-label="delete"
                  onClick={() => deleteTask(i)}
                >
                  <span className="icon">
                    <i className="fas fa-minus-circle"></i>
                  </span>
                </a>
              </header>
              <div className="card-content">
                <div className="content">{task.content}</div>
              </div>
            </div>
          );
        })}
      </section>
      <section className="section">
        <label className="title is-2">Finished</label>
        {fintasks.map((fintask, i) => {
          return (
            <div className="card" key={i}>
              <header className="card-header">
                <p className="card-header-title">{fintask.title}</p>
              </header>
              <div className="card-content">
                <div className="content">{fintask.content}</div>
              </div>
            </div>
          );
        })}
      </section>
      {/* {data.map((item, i) => (
        <div>
          {item}
          <button type="submit" onClick={() => handleDelete(i)}>
            削除
          </button>
        </div>
      ))} */}
    </div>
  );
};

export default TaskList;
