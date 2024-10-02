import React from 'react'
import { RxCross1 } from "react-icons/rx";
function MobileMenu({ isOpen, onMobileMenuBtnClick }) {
    const menuTransform = isOpen ? '-translate-x-0' : '-translate-x-full';
    return (
        <div className={`fixed top-0 z-50 text-black h-screen w-full bg-black transform ${menuTransform} transition-transform duration-500 ease-in-out`}>
            <div className='fixed z-10 px-5 md:px-20 py-5 w-full flex justify-end bg-transparent border-b-[1px] border-zinc-500  text-white'>
                <button onClick={onMobileMenuBtnClick} className='w-8 h-8 rounded-full border-[1px] flex justify-center items-center'>
                    <RxCross1 />
                </button>
            </div>
            <div className="links font-['Founders'] mt-[10vh] px-5 md:px-20 flex justify-between text-white ">
                <div className='flex flex-col'>
                    {["Services", "Our Work", "About Us", "Insights", "Contact Us"].map((item, index) => (
                        <a key={index} className='text-[12vw] md:text-[7vw] lg:text-[4.5vw]  mt-5'>{item}</a>
                    ))}
                </div>
                {/* <div className='text-white mt-10 mr-10 lg:mr-20 flex text-left flex-col justify-end  font-[Neue] font-light w-[5%] '>
                    s:
                    {["Instagram", "Behance", "Facebook", "Linkedin"].map((item, index) => <a key={index}>
                        {item}
                    </a>)}
                </div> */}
            </div>
        </div>
    )
}

export default MobileMenu