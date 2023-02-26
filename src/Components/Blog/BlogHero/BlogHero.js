import React from 'react';
import { useNavigate } from 'react-router-dom';
import blog1img from '../../../Assect/blog1.png'
import blog2img from '../../../Assect/blog2.png'
import blog3img from '../../../Assect/blog3.png'
import blogcard1 from '../../../Assect/blog4.png'
import blogcard2 from '../../../Assect/blogcard1.png'
import blogcard3 from '../../../Assect/blogcard2.png'
const BlogHero = () => {

    const navigate = useNavigate()
    const blogDatas = [
        {
            id: 1,
            title: 'ছেলেরা কি নার্সিং পড়তে পারে? ',
            date: '০৭-১৫-২০২১',
            address: 'খুলনা, বাংলাদেশ।',
            details: ' হ্যা, ছেলেরা নার্সিং পড়তে পারে। ব্যাচেলর অব সায়েন্স ইন নার্সিং ও ডিপ্লোমা ইন নার্সিং সায়েন্স এন্ড মিডওয়াইফারি কোর্সে ভর্তির জন্য পুরুষ প্রার্থীর ক্ষেত্রে সরকারি প্রতিষ্ঠানে নির্দিষ্ট আসনের ১০ শতাংশ এবং বেসরকারি প্রতিষ্ঠানের নির্দিষ্ট আসনের ২০ শতাংশ ভর্তিযোগ্য হইবে। ডিপ্লোমা ইন মিডওয়াইফারি কোর্সে শুধু নারী প্রার্থী আবেদন করতে পারবে।',
            img: blog1img,
        },
        {
            id: 2,
            title: 'নার্সিং এ ক্যারিয়ার কেমন হবে?',
            date: '০৫-২৫-২০২২',
            address: 'ঢাকা, বাংলাদেশ।',
            details: ' আমাদের দেশে প্রয়োজনের তুলনায় যোগ্য নার্সের সংখ্যা এখনো কম। কারণ অধিকাংশ মেধাবী মেয়েরা নার্সিং পড়ার যোগ্যতা থাকা সত্যেও শুধুমাত্র সঠিক ধারণার অভাবে মহৎ এ পেশায় আসতে পারছে না। তাই আমরা আশা করছি এই লেখার মাধ্যমে আপনি নার্সিংয়ে পড়ার যাবতীয় তথ্য জেনে গেছেন। দেশে এখন প্রায় সব জেলা-উপজেলা শহরগুলোতেই সরকারি বেসরকারি হাসপাতাল বা ক্লিনিক গড়ে উঠেছে। এর ফলে ক্রমাগত বেড়ে চলছে হাসপাতালের সংখ্যা। আর এসব প্রতিষ্ঠানে প্রতিবছরই প্রচুর সংখ্যক নার্সের প্রয়োজন হয়। তাই চাইলে এ পেশায় আসতে পারেন আপনিও। তবে শুধু দেশেই নয়, বর্হিবিশ্বে দক্ষ ও অভিজ্ঞ নার্সের চাহিদা প্রতিনিয়ত বেড়েই চলেছে। মধ্যপ্রাচ্য, অস্ট্রেলিয়া ও কানাডাসহ বিশ্বের বেশকিছু উন্নত দেশে বাংলাদেশের পেশাদার নার্সরা সুনামের সাথে কাজ করছেন। তাই মানব সেবাধর্মী এ পেশায় যুক্ত হওয়ার মাধ্যমে আপনিও অর্জন করতে পারেন সামাজিক মর্যাদা ও ভালো আয়ের সুযোগ।',
            img: blog2img,
        },
        {
            id: 3,
            title: 'নার্সদের কর্মক্ষেত্র কোথায়?',
            date: '০৮-২৮-২০২২',
            address: 'বরিশাল, বাংলাদেশ।',
            details: 'সরকারী-বেসরকারী উভয় সেক্টরে নার্সদের কর্মক্ষেত্র প্রায় একই রকম হয়ে থাকে। তবে সরকারী নার্সদের কাজের ক্ষেত্র কিছুটা বিস্তৃত। সরকারী নার্সরা সরকারি হাসপাতাল ও স্বাস্থ্যকেন্দ্রে এবং আইনশৃঙ্খলা ও সামরিক বাহিনীর চিকিৎসা বিভাগে দায়িত্ব পেয়ে থাকেন।পাশাপাশি দেশের জরুরী প্রয়োজনে আকষ্মিক কোন দুর্যোগ মোকাবিলায়ও সরকারী নার্সদের দায়িত্ব দেয়া হয়। অপরদিকে বেসরকারী নার্সরা সাধারণত বেসরকারি হাসপাতাল ও স্বাস্থ্যকেন্দ্রে এবং ব্যক্তিগত ক্লিনিকে কাজ করে থাকেন। তবে নার্সদের কাজেরও বেশকিছু পদ রয়েছে। কাজের ক্ষেত্র ও অভিজ্ঞতা অনুযায়ী আপনি অ্যাসিস্ট্যান্ট নার্স, স্টাফ নার্স, ওটি সিস্টার বা নার্সিং সুপারভাইজার হিসেবে কাজ করার সুযোগ পাবেন। আবার অনেকে নার্সিং কলেজে ইন্সট্রাক্টর বা ডেমোনস্ট্রেটর ইনচার্জ হিসেবেও নিয়োগ পেয়ে থাকেন। এছাড়া ভালো দক্ষতা থাকলে নার্সিং অধিদপ্তরে প্রজেক্ট অফিসার বা সহকারী পরিচালক পদেও কাজ করতে পারেন',
            img: blog3img,
        },
        {
            id: 4,
            title: 'নার্সিং ভর্তি পরীক্ষার বই কোনটা পড়বো?',
            date: '০৬-১৩-২০২২',
            address: 'রংপুর, বাংলাদেশ।',
            details: 'বোর্ড বই বা মেইন বইয়ের বিকল্প নেই। গাইড বই কখনোই মূল বইয়ের বিকল্প নয়। তাই বেশি বেশি মূল বই পড়ুন। বিএসসি ইন নার্সিং এর জন্য: এসএসসি’র বাংলা ব্যাকরণ, ইংরেজি গ্রামার, সাধারন গনিত এবং এইচএসসির পদার্থ, রসায়ন, জীববিজ্ঞান এবং সাধারন জ্ঞানের যেকোন একটি বই। ডিপ্লোমা ইন নার্সিং/ডিপ্লোমা ইন মিডওয়াইফারি এর জন্য: এসএসসি’র বাংলা ব্যাকরণ, ইংরেজি গ্রামার, সাধারন গনিত, সাধারন বিজ্ঞান এবং সাধারন জ্ঞানের যেকোন একটি বই। সেই সাথে বিগত সালের প্রশ্নের ধরন দেখার জন্য ভাল মানের একটি ভর্তি গাইড ফলো করুন',
            img: blogcard1,
        },
        {
            id: 5,
            title: 'আলাদা ভাবে পরীক্ষা হবে নাকি একই সাথে?',
            date: '০২-২১-২০২১',
            address: 'নওগা, বাংলাদেশ।',
            details: 'একই দিনে, একই সময়ে নার্সিং ভর্তি পরীক্ষা অনুষ্ঠিত হবে। আপনি যেকোনো একটি কেন্দ্রে পরীক্ষা দিলেই হলো। পরীক্ষার কেন্দ্র এডমিট কার্ডে লেখা থাকবে। যেই কেন্দ্রে পরীক্ষা দিতে ইচ্ছুক/সুবিধা হয়, সেখানেই পরীক্ষা দিতে পারবেন। আপনার প্রাপ্ত নম্বর এবং কলেজ/ইন্সটিটিউট চয়েস এর পর্যায়ক্রমের উপর নির্ভর করে আপনি কোন নার্সিং কলেজ/ইনস্টিটিউটে চান্স পাবেন।',
            img: blogcard2,
        },
        {
            id: 6,
            title: 'কোন কলেজ/ইনস্টিটিউটে কম নম্বরে চান্স হয়?',
            date: '০৯-১৬-২০২২',
            address: 'চাঁদপুর, বাংলাদেশ।',
            details: 'আবেদন করার সময় পছন্দের পর্যায়ক্রমে সবগুলো নার্সিং কলেজ/ইনস্টিটিউট চয়েস দেওয়া যায়। ঢাকায় বিএসসি নার্সিং কলেজ ২ টি (ঢাকা নার্সিং কলেজ এবং কলেজ অফ নার্সিং, শের ই বাংলা নগর)। এবং ডিপ্লোমা ইন নার্সিং & মিডওয়াইফারি ইন্সটিটিউট ১ টি (মিটফোর্ড নার্সিং ইন্সটিটিউট, ঢাকা)। এই গুলোতে চান্স পেতে হলে বেশি মার্ক পেতে হবে। ঢাকার বাইরে তুলনামূলক ভাবে অল্প নম্বর পেয়ে চান্স পাওয়া যায়। বিগত বছরগুলোর অভিজ্ঞতা থেকে বলা যায়, মেয়েদের জন্য ৮০+ পেলে চান্স পাওয়া আশা করা যায়। কিন্তু, ছেলেদের চান্স পেতে হলে ৯০+ মার্ক পেতে হয়।',
            img: blogcard3,
        }

    ]

    return (
        <div className=' max-w-7xl mx-auto px-5 '>
            <div>
                <h1 className=' text-lg text-purple-600'>#জনপ্রিয় ব্লগ</h1>
            </div>

            <div className=' lg:h-[30rem]  w-full lg:flex justify-between py-5 '>
                <div className=' xl:w-[55%] w-full mb-10 lg:mb-0 lg:w-[48%] bg-gradient-to-r from-indigo-200 to-purple-200 relative rounded-2xl overflow-hidden group-hover:block  cursor-pointer'>

                    <div className=' w-full h-full bg-white bg-opacity-40 backdrop-blur-md '>
                        <div className=' absolute md:top-10 top-3 left-5'>
                            <h1 className=' md:text-2xl text-xl '>{blogDatas[0]?.title}</h1>
                        </div>
                        <img className=' h-full mx-auto ' src={blogDatas[0]?.img} alt="blog1img" />
                        <div className=' absolute left5 bottom-2.5 px-5 text-justify hidden md:block '>
                            <p className=' text-justify text-ellipsis inline'>{blogDatas[0]?.details.slice(0, 210)}</p>...
                            <button onClick={() => navigate(`/blogdetails/${blogDatas[0]?.id}`)} className=" ml-1 text-purple-600">আরো পড়ুন</button>
                        </div>
                    </div>
                </div>

                <div className=' xl:w-[42%] w-full lg:w-[50%] gap-10  flex flex-col items-center justify-between'>
                    <div className=' w-full lg:h-[47%] '>
                        <div class="flex flex-col h-full ">
                            <div class=" h-full shadow-md rounded-3xl p-1.5 ">
                                <div class="flex-none md:flex h-full">
                                    <div class=" h-full w-full md:w-48  lg:mb-0 mb-3">
                                        <img src={blogDatas[1]?.img}
                                            alt="Just a flower" class=" w-full h-full border border-purple-600  object-scale-down lg:object-cover  rounded-2xl" />
                                    </div>
                                    <div class="flex-auto ml-3 justify-center pt-6 pl-5 bg-purple-100 p-2 rounded-2xl">
                                        <div class="flex flex-wrap  ">
                                            <div class="w-full flex-none text-sm text-blue-700 font-medium ">
                                                #ব্লগ
                                            </div>
                                            <h2 class="flex-auto text-lg font-medium text-black">
                                                {blogDatas[1]?.title}</h2>
                                        </div>
                                        <div class="flex py-2  text-sm text-gray-500">
                                            <div class="flex-1 inline-flex items-center">
                                                <svg class=' h-4 mr-1 text-purple-600' xmlns="http://www.w3.org/2000/svg" fill="none"
                                                    viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z">
                                                    </path>
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                                </svg>
                                                <p class="">{blogDatas[1]?.address}</p>
                                            </div>
                                            <div class="flex-1 inline-flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" class=' h-4 mr-1 text-purple-600' fill="none"
                                                    viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <p class="">{blogDatas[1]?.date}</p>
                                            </div>
                                        </div>

                                        <div class="flex p-4 pt-2 pb-0 border-t border-purple-200 "></div>

                                        <div class="flex mt-2 space-x-3 text-sm font-medium">
                                            <div class="flex-auto flex space-x-3">
                                                <button
                                                    class="mb-2 md:mb-0 bg-purple-600 border border-purple-600 text-white px-8 pt-2 pb-[5px]  tracking-wider  rounded-full hover:bg-transparent hover:text-purple-600 transition-all duration-200 ease-in-out inline-flex items-center space-x-2 " onClick={() => navigate(`/blogdetails/${blogDatas[1]?.id}`)}>

                                                    <span>বিস্তারিত</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' w-full lg:h-[47%]'>
                        <div class="flex flex-col h-full">
                            <div class=" h-full shadow-md rounded-3xl p-1.5">
                                <div class="flex-none md:flex h-full">
                                    <div class=" h-full w-full md:w-48 lg:mb-0 mb-3">
                                        <img src={blogDatas[2]?.img}
                                            alt="Just a flower" class=" h-full w-full border border-purple-600  object-scale-down lg:object-cover  rounded-2xl" />
                                    </div>
                                    <div class="flex-auto ml-3 justify-center pt-6 pl-5 bg-purple-100 p-2 rounded-2xl">
                                        <div class="flex flex-wrap  ">
                                            <div class="w-full flex-none text-sm text-blue-700 font-medium ">
                                                #ব্লগ
                                            </div>
                                            <h2 class="flex-auto text-lg font-medium text-black">
                                                {blogDatas[2]?.title}</h2>
                                        </div>
                                        <div class="flex py-2  text-sm text-gray-500">
                                            <div class="flex-1 inline-flex items-center">
                                                <svg class=' h-4 mr-1 text-purple-600' xmlns="http://www.w3.org/2000/svg" fill="none"
                                                    viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z">
                                                    </path>
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                                </svg>
                                                <p class="">{blogDatas[2]?.address}</p>
                                            </div>
                                            <div class="flex-1 inline-flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" class=' h-4 mr-1 text-purple-600' fill="none"
                                                    viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <p class="">{blogDatas[2]?.date}</p>
                                            </div>
                                        </div>

                                        <div class="flex p-4 pt-2 pb-0 border-t border-purple-200 "></div>

                                        <div class="flex space-x-3 mt-2 text-sm font-medium">
                                            <div class="flex-auto flex space-x-3">
                                                <button
                                                    class="mb-2 md:mb-0 bg-purple-600 border border-purple-600 text-white px-8 pt-2 pb-[5px]  tracking-wider  rounded-full hover:bg-transparent hover:text-purple-600 transition-all duration-200 ease-in-out inline-flex items-center space-x-2 " onClick={() => navigate(`/blogdetails/${blogDatas[2]?.id}`)}>

                                                    <span>বিস্তারিত</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogHero;