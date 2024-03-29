import React from "react";
import Profile from "../assets/image/profile.svg";
import Banner from "../assets/image/hero-stats-login.webp"
import { IoIosMail } from "react-icons/io";

const Home = () => {
    return (
        <section class="pt-32 sm:pt-36 md:pt-40 lg:pt-36">
            <div class="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
                <div class="text-center">
                    <div class="items-center gap-12 lg:flex">
                        <div class="md:mx-auto md:w-3/4 lg:ml-0 lg:w-1/2">
                            <h1 class="text-center text-5xl font-bold text-blue-950 dark:text-white sm:text-6xl lg:text-left lg:text-7xl">
                                Build your dream team at
                                <span class="relative">
                                    <span class="relative bg-gradient-to-r from-blue-500  to-blue-900 bg-clip-text text-transparent">Scale.</span>
                                </span>
                            </h1>
                            <p class="mt-12 text-lg text-gray-600 dark:text-gray-300 sm:text-xl text-left">Computers used to be magical. But much of that, and practices that slow teams down and hold great work back.</p>
                            <form action="" class="mt-12">
                                <div class="relative flex justify-start items-center w-fit rounded-full border bg-white p-1 px-2 shadow-md md:p-2 lg:pr-3">
                                    <div class="py-3 pl-4 lg:pl-5">
                                        <IoIosMail className="m-auto h-6 w-6 fill-gray-500 dark:fill-gray-400" />
                                    </div>
                                    <div class="relative">
                                        <div class="flex items-center">
                                            <input autocomplete="email" placeholder="Your mail address" class="flex-1 w-full rounded-full bg-transparent p-4 placeholder-gray-600 dark:placeholder-white" type="email" />
                                            <button type="button" title="Start buying" class="h-12 w-28 bg-blue-600 rounded-full transition duration-300 hover:scale-105 active:duration-75 active:scale-95 dark:bg-blue-700 ml-auto">
                                                <span class="flex items-center justify-center w-full h-full text-white font-semibold">Get Started</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <img class="mt-12 md:mx-auto md:w-2/3 lg:mt-0 lg:ml-0 lg:w-1/2" src={Banner} alt="tailus stats and login components" width="1865" height="1750" />
                    </div>
                </div>
            </div>
        </section>
        
    );
};

export default Home;
