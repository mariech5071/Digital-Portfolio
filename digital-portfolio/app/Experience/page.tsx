import React from 'react';
import Navbar from "../../Components/Navbar"

const Experience = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='min-h-screen flex'>
                <div className='w-1/3 flex flex-col items-center justify-center min-h-screen'>
                    <h1 className='text-center mb-4'>Education and Experience</h1>
                    <button className='bg-custom-orange-light rounded-full border-black p-2 px-4'>My Curriculum</button>
                </div>
                <div className="w-2/3 flex flex-col min-h-screen">
                    <div className="flex items-center">
                        <p className="font-bold mt-4">Jan 2023 - Set 2023</p>
                        <div className="pl-5">
                            <span className="text-custom-orange-light inline-block mr-3 font-extrabold text-5xl">•</span>
                        </div>    
                        <span className='mt-2'>Intensa Language Institute</span>
                    </div>
                    <p className='ml-48 px-3 border-l border-black'> I possess a background in teaching English to a diverse range of students across various age groups, both online and in physical classrooms. This experience has honed my ability to effectively communicate complex ideas—an invaluable skill in simplifying intricate technical concepts for diverse audiences. Managing a large cohort of students, each with unique personalities and learning styles, has equipped me with the adaptability and proficiency in navigating diverse personalities and preferences that would seamlessly translate into collaborating within multidisciplinary programming teams, fostering effective communication and optimizing workflow efficiency.</p>
                    <div className="flex items-center">
                        <p className="font-bold mt-4">Jan 2022    -  Present</p>
                        <div className="pl-5">
                            <span className="text-custom-orange-light inline-block mr-3 font-extrabold text-5xl">•</span>
                        </div>
                        <span className='mt-2'>Online Programming Learning</span>
                    </div>
                    <p className='ml-48 px-3 border-l border-black'>wifjcn weifvjcw efvjnwfepjcwne</p>
                    <div className="flex items-center">
                        <p className="font-bold mt-4">Jun 2022 - Dec 2022</p>
                        <div className="pl-5">
                            <span className="text-custom-orange-light inline-block mr-3 font-extrabold text-5xl">•</span>
                        </div>
                        <span className='mt-2'>Agrícola Picsis SA</span>
                    </div>
                    <p className='ml-48 px-3 border-l border-black'>wifjcn weifvjcw efvjnwfepjcwne</p>
                    <div className="flex items-center">
                        <p className="font-bold mt-4">Jan 2018 - Dec 2022</p>
                        <div className="pl-5">
                            <span className="text-custom-orange-light inline-block mr-3 font-extrabold text-5xl">•</span>
                        </div>
                        <span className='mt-2'>Biotechnology Engineering (Tecnológico de Costa Rica)</span>
                    </div>
                    <p className='ml-48 px-3 border-l border-black'>wifjcn weifvjcw efvjnwfepjcwne</p>
                </div>
            </div>
        </div>
    );
};

export default Experience;