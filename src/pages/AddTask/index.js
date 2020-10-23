import React, { useEffect, useState } from "react";

const AddTask = () => {
  // const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: "", content: "" });
  // const [state, setstate] = useState("");

  // const [newData, setNewData] = useState("")

  // const handleSubmitData = () => {
  //     setData([...data, newData])
  //     setNewData("")
  // }

  const addTask = () => {
    let tasks = [];
    if ("tasks" in localStorage) {
      tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    tasks = [...tasks, { title: newTask.title, content: newTask.content }];
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setNewTask((prevState) => {
      return { ...prevState, [name]: value };
    });
    console.log(newTask);
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTask();
          setNewTask({ title: "", content: "" });
        }}
      >
        <label className="title is-4">title</label>
        <div>
          <div className="field">
            <div className="control">
              <input
                className="input is-info"
                type="text"
                name="title"
                value={newTask.title}
                onChange={handleChange}
                placeholder="title"
              />
            </div>
          </div>
        </div>
        <label className="title is-4">content</label>
        <div className="control">
          <textarea
            className="textarea is-hoverd"
            name="content"
            value={newTask.content}
            placeholder="content"
            onChange={handleChange}
          />
        </div>
        <button
          className="button is-dark"
          type="submit"
          disabled={!newTask.title || !newTask.content}
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
