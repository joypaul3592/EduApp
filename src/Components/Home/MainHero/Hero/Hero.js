import React from "react";
import { useNavigate } from "react-router-dom";
import heroimg from "../../../../Assect/HeroImg.png";
import logo from "../../../../Assect/logo.png";
import style4 from "../../../../Assect/style4.png";
const Hero = () => {
    const navigate = useNavigate()
    return (
        <div className="relative bg-gradient-to-r from-pink-50 to-sky-100 z-0">
            <div className=" relative max-w-7xl mx-auto lg:flex items-center pt-10 pb-32 px-5 justify-between">

                <div className="w-[45%]">
                    <h1 className=" text-lg text-gray-600 ">Grab the Golden Opportunity to</h1>
                    <h2 className=" text-6xl font-semibold mt-2 mb-4 text-blue-700">Study In Abroad <br /> Universities</h2>
                    <button className=" mr-4 py-2.5 px-10 bg-yellow-500 border border-yellow-500 hover:bg-transparent hover:text-yellow-500 transition-all duration-200 ease-in-out text-black rounded-full font-medium mb-5 mt-3">Admit Now</button>
                    <button className=" border border-blue-700 bg-transparent hover:text-white text-blue-700 transition-all duration-200 ease-in-out  py-2.5 px-10 hover:bg-blue-700  rounded-full font-medium mb-5 mt-3">Join Now</button>

                </div>
                <div className=" ml-[-12%] ">
                    <img className=" w-[32rem]" src={heroimg} alt="" />
                </div>
                <div className=" w-[33%] ">
                    <h1 className=" font-medium text-gray-600 mb-3">Fullfill Your Dream</h1>
                    <div className=" bg-white shadow-lg p-4 rounded-lg">
                        <div className=" flex">
                            <input className=" py-1.5 border border-gray-500 px-2 rounded w-full mr-2 text-sm" type="text" placeholder="Destination" />
                            <input className=" py-1.5 border border-gray-500 px-2 rounded w-full ml-2 text-sm placeholder:text-gray-200" type="date" placeholder="Joining Date" />
                        </div>
                        <div className=" flex gap-8 items-center mt-4">
                            <button className="border hover:border-blue-700 hover:bg-transparent text-white  transition-all duration-200 ease-in-out hover:text-blue-700  py-1 px-8 bg-blue-700  rounded-full font-medium mb-5 mt-3">Search</button>
                            <div className=" flex items-center gap-2 mt-[-10px]">
                                <input className=" mt-1" id="Check" type="radio" />
                                <label htmlFor="Check">Save this search</label>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className=" lg:text-left xl:w-[45%] lg:w-[45%] w-full pr-10 text-center">
                    <h4 className="  text-sm font-bold text-purple-600 ml-1 ">
                        দেশ সেরা নার্সিং ভর্তি কোচিং
                    </h4>
                    <h1 className=" font-bold xl:text-[65px] xl:leading-[6.5rem]  text-6xl leading-[5.5rem] ">
                        মেডুলা'স নার্সিং <br />
                        ভর্তি কোচিং
                    </h1>
                    <p className="text-lg  mb-5 text-justify">
                        নার্সিং একটি মহৎ সেবামূলক পেশা। তাছাড়া নার্সিং-এর ক্যারিয়ার উজ্জ্বল।
                        যে কোন বিভাগ থেকে এইচ.এস.সি পরীক্ষার পরে শুরু হয় ভর্তি প্রক্রিয়া।
                        যার জন্য এই ভর্তি পরীক্ষায় হয়ে থাকে তুমুল প্রতিযোগিতা । তাই, এই
                        প্রতিযোগিতায় সফল হতে, সুষম প্রস্তুতি আর সঠিক দিক নির্দেশনা অনুসরণ
                        করার পাশাপাশি বেশি বেশি পরীক্ষা দিয়ে নিজের প্রস্তুতি শাণিত করার
                        বিকল্প নেই।
                    </p>
                    <button onClick={() => navigate('/adfrom')} className=" pt-2.5 pb-1.5 px-7 border border-purple-600 bg-purple-600 text-white rounded-full hover:bg-transparent hover:text-purple-600 transition-all duration-200 ease-in-out">
                        নিবন্ধন করুন
                    </button>
                </div>

                <div className=" relative flex items-end lg:justify-end justify-center lg:w-[60%] w-full md:pt-10 lg:pt-0">
                    <img className=" xl:h-[75vh] md:h-[60vh] xl:-mr-20 -mr-10" src={heroimg} alt="heroimg" />
                </div> */}
                {/* <div className="  absolute top-4 -left-24 opacity-40">
                    <img className=" h-40 " src={style1} alt="style1" />
                </div> */}
            </div>
            <div className=" absolute bottom-60 lg:bottom-32 right-5 lg:left-[47%] opacity-40">
                <img className=" h-20 " src={style4} alt="style4" />
            </div>

            <div className=" absolute lg:top-32 top-20 lg:left-[52%] opacity-40 right-10">
                <img className=" h-28 " src={style4} alt="style4" />
            </div>
        </div>
    );
};

export default Hero;
