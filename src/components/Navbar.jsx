import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-white z-10 p-3 fixed w-full shadow-lg flex justify-between items-center'>
        <h3 className='text-xl font-bold'>Title</h3>
        <ul className='flex  items-center text-sm font-medium  gap-8'>
            <li className='hover:text-red-500'>Home</li>
            <li className='hover:text-red-500'>About</li>
            <li className='hover:text-red-500'>Blog</li>
            <li className='hover:text-red-500'>Contact</li>
            <li className='bg-transparent h-5 flex justify-center items-center  border hover:bg-white  p-3 border-blue-500 text-blue-500'>
                    Button
            </li>
        </ul>
    </nav>
  )
}

export default Navbar