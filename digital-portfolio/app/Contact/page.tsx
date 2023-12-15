'use client';

import React from "react";
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/utils/send-email';
import Navbar from "@/Components/Navbar";
import { motion } from 'framer-motion';
import Footer from "@/Components/Footer";

export type FormData = {
  name: string;
  email: string;
  country: string;
  message: string;
};

//This is the Contact component, when Contact is clicked it will bring you to this part where there is a form to contact the business.
const Contact: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }
  return (
    <div>
        <Navbar></Navbar>
        <div className="h-40 w-full bg-[url('/BG.svg')] bg-no-repeat bg-cover">
                    <motion.h1 className='mx-auto text-center mb-4 pt-6 text-6xl font-bold' initial={{ opacity: 0 }} animate={{ opacity: 1}} transition={{ duration: 0.5 }}>
                        Contact
                    </motion.h1>
                </div>
        <motion.div id='contact' initial={{ opacity: 0 }} animate={{ opacity: 1}} transition={{ duration: 0.5 }}>
        <div className='bg-custom-orange-lighter grid grid-cols-1 lg:grid-cols-2 p-3'>
            <div className=' pt-5  text-black flex flex-col items-center lg:items-left justify-center'>
            <h1 className='text-4xl font-bold pb-3'>Want to work with me?</h1>
            <p className='font-bold'>marianaecheverria5071@gmail.com.com</p>
            <p>Enter your information to contact me!</p>
            </div>
            <div>
            <form onSubmit={handleSubmit(onSubmit)} className=' border rounded-md p-5 m-2 bg-white justify-center'>
                <div className='w-full flex flex-col'>
                <label htmlFor='name'>Name</label>
                <input className='border border-gray-400 rounded-md hover:bg-slate-200' required type='text' id='name' {...register('name', { required: true })}></input>
                </div>
                <div className='w-full flex flex-col'>
                <label htmlFor='email'>Email</label>
                <input className=' border border-gray-400 rounded-md hover:bg-slate-200' required type='email' id='email' {...register('email', { required: true })}></input>
                </div>
                <div className='w-full flex flex-col'>
                <label htmlFor='country'>Country</label>
                <input className=' border border-gray-400 rounded-md hover:bg-slate-200' type='text' id='country' {...register('country', { required: true })}></input>
                </div>
                <div className='w-full flex flex-col'>
                <label htmlFor='message'>Message</label>
                <textarea className=' border border-gray-400 rounded-md hover:bg-slate-200' required rows={3}  id='message' {...register('message', { required: true })}></textarea>
                </div>
                <button type='submit' className='hover:shadow-form rounded-md bg-zinc-600 py-3 px-5 mt-5 text-base font-semibold text-white outline-none'>Submit</button>
            </form>
            </div>
        </div>
        </motion.div>
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
  )
};

export default Contact;