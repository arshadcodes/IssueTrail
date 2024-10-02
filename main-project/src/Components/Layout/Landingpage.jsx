import React from 'react'
import Landingpagebg from "../../assets/Landing_page_background.jpg"
import { Link } from 'react-router-dom'
import gif from "../../assets/Icons/issue Tracker.gif";

function Landingpage() {
    return (

        <div className='w-full h-screen relative font-[Nasa] flex items-center justify-center'>
            <img src={Landingpagebg} className='w-full h-full object-cover ' />
            <div className='Overlay absolute w-full h-full flex flex-col px-5 md:px-16 lg:px-20 justify-center items-center top-0 left-0 bg-black bg-opacity-60'>
                <h2 className='text-[7vw] lg:text-[3vw] leading-none'>Google summer of Code</h2>
                {/* <img src={gif} /> */}
                <h1 className='uppercase text-[12vw] whitespace-nowrap lg:text-[7vw] lg:w-3/5 leading-none text-center'>Issue Tracker</h1>
                <p className='text-center text-[5vw] md:text-[3.5vw] lg:text-[2vw] mt-2 md:mt-5 lg:mt-5 w-1/2 lg:w-1/2 font-[Founders] leading-none' >Revolutionize your open-source journey with  GSOC Issue Tracker</p>
                <Link to="/Organisation">
                    <button className='px-3 py-1 md:py-3 lg:py-7 w-2/5 md:w-[20vw] lg:w-[15vw] mt-3 md:mt-5 whitespace-nowrap flex justify-center items-center gap-3 rounded-xl text-xs md:text-[2vw] lg:text-[1.1vw] bg-transparent border-[1.5px] bg-organization-button border-white hover:bg-black font-[Neue] transition-all ease-in-out duration-500'>
                        Browse Organizations
                        {/* <FaArrowRightLong size={15} /> */}
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Landingpage
