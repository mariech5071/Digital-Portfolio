const Initial = () => {
    return (
        <div id='inicial' className="h-[90vh] w-full bg-[url('/BG.svg')] flex items-center justify-center">
            <div className='grid grid-cols-2 gap-4 content-center justify-center items-center'>
                <div>
                    <h1 className='font-bold text-7xl p-6 ml-9 '>Hi, I'm Mari</h1>
                    <p className='p-6 ml-9'>Front end programmer seeking to create the best web pages for companies. iwevbpwiehbpwihdcwih wpifvhbvwpifvbpwiufvbpifvbpwidfuvb.</p>
                </div>
                <div>
                    <img src='/images/Profile.jpeg' className='rounded-full w-2/3 z-10 mt-4'></img>
                </div>
            </div> 
        </div>
    )
}

export default Initial;