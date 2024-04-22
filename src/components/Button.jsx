import React from 'react'

function Button({children, ...props}) {
  return (
    <button {...props} className='px-4 py-2 bg-stone-700 text-stone-50 hover:bg-stone-600 hover:text-stone-100 mt-5 rounded-md'>{children}</button>
  )
}

export default Button