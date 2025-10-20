import React from "react";
import '../../styles/global.css';

export default function About() {
    return (
        <div
            className="hero w-full h-screen flex flex-col items-start justify-center py-30 px-50">

            <p className="mb-3 text-gray-500 dark:text-gray-400">Track work across the
                enterprise through an open, collaborative platform. Link issues across Jira and
                ingest data from other software development tools, so your IT support and
                operations teams have richer contextual information to rapidly respond to
                requests, incidents, and changes.</p>
            <p className="text-gray-500 dark:text-gray-400">Deliver great service experiences
                fast - without the complexity of traditional ITSM solutions.Accelerate critical
                development work, eliminate toil, and deploy changes with ease, with a complete
                audit trail for every change.</p>
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Default</button>

        </div>
    );
}