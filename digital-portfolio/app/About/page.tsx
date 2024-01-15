'use client'
import { motion } from 'framer-motion';
import Navbar from "../../Components/Navbar"
import Image from 'next/image'

const About = () => {

    return (
        <div>
            <Navbar></Navbar>
            <div className="h-40 w-full bg-[url('/BG.svg')] bg-no-repeat bg-cover">
                    <motion.h1 className='mx-auto text-center mb-4 pt-6 text-6xl font-bold' initial={{ opacity: 0 }} animate={{ opacity: 1}} transition={{ duration: 0.5 }}>
                        About
                    </motion.h1>
                </div>
            <div id='about' className=' flex flex-col sm:flex-row justify-center items-center py-4'>
                <motion.div id='firstDiv' className='w-full sm:w-1/2 p-4 order-last sm:order-first' initial={{ opacity: 0 }} animate={{ opacity: 1}} transition={{ duration: 0.5 }}>
                    <Image src="/images/Profile.png" alt="About" className="h-80 rounded-lg mx-auto" width='200' height='200'/>
                </motion.div>
                <motion.div className='w-full sm:w-1/2 p-4' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eros sed lorem rutrum, at posuere lorem tincidunt. Nullam.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eros sed lorem rutrum, at posuere lorem tincidunt. NullamLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eros sed lorem rutrum, at posuere lorem tincidunt. Nullam
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eros sed lorem rutrum, at posuere lorem tincidunt. NullamLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eros sed lorem rutrum, at posuere lorem tincidunt. Nullam
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eros sed lorem rutrum, at posuere lorem tincidunt. NullamLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eros sed lorem rutrum, at posuere lorem tincidunt. Nullam
                    </p>
                </motion.div>
            </div>
            <div className=' bg-custom-orange-lighter'>
            <div className="w-5/6 mx-auto">
                <div className=' block m-auto lg:flex lg:items-center lg:justify-between text-center py-4'>
                    <div className="flex items-center space-x-4 justify-center">
                        <a href="/" className="text-black hover:bg-white hover:text-black rounded-lg no-underline">Home</a>
                        <a href="/About" className="text-black hover:bg-white hover:text-black rounded-lg no-underline">About</a>
                        <a href="/Projects" className="text-black hover:bg-white hover:text-black rounded-lg no-underline">Projects</a>
                        <a href="/Contact" className="text-black hover:bg-white hover:text-black rounded-lg no-underline">Contact</a>
                        <a href="/Experience" className="text-black hover:bg-white hover:text-black rounded-lg no-underline">Experience</a>
                    </div>
                    <p className='pt-3 text-center'>Phone: +506 83205021 | Email: marianaecheverria5071@gmail.com</p>
                </div>
                <hr className="border-black" />
                <div className='block m-auto lg:flex items-center lg:justify-between py-4'>
                    <p className='text-center'>Mariana Echeverria</p>
                    <p className='text-center'>Copyright © 2023 Mariana Echeverria. All rights reserved</p>
                    <div className='flex items-center justify-center space-x-4 '>
                        <Image className='h-6 mb-2' src="images/linkedin.png" alt="GitHub Logo"  width='200' height='200'/>
                        <Image className='h-6 mb-2' src="images/github.png" alt="LinkedIn Logo"  width='200' height='200'/>
                    </div>
                </div>
        </div>
        </div>
        </div>
    )
}

export default About;