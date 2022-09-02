import type { NextPage } from 'next';
import React from 'react';
import { GrowBusiness, Hero, NavBar } from 'components/sections';

const Home: NextPage = () => {
    return (
        <div className="relative z-10 flex min-h-screen w-full flex-col items-center justify-start font-text text-neutral-900">
            <NavBar />
            <div className="absolute top-0 w-full">
                <Hero />
                <GrowBusiness />
            </div>
        </div>
    );
};

export default Home;
