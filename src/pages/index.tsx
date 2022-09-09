import type { NextPage } from 'next';
import React from 'react';
import { Create, GrowBusiness, Hero, NavBar } from 'components/sections';

const Home: NextPage = () => {
    return (
        <div className="relative z-10 flex min-h-screen w-full flex-col items-center justify-start font-text text-neutral-900">
            <div className="fixed top-0 z-10 w-full">
                <NavBar />
            </div>
            <div className="w-full">
                <Hero />
                <GrowBusiness />
                <Create />
            </div>
        </div>
    );
};

export default Home;
