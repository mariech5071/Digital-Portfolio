'use client';

import React from "react";
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/utils/send-email';

export type FormData = {
  name: string;
  email: string;
  country: string;
  message: string;
};

//This is the Contact component, when Contact is clicked it will bring you to this part where there is a form to contact the business.
const Contact1: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }
  return (
    <div id='contact'>
      <div className='bg-custom-orange-lighter grid grid-cols-1 lg:grid-cols-2 p-3 py-5'>
        <div className=' pt-5  text-black flex flex-col items-center lg:items-left justify-center'>
          <h1 className='text-4xl font-bold pb-3'>Want to work with me?</h1>
          <p className='font-bold'>marianaecheverria5071@gmail.com.com</p>
          <p>Enter your information to contact me!</p>
        </div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)} className=' border rounded-md p-5 m-2 bg-white'>
            <div className='w-full flex flex-col'>
              <label htmlFor='name'>Name</label>
              <input className='border border-gray-400 rounded-md hover:bg-slate-200' required type='text' id='name' {...register('name', { required: true })}></input>
            </div>
            <div className='w-full flex flex-col'>
              <label htmlFor='email'>Email</label>
              <input className=' border border-gray-400 rounded-md hover:bg-slate-200' required type='email' id='email' {...register('email', { required: true })}></input>
            </div>
            <div className='w-full flex flex-col'>
              <label htmlFor='country'>Company</label>
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
    </div>
  )
};

export default Contact1;