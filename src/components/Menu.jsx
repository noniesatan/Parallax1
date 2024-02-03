import React,{useState} from 'react'
import './Menu.css';

function Menu() {

        const [isMenuOpen, setIsMenuOpen] = useState(false);
        const toggleMenu = () => {
                setIsMenuOpen(!isMenuOpen)
        }


  return (
    <nav className='bg-transparent p-4 font-sans'>
        <div className='flex items-center justify-between'>
            
            <div className='text-2xl font-bold text-black font-sans ml-2'>Ahka Siri</div>
                {/* Togglo */}
                <div className='md:hidden'>
                    <button id='menu-toggle' onClick={toggleMenu} className='text-white'>
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
        {/* Mobile menu */}
        {isMenuOpen ? (
                 <ul className='flex-col md:hidden mr-2'>
                 <li><a href="https://www.youtube.com/" className='text-orange-200 link link-hover py-3' id='linav'>Home</a></li>
                     <li><a href="/about" className='text-orange-200'>About</a></li>
                     <li><a href="/reservation" className='text-orange-200'>Reservation</a></li>
                     <li><a href="/contact" className='text-orange-200'>Contact</a></li>
     
                 </ul>

        ) : null }
       

    </nav>
   
      
  
  )
}

export default Menu