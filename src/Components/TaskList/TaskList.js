import React, { useState } from 'react'
import './TaskList.css'

const TaskList = () => {
  const [text, setText] = useState("")
  const [tasks, setTasks] = useState([
    {
      todo: 'making a video',
      complete: false
    },
    {
      todo: 'complete your project',
      complete: false
    },
    {
      todo: 'do coding , do practice',
      complete: false
    },
    {
      todo: 'learn all your concept',
      complete: false
    },
    {
      todo: 'make your  document',
      complete: false
    }
  ])

  const handleTask = () => {
    if (text.length > 0) {
      setTasks([...tasks, { todo: text, complete: false }])
      setText("")
    }
  }

  const handleTaskCompletion = (index) => {
    const updatedTasks = [...tasks]
    updatedTasks[index].complete = !updatedTasks[index].complete
    setTasks(updatedTasks)
  }

  return (
    <div className='todo-container'>
      <input
        className='input-todo-text'
        type='text'
        placeholder='enter a task'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleTask} className='add-todo-btn'>
        Add task
      </button>
      <div className='display-todo-container'>
        {tasks.map((todo, index) => (
          <div className={`todo-item-text ${todo.complete ? "completed" : ""}`} key={index} onClick={() => handleTaskCompletion(index)}>
            {todo.todo}
          </div>
        ))}
      </div>
    </div>
  )
}

export default TaskList





