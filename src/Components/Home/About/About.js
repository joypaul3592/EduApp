import React from 'react';
import aboutimg from '../../../Assect/about.png'
import { BsRecordCircle, BsTelephoneFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
const About = () => {
    const navigate = useNavigate()
    return (
        <div className=' lg:mt-[400px] md:mt-[500px] mt-[900px] py-10 '>
            <div className=' max-w-7xl mx-auto lg:flex items-center px-5'>
                <div className=' lg:w-[45%] w-full '>
                    <img className=' mx-auto lg:mx-0 px-10' src={aboutimg} alt="aboutimg" />
                </div>
                <div className=' lg:w-[52%] w-full lg:text-left text-center pr-2 py-5'>
                    <h4 className=' font-medium opacity-70 text-lg text-blue-600'>Service Process</h4>
                    <h1 className=' xl:text-5xl text-4xl font-bold mb-3 xl:leading-[60px] leading-[40px] mt-5 mx-auto lg:mx-0 xl:mt-0 md:w-7/12 w-full lg:w-10/12'>The whole process of study abroad service</h1>
                    <p className=' text-gray-600 xl:mb-8 mb-4 text-justify'>Students can make an appointment with the clerical teacher to communicate and formulate the content of the clerical materials; according to the requirements of the institution, zero templates and pure original writing of application documents for studying in the UK</p>
                    <div className=' grid md:grid-cols-2 grid-cols-1 mb-8 gap-5'>
                        <div className=' flex items-center gap-3 bg-white  py-4 p-2 hover:shadow-purple-300 rounded-lg shadow-md '>
                            <BsRecordCircle className=' text-xl text-blue-600' />
                            <h1 className=' text-lg font-medium'>Material Approval</h1>
                        </div>
                        <div className=' flex items-center gap-3 bg-white hover:shadow-purple-300  py-4 p-2 rounded-lg shadow-md '>
                            <BsRecordCircle className=' text-xl text-blue-600' />
                            <h1 className=' text-lg font-medium'>college application</h1>
                        </div>
                        <div className=' flex items-center gap-3 bg-white hover:shadow-purple-300  py-4 p-2 rounded-lg shadow-md '>
                            <BsRecordCircle className=' text-xl text-blue-600' />
                            <h1 className=' text-lg font-medium'>language application</h1>
                        </div>
                        <div className=' flex items-center gap-3 bg-white hover:shadow-purple-300  py-4 p-2 rounded-lg shadow-md '>
                            <BsRecordCircle className=' text-xl text-blue-600' />
                            <h1 className=' text-lg font-medium'>Visa Application</h1>
                        </div>
                    </div>
                    <div className=' md:flex items-center gap-12'>
                        <button onClick={() => navigate('/contact')} className=' py-2 px-8 bg-blue-600 border border-blue-600 hover:bg-transparent hover:text-blue-600 text-white rounded-lg transition-all duration-300 ease-in-out'>Contact</button>
                        <div className=' justify-center mt-5 md:mt-0 flex items-center gap-3 hover:text-blue-600 cursor-pointer'>
                            <div className=' h-10 w-10 rounded-full flex items-center justify-center bg-blue-100'>
                                <BsTelephoneFill />
                            </div>
                            <h1 className=' text-gray-800'>+5571243568748</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;