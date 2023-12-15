'use client'
import React from 'react';
import Navbar from "../../Components/Navbar"
import { motion } from 'framer-motion';
import Footer from '@/Components/Footer';

const Experience = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="h-40 w-full bg-[url('/BG.svg')] bg-no-repeat bg-cover">
                    <motion.h1 className='mx-auto text-center mb-4 pt-6 text-6xl font-bold' initial={{ opacity: 0 }} animate={{ opacity: 1}} transition={{ duration: 0.5 }}>
                        Experience
                    </motion.h1>
                </div>
            <motion.div className='min-h-screen flex' initial={{ opacity: 0 }} animate={{ opacity: 1}} transition={{ duration: 0.5 }}>
                <div className='w-1/3 min-h-screen sm:block hidden m-auto'>
                        <h1 className='text-center mb-4 text-4xl'>Education and Experience</h1>
                        <button className='bg-custom-orange-light rounded-full border-black p-2 px-4 w-full mx-5'>My Curriculum</button>
                </div>
                <div className="w-full sm:w-2/3 flex flex-col min-h-screen">
                    <div className="flex items-center">
                        <p className="font-bold mt-4">Jan 2023 - Set 2023</p>
                        <div className="pl-5">
                            <span className="text-custom-orange-light inline-block mr-3 font-extrabold text-5xl">•</span>
                        </div>    
                        <span className='mt-2'>Intensa Language Institute</span>
                    </div>
                    <p className='ml-48 px-3 border-l border-black'> With a background in teaching English to diverse students in both physical and online classrooms, I've refined my capacity to articulate intricate concepts for varied audiences. Managing diverse student cohorts has equipped me with adaptability and interpersonal skills, vital for collaborating in multidisciplinary programming teams, fostering effective communication, and streamlining workflow efficiency.</p>
                    <div className="flex items-center">
                        <p className="font-bold mt-4">Jan 2022    -  Present</p>
                        <div className="pl-5">
                            <span className="text-custom-orange-light inline-block mr-3 font-extrabold text-5xl">•</span>
                        </div>
                        <span className='mt-2'>Online Programming Learning</span>
                    </div>
                    <p className='ml-48 px-3 border-l border-black'>I've acquired fundamental knowledge crucial for crafting exceptional web pages and working as a web developer through accessible online courses on FreeCodeAcademy and Udemy. This has led to the creation of several business landing pages using React and Next.js, along with personal projects integrating APIs. Proficiently managed tools include:</p>
                    <div className="flex items-center">
                        <p className="font-bold mt-4">Jun 2022 - Dec 2022</p>
                        <div className="pl-5">
                            <span className="text-custom-orange-light inline-block mr-3 font-extrabold text-5xl">•</span>
                        </div>
                        <span className='mt-2'>Agrícola Picsis SA</span>
                    </div>
                    <p className='ml-48 px-3 border-l border-black'>At Agrícola Picsis, a biocontrol production company, I contributed to developing a new product. Leveraging my biotechnology engineering background, I employed organizational, data analysis, and bioinformatic skills applicable to the software engineering domain. This experience notably enriched my team collaboration abilities.</p>
                    <div className="flex items-center">
                        <p className="font-bold mt-4">Jan 2020 - Dec 2022</p>
                        <div className="pl-5">
                            <span className="text-custom-orange-light inline-block mr-3 font-extrabold text-5xl">•</span>
                        </div>
                        <span className='mt-2'>Biocient</span>
                    </div>
                    <p className='ml-48 px-3 border-l border-black'>As a co-founder of Biocient, a biotechnology entrepreneurship focused on biocontrol, I gained invaluable skills applicable across engineering professions—communication, leadership, people management, and analytical prowess. Managing a three-person team as a laboratory manager enhanced my leadership and managerial capabilities. Utilizing acquired bioinformatics knowledge was instrumental in this role.</p>
                    <div className="flex items-center">
                        <p className="font-bold mt-4">Jan 2018 - Dec 2022</p>
                        <div className="pl-5">
                            <span className="text-custom-orange-light inline-block mr-3 font-extrabold text-5xl">•</span>
                        </div>
                        <span className='mt-2'>Biotechnology Engineering (Tecnológico de Costa Rica)</span>
                    </div>
                    <p className='ml-48 px-3 border-l border-black mb-8'>Graduating with a degree in Biotechnology Engineering, I acquired a robust foundation in biology, technology, and engineering. Proficiency in data analysis, experimentation, and adaptive problem-solving was honed through rigorous scientific methodologies. Possessing a strong grasp of programming languages and automation techniques vital for biotechnology and software engineering, I combine analytical thinking from biotech with creative problem-solving skills, facilitating versatile approaches to complex challenges in ever-evolving tech landscapes.</p>
                </div>
            </motion.div>
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
                        <img className='h-6 mb-2' src="images/linkedin.png" alt="GitHub Logo" />
                        <img className='h-6 mb-2' src="images/github.png" alt="LinkedIn Logo" />
                    </div>
                </div>
        </div>
        </div>
        </div>
    );
};

export default Experience;