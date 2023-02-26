import React from 'react';
import img1 from '../../../Assect/man1.jpg'
import img2 from '../../../Assect/man2.jpg'
import img3 from '../../../Assect/man3.jpg'
import img4 from '../../../Assect/man4.jpg'
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { useNavigate } from 'react-router-dom';



const Team = () => {
    const navigate = useNavigate()
    return (
        <div>
            <section class="bg-white max-w-7xl mx-auto px-5">
                <div class="container px-6 py-10 mx-auto">
                    <h1 class="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl ">Advisory Team</h1>



                    <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
                        <div class="flex flex-col items-center py-8 transition-colors duration-300 transform border border-blue-600 cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-700 ">
                            <img class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src={img1} alt="img1" />
                            <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize group-hover:text-white">April Lin</h1>
                            <p class="mt-2 text-gray-500 capitalize  group-hover:text-gray-300 text-center">Master of StandFord University<br />
                                <span className=' text-blue-600  group-hover:text-gray-300'>Zihuo Education Project Director</span></p>
                        </div>

                        <div class="flex flex-col items-center py-8 transition-colors duration-300 transform border border-blue-600  cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-700 ">
                            <img class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src={img2} alt="img2" />
                            <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize group-hover:text-white">April Lin</h1>
                            <p class="mt-2 text-gray-500 capitalize  group-hover:text-gray-300 text-center">Master of StandFord University<br />
                                <span className=' text-blue-600  group-hover:text-gray-300'>Zihuo Education Project Director</span></p>
                        </div>

                        <div class="flex flex-col items-center py-8 transition-colors duration-300 transform border border-blue-600  cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-700 ">
                            <img class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src={img4} alt="img4" />
                            <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize group-hover:text-white">April Lin</h1>
                            <p class="mt-2 text-gray-500 capitalize  group-hover:text-gray-300 text-center">Master of StandFord University<br />
                                <span className=' text-blue-600  group-hover:text-gray-300'>Zihuo Education Project Director</span></p>
                        </div>

                        <div class="flex flex-col items-center py-8 transition-colors duration-300 transform border border-blue-600  cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-700 ">
                            <img class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src={img3} alt="img3" />
                            <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize group-hover:text-white">April Lin</h1>
                            <p class="mt-2 text-gray-500 capitalize  group-hover:text-gray-300 text-center">Master of StandFord University<br />
                                <span className=' text-blue-600  group-hover:text-gray-300'>Zihuo Education Project Director</span></p>
                        </div>
                    </div>
                    <div className=' mt-6 flex items-center justify-center'>
                        <button onClick={() => navigate('/teacherteam')} className=' pt-1.5 pb-1 px-6 border rounded-full text-white border-blue-600 bg-blue-600 hover:bg-transparent gap-2 hover:text-blue-600 flex items-center'>See More <HiOutlineAcademicCap /></button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Team;