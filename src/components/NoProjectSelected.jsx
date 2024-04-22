import React from 'react'
import Button from './Button'

function NoProjectSelected() {
  return (
    <div className='flex flex-col items-center w-3/4'>
        <img src="https://t4.ftcdn.net/jpg/01/66/55/01/360_F_166550191_hEVqAvFjIbRMZNDTaBoi0j7fX7ynPS5x.jpg" alt="" />
        <p className='text-stone-800 font-bold text-2xl'>No Projects are selected</p>
        <Button>Create New Project</Button>
    </div>
  )
}

export default NoProjectSelected