'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from "../../Components/Navbar"

const About = () => {

    return (
        <div>
            <Navbar></Navbar>
            <div className="h-40 w-full bg-[url('/BG.svg')] bg-no-repeat bg-cover">
                    <motion.h1 className='mx-auto text-center mb-4 pt-6 text-6xl font-bold' initial={{ opacity: 0 }} animate={{ opacity: 1}} transition={{ duration: 0.5 }}>
                        About
                    </motion.h1>
                </div>
            <div id='about' className='min-h-screen flex flex-col sm:flex-row justify-center items-center py-4'>
                <motion.div id='firstDiv' className='w-full sm:w-1/2 p-4 order-last sm:order-first' initial={{ opacity: 0 }} animate={{ opacity: 1}} transition={{ duration: 0.5 }}>
                    <img src="/images/profile.jpeg" alt="About" className="h-80 rounded-lg mx-auto" />
                </motion.div>
                <motion.div className='w-full sm:w-1/2 p-4' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eros sed lorem rutrum, at posuere lorem tincidunt. Nullam.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eros sed lorem rutrum, at posuere lorem tincidunt. NullamLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eros sed lorem rutrum, at posuere lorem tincidunt. Nullam
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eros sed lorem rutrum, at posuere lorem tincidunt. NullamLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eros sed lorem rutrum, at posuere lorem tincidunt. Nullam
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eros sed lorem rutrum, at posuere lorem tincidunt. NullamLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eros sed lorem rutrum, at posuere lorem tincidunt. Nullam
                    </p>
                </motion.div>
            </div>
        </div>
    )
}

export default About;