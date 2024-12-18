import React from 'react'

const Navigation = () => {
  return (
    <nav className='flex justify-around items-center p-4 '> 

        <div ><img src="/images/logo.png" alt="do Some Coding " /></div>
        <ul className='flex font-bold gap-4 cursor-pointer '>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>CONTACTS</li>
        </ul>
    </nav>
  )
}

export default Navigation