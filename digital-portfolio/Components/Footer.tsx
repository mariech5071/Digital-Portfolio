import React from "react";

const Footer = () => {
    return (
        <div className="w-5/6 mx-auto">
                <div className=' block m-auto lg:flex lg:items-center lg:justify-between text-center'>
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
                <div className='block m-auto lg:flex items-center lg:justify-between'>
                    <p className='text-center'>Mariana Echeverria</p>
                    <p className='text-center'>Copyright © 2023 Mariana Echeverria. All rights reserved</p>
                    <div className='flex items-center justify-center space-x-4 '>
                        <a href='https://www.linkedin.com/in/mariana-echeverria-9a543a1b4/' target='_blank'><img className='h-6 mb-3' src="images/linkedin.png" alt="LinkedIn Logo" /></a>
                        <a href='https://github.com/mariech5071' target='_blank'><img className='h-6 mb-3' src="images/github.png" alt="GitHub Logo" /></a>
                    </div>
                </div>
        </div>
    )
}

export default Footer;