import Image from 'next/image';

const Initial = () => {
    return (
        <div id='inicial' className="h-[90vh] w-full bg-[url('/BG.svg')] flex items-center justify-center">
            <div className='grid grid-cols-2 gap-4 content-center justify-center items-center'>
                <div>
                    <h1 className='font-bold text-7xl p-6 ml-9 '>Hi, I am Mari</h1>
                    <p className='text-2xl p-6 ml-9'>Front end programmer seeking to create the best web pages for companies. I&apos;m 25 and living in Costa Rica.</p>
                </div>
                <div>
                    <Image src='/images/Profile.png' className='rounded-full object-cover z-10 mt-4 h-96 w-96' alt='profile'></Image>
                </div>
            </div> 
        </div>
    )
}

export default Initial;