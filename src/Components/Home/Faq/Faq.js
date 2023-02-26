import React from 'react';
import { FiChevronDown } from "react-icons/fi";
import faqimg from '../../../Assect/faq.png'


const Faq = () => {
    return (
        <div className=' max-w-7xl mx-auto px-5 mt-20  py-10'>
            <div >
                <h4 className=' font-bold text-lime-600'>#Faq</h4>
                <h1 className=' text-3xl font-bold mb-10'>Most relavent asking question</h1>
            </div>
            <div className='lg:flex items-center justify-between'>
                <div className=' lg:w-[40%]'>
                    <img className='w-full' src={faqimg} alt="faqimg" />
                </div>


                <div class="xl:w-2/4 lg:w-[60%] w-full mx-auto ">
                    <div class="md:m-8 rounded overflow-hidden ">
                        <div class="group outline-none accordion-section mb-4 rounded-md" tabindex="1">
                            <div class="group bg-lime-200 flex rounded-md justify-between px-4 py-3 items-center text-lime-700 font-medium transition ease duration-500 cursor-pointer pr-10 relative">
                                <div class="group-focus:text-blue-800 text-lg font-medium transition ease duration-500">
                                    Why we read in abroad?
                                </div>
                                <div class="h-8 w-8 border border-lime-800 rounded-full  transform transition ease duration-500 group-focus:text-blue-800 group-focus:-rotate-180 group-focus:border-blue-800 absolute top-0 right-0 mb-auto text-lime-600 ml-auto mt-2 mr-2   pt-1 pl-[3px]">
                                    <FiChevronDown className=' text-2xl' />
                                </div>
                            </div>
                            <div class="group-focus:max-h-screen max-h-0 bg-lime-100 px-4 overflow-hidden ease duration-500">
                                <p class="p-2 text-gray-600 text-justify">
                                    <span className=' font-bold'>Ans:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, reprehenderit. Veniam odio ea cumque assumenda! Nesciunt explicabo ipsam totam dolorum!
                                </p>
                            </div>
                        </div>




                        <div class="group outline-none accordion-section mb-4 rounded-md" tabindex="1">
                            <div class="group bg-lime-200 flex rounded-md justify-between px-4 py-3 items-center text-lime-700 font-medium transition ease duration-500 cursor-pointer pr-10 relative">
                                <div class="group-focus:text-blue-800 text-lg font-medium transition ease duration-500">
                                    Job prefarance Area?
                                </div>
                                <div class="h-8 w-8 border border-lime-800 rounded-full  transform transition ease duration-500 group-focus:text-blue-800 group-focus:-rotate-180 group-focus:border-blue-800 absolute top-0 right-0 mb-auto text-lime-600 ml-auto mt-2 mr-2   pt-1 pl-[3px]">
                                    <FiChevronDown className=' text-2xl' />
                                </div>
                            </div>
                            <div class="group-focus:max-h-screen max-h-0 bg-lime-100 px-4 overflow-hidden ease duration-500">
                                <p class="p-2 text-gray-600 text-justify">
                                    <span className=' font-bold'>Ans:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, reprehenderit. Veniam odio ea cumque assumenda! Nesciunt explicabo ipsam totam dolorum!
                                </p>
                            </div>
                        </div>


                        <div class="group outline-none accordion-section mb-4 rounded-md" tabindex="1">
                            <div class="group bg-lime-200 flex rounded-md justify-between px-4 py-3 items-center text-lime-700 font-medium transition ease duration-500 cursor-pointer pr-10 relative">
                                <div class="group-focus:text-blue-800 text-lg font-medium transition ease duration-500">
                                    How about its carear?
                                </div>
                                <div class="h-8 w-8 border border-lime-800 rounded-full  transform transition ease duration-500 group-focus:text-blue-800 group-focus:-rotate-180 group-focus:border-blue-800 absolute top-0 right-0 mb-auto text-lime-600 ml-auto mt-2 mr-2   pt-1 pl-[3px]">
                                    <FiChevronDown className=' text-2xl' />
                                </div>
                            </div>
                            <div class="group-focus:max-h-screen max-h-0 bg-lime-100 px-4 overflow-hidden ease duration-500">
                                <p class="p-2 text-gray-600 text-justify">
                                    <span className=' font-bold'>Ans:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, reprehenderit. Veniam odio ea cumque assumenda! Nesciunt explicabo ipsam totam dolorum!
                                </p>
                            </div>
                        </div>



                        <div class="group outline-none accordion-section mb-4 rounded-md" tabindex="1">
                            <div class="group bg-lime-200 flex rounded-md justify-between px-4 py-3 items-center text-lime-700 font-medium transition ease duration-500 cursor-pointer pr-10 relative">
                                <div class="group-focus:text-blue-800 text-lg font-medium transition ease duration-500">
                                    How many amount cost in whole time?
                                </div>
                                <div class="h-8 w-8 border border-lime-800 rounded-full  transform transition ease duration-500 group-focus:text-blue-800 group-focus:-rotate-180 group-focus:border-blue-800 absolute top-0 right-0 mb-auto text-lime-600 ml-auto mt-2 mr-2   pt-1 pl-[3px]">
                                    <FiChevronDown className=' text-2xl' />
                                </div>
                            </div>
                            <div class="group-focus:max-h-screen max-h-0 bg-lime-100 px-4 overflow-hidden ease duration-500">
                                <p class="p-2 text-gray-600 text-justify">
                                    <span className=' font-bold'>Ans:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, reprehenderit. Veniam odio ea cumque assumenda! Nesciunt explicabo ipsam totam dolorum!
                                </p>
                            </div>
                        </div>

                        <div class="group outline-none accordion-section mb-4 rounded-md" tabindex="1">
                            <div class="group bg-lime-200 flex rounded-md justify-between px-4 py-3 items-center text-lime-700 font-medium transition ease duration-500 cursor-pointer pr-10 relative">
                                <div class="group-focus:text-blue-800 text-lg font-medium transition ease duration-500">
                                    Is it too many Costly?
                                </div>
                                <div class="h-8 w-8 border border-lime-800 rounded-full  transform transition ease duration-500 group-focus:text-blue-800 group-focus:-rotate-180 group-focus:border-blue-800 absolute top-0 right-0 mb-auto text-lime-600 ml-auto mt-2 mr-2   pt-1 pl-[3px]">
                                    <FiChevronDown className=' text-2xl' />
                                </div>
                            </div>
                            <div class="group-focus:max-h-screen max-h-0 bg-lime-100 px-4 overflow-hidden ease duration-500">
                                <p class="p-2 text-gray-600 text-justify">
                                    <span className=' font-bold'>Ans:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, reprehenderit. Veniam odio ea cumque assumenda! Nesciunt explicabo ipsam totam dolorum!
                                </p>
                            </div>
                        </div>


                        <div class="group outline-none accordion-section mb-1 rounded-md" tabindex="1">
                            <div class="group bg-lime-200 flex rounded-md justify-between px-4 py-3 items-center text-lime-700 font-medium transition ease duration-500 cursor-pointer pr-10 relative">
                                <div class="group-focus:text-blue-800 text-lg font-medium transition ease duration-500">
                                    What is neaded to study in abroad?
                                </div>
                                <div class="h-8 w-8 border border-lime-800 rounded-full  transform transition ease duration-500 group-focus:text-blue-800 group-focus:-rotate-180 group-focus:border-blue-800 absolute top-0 right-0 mb-auto text-lime-600 ml-auto mt-2 mr-2   pt-1 pl-[3px]">
                                    <FiChevronDown className=' text-2xl' />
                                </div>
                            </div>
                            <div class="group-focus:max-h-screen max-h-0 bg-lime-100 px-4 overflow-hidden ease duration-500">
                                <p class="p-2 text-gray-600 text-justify">
                                    <span className=' font-bold'>Ans:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, reprehenderit. Veniam odio ea cumque assumenda! Nesciunt explicabo ipsam totam dolorum!
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Faq;