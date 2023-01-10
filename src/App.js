import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import TaskRow from "./components/TaskRow";
import { TaskBaner } from "./components/TaskBaner";
import { TaskCreator } from "./components/TaskCreator";
import { VisibilitiControl } from "./components/VisibilitiControl";


function App() {
  const [userName, setUserName] = useState("isai");
  const [taskItems, setTaskItems] = useState([
    { name: "Task One", done:  false },
    { name: "Task two", done:  true},
    { name: "Task Tree", done: false },
    { name: "Task Four", done: false },
  ]);

  const [showCompleted, setshowCompleted] = useState(false)



useEffect(() => {
  let data = localStorage.getItem('task');
  if(data != null) {
  setTaskItems(JSON.parse(data))
  }else{
    setUserName('DJOKER')
    setTaskItems([
    { name: "Task One defalu", done:  false },
    { name: "Task two", done:  true},
    { name: "Task Tree", done: false },
    { name: "Task Four", done: false },
    ])
    setshowCompleted(false)
  }
}, [])
useEffect(() => {
 localStorage.setItem('task', JSON.stringify(taskItems))
  
}, [taskItems])



 const createNewTask = taskName => {
     if(!taskItems.find(t => taskName === t.name)){
       setTaskItems([...taskItems, {name : taskName, done: false}])
     }
  }

  const toggleTask = task =>{

    setTaskItems(taskItems.map(t => ( t.name === task.name ? {...t, done: !t.done} : t )))

  }

  const TaskTableRow = (doneValue) => 
  taskItems
  .filter(task => task.done === doneValue)
  .map(task => <TaskRow task={task} key={task.name} toggleTask={toggleTask}/>);

  return (
    <div className="App">
      <TaskBaner userName={userName} taskItems={taskItems} />

      <TaskCreator callback={createNewTask}/>
      <table className="table table-striped table-bordered text-white">
        <thead>
          <tr>
            <th>Name</th>
            <th>Done</th>
          </tr>
        </thead>
        <tbody>{TaskTableRow(false)}</tbody>
      </table>
      <div className="bg-secondary-text-white text-center p-2">
      <VisibilitiControl 
      description="Complete Task"
      isChecked={showCompleted}
      callback={ checked => setshowCompleted(checked)}  />
      </div>

      {  
        showCompleted && (
          <table className="table table-striped table-bordered text-white">
          <thead>
          
          <th>Task</th>
          <th>Done</th>
          
          </thead>
          <tbody>
          {TaskTableRow(true)}
          </tbody>
          </table>
        )
       }

      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
