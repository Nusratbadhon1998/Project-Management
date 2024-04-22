import React from 'react'
import Input from './Input'
import Button from './Button'

function CreateProject() {
  return (
    <div className='w-1/2 p-5 mt-5'>
        <div className='flex justify-end items-baseline gap-7'>
            <button>Cancel</button>
            <Button>Save</Button>
        </div>

        <form >
            <Input >Task</Input>
            <Input textArea>Description</Input>
            <Input date>Due Date</Input>

        </form>
    </div>
  )
}

export default CreateProject