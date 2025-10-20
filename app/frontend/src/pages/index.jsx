import React from 'react';
import '../styles/global.css';
import SideBar from '../components/layout/sidebar';
import Hero from '../components/layout/Hero';
import About from '../components/layout/About';

export default function IndexPage() {
    return (
        <div>
            <SideBar/>
            <section className='p-4 sm:ml-64'>
                <Hero/>
                <About />
            </section>
        </div>
    );
}