
import { motion } from 'framer-motion';


const Projects1 = () => {
    
    return (
        <div id='projects' className='bg-custom-orange-lighter min-h-screen flex justify-center items-center flex-col'>
            <h1 className='mx-auto text-center mb-4 pt-6'>
                Projects
            </h1>
            <div className="flex flex-col sm:flex-row sm:space-x-20 justify-center items-center space-y-8 sm:space-y-0 pb-6 mx-3">
                <div className="w-full sm:w-1/2 xl:w-1/4" id='img1'>
                <motion.img whileHover={{ scale: 1.1 }} src="/images/Arcane-studio.png" alt="Project 1" className="w-full h-48 sm:h-48 object-contain mx-auto rounded-lg"/>
                    <div className="flex items-center justify-between">
                    <p className="font-medium mt-3">
                    Here is project 1
                    </p>
                        <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="w-full sm:w-1/2 xl:w-1/4" id='img2'>
                <motion.img whileHover={{ scale: 1.1 }} src="/images/Arcane-studio.png" alt="Project 1" className="w-full h-48 sm:h-48 object-contain mx-auto rounded-lg"/>
                    <div className="flex items-center justify-between">
                    <p className="font-medium mt-3">
                    Landing page for Arcane Studios
                    </p>
                        <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="w-full sm:w-1/2 xl:w-1/4" id='img3'>
                <motion.img whileHover={{ scale: 1.1 }} src="/images/Arcane-studio.png" alt="Project 1" className="w-full h-48 sm:h-48 object-contain mx-auto rounded-lg"/>
                    <div className="flex items-center justify-between">
                    <p className="font-medium mt-3">
                    Here is project 1
                    </p>
                        <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects1;