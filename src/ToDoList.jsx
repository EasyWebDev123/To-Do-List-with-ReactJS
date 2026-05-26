import React, {useState} from "react"

function ToDoList(){

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function inputChange(event){
    setNewTask(event.target.value);
  }

  function addTask(){
  }

  function deleteTask(index){
  }

  function moveTaskUp(index){
  }

  function moveTaskDown(index){
  }

  return(
    <div className="to-do-list">
      <h1>To-Do-List</h1>

      <div>
        <input type="text" placeholder="Enter a task..." value={newTask} onChange={inputChange} aria-label="t" />
        <button className="add-button" onClick={addTask}>ADD</button>
        </div>

    </div>
  );

}

export default ToDoList