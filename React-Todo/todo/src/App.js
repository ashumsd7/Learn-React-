import React, { useState } from "react";

import "./App.css";

function App() {
  const [taskName, setTaskName] = useState("");
  const [allTasks, setAllTasks] = useState([]);
  const [info, setInfo] = useState("");

  function onAddTask() {
    setInfo("");
    if (taskName.trim().length < 5) {
      setInfo("dekho bhai , mazak nahi.");

      setTimeout(() => {
        setInfo("");
      }, 4000);
      return;
    }

    // let newTaskArray
    setAllTasks((prevState) => {
      return [...prevState, taskName];
    });

    setTaskName("");
  }

  function onKeyDown(e) {
    console.log(e);
  }

  function deleteTask(idx) {
    console.log(" Delete this", idx);
    let newArr = [...allTasks];

    newArr.splice(idx, 1);

    setAllTasks(newArr);
  }

  return (
    <div className=" h-screen lg:w-full relative border border-green-500">
      <header className="w-full h-50  bg-blue-500">
        <div className="text-3xl text-white text-center ">
          {" "}
          Ye raha mera todo
        </div>
      </header>

      <section>
        <div className="flex justify-center mt-2  lg:w-1/3 mx-auto">
          <input
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            className=" focus:border-blue-400 focus:ring-blue-400  text-center flex-auto block"
            placeholder="kya karna chahte ho?"
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                onAddTask();
              }
            }}
          ></input>

          <button
            type="button"
            onClick={onAddTask}
            onKeyDown={onKeyDown}
            className="items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium 
         shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
          >
            Bad me karunga
          </button>
        </div>

        <div className="lg:w-1/3  mx-auto relative lg:top-[20px]  rounded shadow-lg ">
          <ul>
            {allTasks.map((task, idx) => {
              return (
                <li
                  key={idx}
                  className="text-1xl p-1 rounded font-semibold text-black-400  hover:cursor-pointer  hover:border-white"
                >
                  <div className="flex">
                    <span className=" bg-gray-300 rounded p-0.5 hover:text-black  px-2 py-1">
                      #{idx}
                    </span>{" "}
                    <span className="flex-auto hover:bg-indigo-500 bg-amber-100 hover:text-white px-1">
                      {task}
                    </span>
                    <span
                      onClick={() => deleteTask(idx)}
                      className=" rounded  text-red-500 px-2 py-1 "
                    >
                      x
                    </span>{" "}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <div className="text-red-700 text-center absolute bottom-10 left-1/2 -translate-x-1/2">
        {info ? info + "😠" : ""}
      </div>
    </div>
  );
}

export default App;
