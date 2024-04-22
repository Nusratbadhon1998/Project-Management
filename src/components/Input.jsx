import React from 'react'

function Input({children,textArea,date,...props}) {
    const cssClass=" w-full p-3 bg-stone-100 border-b border-b-stone-400 focus:border-b-stone-600 outline-none"
  return (
    <div>
        <label>{children}</label>
        {
            textArea? (<textarea className={cssClass} {...props} cols="30" rows="10"></textarea>):
            
            <input type={date?'date':'text'} className={cssClass } {...props} />
        }
        
    </div>
  )
}

export default Input