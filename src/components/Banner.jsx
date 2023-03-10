import 'animate.css';

const Banner = () => {
    return (
        <>
            <div className='container mx-auto h-[87vh] flex justify-center items-center'>
                <div className='flex flex-col gap-5 w-[80%]'>
                    <h1 className='text-transparent font-extrabold text-5xl md:text-6xl lg:text-7xl bg-clip-text bg-gradient-to-tr from-white to-slate-400 animate__animated animate__fadeInDown'>Welcome to DeviTools,</h1>
                    <h1 className='font-extrabold bg-clip-text text-5xl md:text-6xl lg:text-7xl text-transparent bg-gradient-to-r from-violet-400 via-blue-400 to-blue-600 animate__animated animate__fadeInUp' style={{ animationDelay: '.7s' }}>Full Stack Toolkit for Developers!</h1>
                    <p className='text-xl md:text-2xl lg:text-3xl font-bold text-white'>Web created to save developers time.</p>
                </div>
            </div>
            <div className="bg-gradient-to-r from-violet-400 via-blue-400 to-blue-600 pt-20 clip-path ">
            </div>
        </>
    )
}

export default Banner