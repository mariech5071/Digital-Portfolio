import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const About1 = () => {
    const [inView, setInView] = useState(false);
    let lastScrollTop = 0;

    useEffect(() => {
        const handleScroll = () => {
            const firstDivElement = document.getElementById('firstDiv');
            if (firstDivElement) {
                const st = window.scrollY || document.documentElement.scrollTop;
                if (st > lastScrollTop){
                    const rect = firstDivElement.getBoundingClientRect();
                    const isInView = rect.top < window.innerHeight;
                    setInView(isInView);
                }
                lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div id='about' className='min-h-screen flex flex-col sm:flex-row justify-center items-center py-4'>
            <motion.div id='firstDiv' className='w-full sm:w-1/2 p-4 order-last sm:order-first' initial={{ x: '-100vw' }} animate={{ x: inView ? 0 : '-100vw' }} transition={{ duration: 0.5 }}>
                <Image src="/images/Profile.png" alt="About" className="h-80 rounded-lg mx-auto" />
            </motion.div>
            <motion.div className='w-full sm:w-1/2 p-4' initial={{ x: '100vw' }} animate={{ x: inView ? 0 : '100vw' }} transition={{ duration: 0.5 }}>
                <h1 className='text-center mb-4'>About</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eros sed lorem rutrum, at posuere lorem tincidunt. Nullam.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eros sed lorem rutrum, at posuere lorem tincidunt. NullamLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eros sed lorem rutrum, at posuere lorem tincidunt. Nullam
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eros sed lorem rutrum, at posuere lorem tincidunt. NullamLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eros sed lorem rutrum, at posuere lorem tincidunt. Nullam
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eros sed lorem rutrum, at posuere lorem tincidunt. NullamLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eros sed lorem rutrum, at posuere lorem tincidunt. Nullam
                </p>
            </motion.div>
        </div>
    )
}

export default About1;