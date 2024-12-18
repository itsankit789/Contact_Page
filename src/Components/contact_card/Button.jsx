import React from 'react'

const Button = (props) => {
    const { icons, text, className = '' } = props;

  return (
    <button className={`flex justify-center items-center bg-black text-white gap-2 font-semibold rounded-lg min-w-56 px-5 py-2 ${className}`}>
        {icons}
        {text}
        
 </button>
  )
}

export default Button