import React from 'react'
import { TbMenu } from "react-icons/tb";
function Navbar({ onNavbarBtnClick }) {
    return (
        // Abhi menu wala feature nhi daala h  sirf btn banaya h 
        <div className='fixed z-10 px-5 md:px-20 py-5 w-full flex justify-end bg-transparent text-white'>
            <button onClick={onNavbarBtnClick} className='w-8 h-8 rounded-full border-[1px] flex justify-center items-center'>
                <TbMenu />
            </button>
        </div>
    )
}

export default Navbar