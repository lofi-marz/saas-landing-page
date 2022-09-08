import type { NextPage } from 'next';
import React from 'react';
import {
    GrowBusiness,
    Hero,
    HeroBackground,
    NavBar,
} from 'components/sections';
import herosm from '../components/sections/hero-sm.webp';
import heromd from '../components/sections/hero-md.webp';
import herolg from '../components/sections/hero-lg.webp';
import heroxl from '../components/sections/hero-xl.webp';
import hero2xl from '../components/sections/hero-2xl.webp';
import { useClosestMedia } from '../hooks/useClosestMedia';
import { motion } from 'framer-motion';
import { fadeInVariants } from '../animations';
import Image from 'next/future/image';
import desktop from '../images/site-scroll-desktop-v2.webp';

const Home: NextPage = () => {
    return (
        <div className="relative z-10 flex min-h-screen w-full flex-col items-center justify-start font-text text-neutral-900">
            <div className="fixed top-0 z-10 w-full">
                <NavBar />
            </div>
            <div className="w-full">
                <Hero />
                <GrowBusiness />
            </div>
        </div>
    );
};

export default Home;
