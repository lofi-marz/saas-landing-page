import type { NextPage } from 'next';
import React from 'react';
import { Hero, NavBar } from 'components/sections';

const Home: NextPage = () => {
    return (
        <div className="z-10 flex min-h-screen w-full flex-col items-center justify-center font-text text-neutral-900">
            <NavBar />
            <Hero />
        </div>
    );
};

export default Home;
