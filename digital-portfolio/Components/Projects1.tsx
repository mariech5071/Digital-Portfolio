import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';




const Projects1 = () => {
    const [inView, setInView] = useState(false);
    const [inView1, setInView1] = useState(false);
    const [inView2, setInView2] = useState(false);
    const [inView3, setInView3] = useState(false);

    const handleScroll = () => {
        const divElement = document.getElementById('projects');
        const imgElement1 = document.getElementById('img1');
        const imgElement2 = document.getElementById('img2');
        const imgElement3 = document.getElementById('img3');
        if (divElement && imgElement1 && imgElement2 && imgElement3) {
            const rect = divElement.getBoundingClientRect();
            const rect1 = imgElement1.getBoundingClientRect();
            const rect2 = imgElement2.getBoundingClientRect();
            const rect3 = imgElement3.getBoundingClientRect();
            const isInView = rect.top < window.innerHeight;
            const isInView1 = rect1.top < window.innerHeight;
            const isInView2 = rect2.top < window.innerHeight;
            const isInView3 = rect3.top < window.innerHeight;
            setInView(isInView);
            setInView1(isInView1);
            setInView2(isInView2);
            setInView3(isInView3);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div id='projects' className='bg-custom-orange-lighter min-h-screen flex justify-center items-center flex-col'>
            <motion.h1 className='mx-auto text-center mb-4 pt-6' initial={{ y: '100vh' }} animate={{ y: inView ? 0 : '100vh' }} transition={{ duration: 0.5 }}>
                Projects
            </motion.h1>
            <div className="flex flex-col sm:flex-row sm:space-x-20 justify-center items-center space-y-8 sm:space-y-0 pb-6">
                <div className="w-full sm:w-1/2 xl:w-1/4" id='img1'>
                <motion.img  whileHover={{ scale: 1.1 }} src="/images/project1.jpg" alt="Project 1" className="w-full h-48 sm:h-48 object-contain mx-auto rounded-1g" initial={{ y: '100vh' }} animate={{ y: inView1 ? 0 : '100vh' }} transition={{ duration: 0.5 }} />
                    <div className="flex items-center justify-between">
                    <motion.p className="font-medium mt-3" initial={{ y: '100vh' }} animate={{ y: inView1 ? 0 : '100vh' }} transition={{ duration: 0.5 }}>
                    Here is project 1
                    </motion.p>
                        <motion.button className="w-8 h-8 bg-white rounded-full flex items-center justify-center" initial={{ y: '100vh' }} animate={{ y: inView1 ? 0 : '100vh' }} transition={{ duration: 0.5 }}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </motion.button>
                    </div>
                </div>
                <div className="w-full sm:w-1/2 xl:w-1/4" id='img2'>
                <motion.img whileHover={{ scale: 1.1 }} src="/images/project1.jpg" alt="Project 1" className="w-full h-48 sm:h-48 object-contain mx-auto rounded-1g" initial={{ y: '100vh' }} animate={{ y: inView2 ? 0 : '100vh' }} transition={{ duration: 0.5 }} />
                    <div className="flex items-center justify-between">
                    <motion.p className="font-medium mt-3" initial={{ y: '100vh' }} animate={{ y: inView2 ? 0 : '100vh' }} transition={{ duration: 0.5 }}>
                    Here is project 1
                    </motion.p>
                        <motion.button className="w-8 h-8 bg-white rounded-full flex items-center justify-center" initial={{ y: '100vh' }} animate={{ y: inView2 ? 0 : '100vh' }} transition={{ duration: 0.5 }}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </motion.button>
                    </div>
                </div>
                <div className="w-full sm:w-1/2 xl:w-1/4" id='img3'>
                <motion.img whileHover={{ scale: 1.1 }} src="/images/project1.jpg" alt="Project 1" className="w-full h-48 sm:h-48 object-contain mx-auto rounded-1g" initial={{ y: '100vh' }} animate={{ y: inView3 ? 0 : '100vh' }} transition={{ duration: 0.5 }} />
                    <div className="flex items-center justify-between">
                    <motion.p className="font-medium mt-3" initial={{ y: '100vh' }} animate={{ y: inView3 ? 0 : '100vh' }} transition={{ duration: 0.5 }}>
                    Here is project 1
                    </motion.p>
                        <motion.button className="w-8 h-8 bg-white rounded-full flex items-center justify-center" initial={{ y: '100vh' }} animate={{ y: inView3 ? 0 : '100vh' }} transition={{ duration: 0.5 }}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </motion.button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects1;