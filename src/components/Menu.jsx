import React from 'react'
import './Menu.css';

function Menu() {
  return (
    <nav className='bg-transparent p-4 font-sans'>
        <div className='flex items-center justify-between'>
            
            <div className='text-white text-2xl font-bold text-black font-sans ml-2'>Ahka Siri</div>
                {/* Togglo */}
                <div className='md:hidden'>
                    <button id='menu-toggle' className='text-white'>
                        <svg fill='none' 
                        stroke='currentColor' 
                        strokeLinecap='round' 
                        strokeLinejoin='round' 
                        strokeWidth={2}
                        viewBox='0 0 24 24'
                        className='w-6 h-6'

                        >
                            <path d='M4 6h16M4 12h16M4 18h16'></path>
                        
                        </svg>
                    </button>

                </div>



            <ul className='hidden md:flex space-x-4 mr-2'>
            <li><a href="https://www.youtube.com/" className='text-orange-200 link link-hover' id='linav'>Home</a></li>
                <li><a href="/about" className='text-orange-200'>About</a></li>
                <li><a href="/reservation" className='text-orange-200'>Reservation</a></li>
                <li><a href="/contact" className='text-orange-200'>Contact</a></li>

            </ul>
        </div>

    </nav>
   
      
  
  )
}

export default Menu