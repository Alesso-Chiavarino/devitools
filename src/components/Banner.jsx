import React from 'react'

const Banner = () => {
    return (
        <>
            <div className='container mx-auto h-[87vh] flex justify-center items-center'>
                <div className='flex flex-col gap-5'>
                    <h1 className='text-transparent font-extrabold text-7xl bg-clip-text bg-gradient-to-r from-white to-slate-300'>Welcome to DeviTools,</h1>
                    <h1 className='font-extrabold text-7xl bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-blue-400 to-blue-600'>Full Stack Toolkit for Developers!</h1>
                    <p className='text-3xl text-white'>Web created to save developers time.</p>
                </div>
            </div>
            <div className="bg-gradient-to-r from-violet-400 via-blue-400 to-blue-600 pt-20 clip-path ">
            </div>
        </>
    )
}

export default Banner