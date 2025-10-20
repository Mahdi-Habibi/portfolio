import React from "react";
import '../../styles/global.css';

export default function Hero() {
    return (
        <div
            className="hero w-full h-screen flex flex-col items-start justify-center py-30 px-50">
            <h1
                class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl flex flex-col">Hey my name is Mahdi,
                <span
                    class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">I'm a developer...</span>
                </h1>
            <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Here
                at Flowbite we focus on markets where technology, innovation, and capital can
                unlock long-term value and drive economic growth.</p>

        </div>
    );
}