'use client'
import React from 'react';
import { useState } from 'react';

const Navbar = ()=> {

    const [isClicked, setIsClicked] = useState(false);

    const toggleNavbar = () => {
        setIsClicked(!isClicked)
    }

    return (
        <>
            <nav className='bg-custom-orange'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='flex items-center justify-between h-16'>
                        <div className='hidden md:block'>
                            <div className='ml-4 flex items-center space-x-4'>
                                <a href='#initial' className='text-black hover:bg-white hover:text-black rounded-lg p-2'>Home</a>
                                <a href='#about' className='text-black hover:bg-white hover:text-black rounded-lg p-2'>About</a>
                                <a href='#projcts' className='text-black hover:bg-white hover:text-black rounded-lg p-2'>Projects</a>
                                <a href='#contact' className='text-black hover:bg-white hover:text-black rounded-lg p-2'>Contact</a>
                            </div>
                        </div>
                        <div>
                            <button className='bg-white rounded-full border-black p-2 px-4'>My Curriculum</button>
                        </div>
                        <div className='md:hidden flex items-center'>
                            <button className='inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white' onClick={toggleNavbar}>
                                {isClicked ? (
                                    <svg 
                                    className='h-6 w-6'
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth={2}
                                            d='M6 18L18 6M6 6l12 12'
                                        ></path>
                                    </svg>
                                ) : (
                                    <svg 
                                    className='h-6 w-6'
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth={2}
                                            d='M4 6h16M4 12h16m-7 6h7'
                                        ></path>
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                {isClicked && (
                    <div className='md:hidden'>
                        <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                            <a href='#initial' className='text-black block hover:bg-white hover:text-black rounded-lg p-2'>Home</a>
                            <a href='#about' className='text-black block hover:bg-white hover:text-black rounded-lg p-2'>About</a>
                            <a href='#projcts' className='text-black block hover:bg-white hover:text-black rounded-lg p-2'>Projects</a>
                            <a href='#contact' className='text-black block hover:bg-white hover:text-black rounded-lg p-2'>Contact</a>
                        </div>
                    </div>
                )}
            </nav>
        </>
    )
}

export default Navbar;