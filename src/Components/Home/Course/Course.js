import React from 'react';
import CourseBanarImg from '../../../Assect/Blog1.png'
import CourseBanarImg2 from '../../../Assect/Blog2.png'
import CourseBanarImg3 from '../../../Assect/Blog3.png'
import CourseBanarImg4 from '../../../Assect/Blog4.png'
import { SiSitepoint } from "react-icons/si";
import { TbCurrencyTaka } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';


const Course = () => {
    const navigate = useNavigate()
    return (
        <div className=' max-w-7xl mx-auto px-5'>
            <div>
                <p className=' font-bold text-blue-600'>#Blog</p>
                <h1 className=' text-3xl font-bold text-gray-800'>Our recent blogs</h1>
            </div>
            <div className=' grid xl:grid-cols-4 md:grid-cols-2 grid-col-1 gap-10 mt-10'>
                <div className=' bg-white border border-purple-400 cursor-pointer hover:border-blue-600 transition-all duration-200 ease-in-out  pb-3 rounded-lg hover:shadow-lg'>
                    <img className=' rounded-t-lg w-full' src={CourseBanarImg} alt="CourseBanarImg" />
                    <div className=' mt-3 px-2 flex items-center gap-2 text-blue-600'>
                        <SiSitepoint className=' -mt-1' />
                        <h1 className=' font-bold text-gray-700'>Lets talk about Undergraduate</h1>
                    </div>
                    <p className=' text-justify mt-3 mb-2 px-2'>Lorem ip sum dolor sit amet conse ctetur adipisicing elit. Praesentium, atque is a man those is a great...</p>
                    <div className=' flex items-center justify-center w-full pt-2 pb-1'>
                        <button onClick={() => navigate('/bsccourse')} className=' py-1  px-4 border border-blue-600 text-sm hover:text-white hover:bg-blue-600 rounded font-bold transition-all duration-200 ease-in-out'>Read more</button>
                    </div>
                </div>

                <div className=' bg-white border cursor-pointer hover:shadow-lg hover:border-blue-600 transition-all duration-200 ease-in-out border-purple-400 pb-3 rounded-lg'>
                    <img className=' rounded-t-lg w-full' src={CourseBanarImg2} alt="CourseBanarImg" />
                    <div className=' mt-3 px-2 flex items-center gap-2 text-blue-600'>
                        <SiSitepoint className=' -mt-1' />
                        <h1 className=' font-bold text-gray-700'>Lets talk about Young Study</h1>
                    </div>
                    <p className=' text-justify mt-3 mb-2 px-2'>Lorem ip sum dolor sit amet conse ctetur adipisicing elit. Praesentium, atque is a man those is a great...</p>

                    <div className=' flex items-center justify-center w-full pt-2 pb-1'>
                        <button onClick={() => navigate('/bsccourse')} className=' py-1  px-4 border border-blue-600 text-sm hover:text-white hover:bg-blue-600 rounded font-bold transition-all duration-200 ease-in-out'>Read more</button>
                    </div>
                </div>


                <div className=' bg-white cursor-pointer hover:shadow-lg border hover:border-blue-600 transition-all duration-200 ease-in-out border-purple-400 pb-3 rounded-lg'>
                    <img className=' rounded-t-lg w-full' src={CourseBanarImg3} alt="CourseBanarImg" />
                    <div className=' mt-3 px-2 flex items-center gap-2 text-blue-600'>
                        <SiSitepoint className=' -mt-1' />
                        <h1 className=' font-bold text-gray-700'>Lets talk about Master Study</h1>
                    </div>
                    <p className=' text-justify mt-3 mb-2 px-2'>Lorem ip sum dolor sit amet conse ctetur adipisicing elit. Praesentium, atque is a man those is a great...</p>

                    <div className=' flex items-center justify-center w-full pt-2 pb-1'>
                        <button onClick={() => navigate('/bsccourse')} className=' py-1  px-4 border border-blue-600 text-sm hover:text-white hover:bg-blue-600 rounded font-bold transition-all duration-200 ease-in-out'>Read more</button>
                    </div>
                </div>


                <div className=' bg-white hover:shadow-lg cursor-pointer border hover:border-blue-600 transition-all duration-200 ease-in-out border-purple-400 pb-3 rounded-lg'>
                    <img className=' rounded-t-lg w-full' src={CourseBanarImg4} alt="CourseBanarImg" />
                    <div className=' mt-3 px-2 flex items-center gap-2 text-blue-600'>
                        <SiSitepoint className=' -mt-1' />
                        <h1 className=' font-bold text-gray-700'>Lets talk about Academic Study</h1>
                    </div>
                    <p className=' text-justify mt-3 mb-2 px-2'>Lorem ip sum dolor sit amet conse ctetur adipisicing elit. Praesentium, atque is a man those is a great...</p>

                    <div className=' flex items-center justify-center w-full pt-2 pb-1'>
                        <button onClick={() => navigate('/bsccourse')} className=' py-1  px-4 border border-blue-600 text-sm hover:text-white hover:bg-blue-600 rounded font-bold transition-all duration-200 ease-in-out'>Read more</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Course;