import React from 'react'
import { useState } from 'react'

export default function AddTaskDialog({ handleClose, setTasksData }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("")
  function handleAdd() {
    setTasksData(prevTasksData => [...prevTasksData, { title: title, description: description }])
    handleClose()
    setTitle("")
    setDescription("")
  }

  return (
    <div className='w-screen h-screen fixed top-0 left-0 flex justify-center items-center bg-black/50' onClick={handleClose}>
      <form onClick={e => e.stopPropagation()} className='min-w-40 min-h-32 h-1/2 w-1/3 p-6 text-black flex flex-col gap-4 bg-gray-300 rounded-md'>
        <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder='Enter Title' className='bg-white border-2 focus:outline-black border-none rounded-md h-3/20 text-lg p-2' autoFocus />
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Enter Description...' className='bg-white border-2 focus:outline-black border-none rounded-md h-3/4 p-2' />
        <div className='flex gap-2 justify-end'>
          <button type='submit' className='bg-blue-900 px-3 py-1 rounded-md border-none cursor-pointer text-white' onClick={handleAdd}>Add</button>
          <button className='bg-blue-900 px-3 py-1 rounded-md border-none cursor-pointer text-white' onClick={handleClose}>Cancel</button>
        </div>
      </form>
    </div>
  )
}
