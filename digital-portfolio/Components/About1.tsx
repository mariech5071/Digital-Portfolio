import React, { useEffect, useState,useRef } from 'react';
import Image from 'next/image';

const About1 = () => {

    return (
        <div id='about' className='min-h-screen flex flex-col sm:flex-row justify-center items-center py-4'>
            <div id='firstDiv' className='w-full sm:w-1/2 p-4 order-last sm:order-first'>
                <Image src="/images/Profile.png" alt="About" className="h-80 w-80 rounded-lg mx-auto"/>
            </div>
            <div className='w-full sm:w-1/2 p-4'>
                <h1 className='text-center mb-4'>About</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eros sed lorem rutrum, at posuere lorem tincidunt. Nullam.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eros sed lorem rutrum, at posuere lorem tincidunt. NullamLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eros sed lorem rutrum, at posuere lorem tincidunt. Nullam
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eros sed lorem rutrum, at posuere lorem tincidunt. NullamLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eros sed lorem rutrum, at posuere lorem tincidunt. Nullam
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eros sed lorem rutrum, at posuere lorem tincidunt. NullamLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eros sed lorem rutrum, at posuere lorem tincidunt. Nullam
                </p>
            </div>
        </div>
    )
}

export default About1;