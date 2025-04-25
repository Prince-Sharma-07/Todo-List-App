import AddTaskDialog from "./components/AddTaskDialog";
import React from 'react'
import { useState } from 'react'

export default function App() {
  // let isOpen = false; 
  // Normal variable React will not react
  const [isOpen, setIsOpen] = useState(false)
  const [tasksData, setTasksData] = useState([])

  function handleOpen() {
    // isOpen = true
    // console.log("value of isOpen" , isOpen)
    setIsOpen(true)
  }

  function handleClose() {
    setIsOpen(false)
  }

  return (
    <div className='App flex flex-col min-h-screen w-full'>

      <header className='h-15 w-full max-w-full flex items-center relative bg-blue-900'>
        <img className='w-15 h-15' src="/Todo_logo_2.svg" alt="todo-logo" />
        <h1 className='w-full max-w-full text-2xl text-white font-semibold text-center absolute left-0 '>Todo List App</h1>
      </header>

      <main>

        <div className='w-full max-w-full aspect-6/1 h-auto flex items-center justify-center'>
          {/* paste the carousel code here */}
        </div>

        <section className='flex flex-col items-center w-full max-w-full bg-amber-200 gap-2 p-4 h-auto'>
        <button type="submit" onClick={handleOpen} className=' px-4 py-2 bg-blue-900 text-white rounded-md border-none cursor-pointer' >Add Item</button>
          {!tasksData.length ? (<p className="text-xl font-semibold">Add Your First Todo Task...</p>
          ) : (
          <ul className='flex flex-wrap gap-4 w-full  max-w-full justify-center p-4'>
            {
              tasksData.map((task, index) => task.title && <li className='TodoCard text-sm sm:text-base md:text-lg lg:text-xl flex flex-col min-w-[30%] flex-1 gap-4 max-w-1/3 p-4 shadow-xl bg-blue-50 rounded-2xl'>
                <div className='flex justify-between items-center w-full'>
                  <span>Task {index + 1}:</span>
                  <span>{task.title}</span>
                  <input type="checkbox" />
                </div>
                <textarea disabled className='p-4 border-2 rounded-sm'>
                  {task.description}
                </textarea>
              </li>)
            }
          </ul>
        )}
        </section>
        {isOpen ? <AddTaskDialog handleClose={handleClose} tasksData={tasksData} setTasksData={setTasksData} /> : null}
      </main>
    </div>
  )
}

