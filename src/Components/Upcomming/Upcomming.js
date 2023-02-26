import React from 'react';
import { BsCalendar2Range } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import img1 from "../../Assect/Service1.png"
import img2 from "../../Assect/Service2.png"
import img3 from "../../Assect/Service3.png"
import img4 from "../../Assect/Service4.png"




const Upcomming = () => {
    const navigate = useNavigate()
    return (
        <div className=' max-w-5xl py-10 pb-10 mt-[-15px]  rounded-3xl mx-auto bg-white shadow-lg p-10 px-10'>
            <h1 className=' text-3xl text-center font-bold mb-10 '>Services we provide</h1>

            <div className=' grid lg:grid-cols-4 md:grid-cols-2 grid-col-1 gap-7'>


                <div className=' bg-purple-100 shadow-md pb-3 rounded-xl hover:bg-purple-600 box hover:text-white transition-all duration-300 ease-in-out cursor-pointer' >
                    <div className=' w-full  rounded-lg bg-purple-200 flex items-center justify-center mb-3 mx-auto'>
                        <img className=' h-32 mb-1' src={img1} alt="" />
                    </div>
                    <div className='font-medium text-center'> <span className=' text-blue-600 text-sm'>Young Study</span></div>
                </div>

                <div className=' bg-purple-100 shadow-md pb-3 rounded-xl  hover:bg-purple-600 box hover:text-white transition-all duration-300 ease-in-out cursor-pointer' >
                    <div className=' w-full rounded-lg bg-purple-200 flex items-center justify-center mb-3 mx-auto'>
                        <img className=' h-32 mb-1' src={img2} alt="" />
                    </div>
                    <div className='font-medium text-center'> <span className=' text-blue-600 text-sm'>Master Study</span></div>
                </div>

                <div className=' bg-purple-100 shadow-md pb-3 rounded-xl  hover:bg-purple-600 box hover:text-white transition-all duration-300 ease-in-out cursor-pointer' >
                    <div className=' w-full rounded-lg bg-purple-200 flex items-center justify-center mb-3 mx-auto'>
                        <img className=' h-32 mb-1' src={img3} alt="" />
                    </div>
                    <div className='font-medium text-center'> <span className=' text-blue-600 text-sm'>PhD Study</span></div>
                </div>

                <div className=' bg-purple-100 shadow-md pb-3 rounded-xl hover:bg-purple-600 box hover:text-white transition-all duration-300 ease-in-out cursor-pointer  ' >
                    <div className=' w-full rounded-lg bg-purple-200 flex items-center justify-center mb-3 mx-auto'>
                        <img className=' h-32 mb-1' src={img4} alt="" />
                    </div>
                    <div className=' font-medium text-center'> <span className=' text-blue-600 text-sm '>Undergraduate</span></div>
                </div>

            </div>

            <div >
                <button onClick={() => navigate('/adfrom')} className=' mt-8 w-full py-2 bg-blue-600 text-white rounded-lg border border-blue-600 hover:bg-transparent hover:text-blue-600 transition-all duration-200 ease-in-out' >Select now</button>
            </div>

        </div>
    );
};

export default Upcomming;