import React from 'react';
import herosm from './hero-sm.webp';
import heromd from './hero-md.webp';
import herolg from './hero-lg.webp';
import heroxl from './hero-xl.webp';
import hero2xl from './hero-2xl.webp';
import { useClosestMedia } from 'hooks/useClosestMedia';
import Image from 'next/future/image';
import { motion } from 'framer-motion';
import { fadeInVariants } from 'animations';
import { NavSpacer } from './NavBar';

function Background() {
    const images = {
        sm: herosm,
        md: heromd,
        lg: herolg,
        xl: heroxl,
        '2xl': hero2xl,
    };
    const closest = useClosestMedia();
    return (
        <motion.div
            className="flex h-screen w-full items-center justify-center sm:h-auto"
            key={closest}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            variants={fadeInVariants}>
            <Image
                src={images[closest]}
                className="h-full w-full object-cover sm:h-auto"></Image>
        </motion.div>
    );
}

export function Hero() {
    return (
        <section className="section relative flex h-full w-full w-full grow flex-col gap-4 font-title font-semibold text-white">
            <Background />
            <div className="absolute flex h-full w-full flex-col gap-4 bg-gradient-to-b from-[#00000040] to-transparent px-12">
                <NavSpacer />
                <h1 className="font-title text-8xl ">
                    EVERYTHING <br /> TO SELL
                    <br /> ANYTHING
                </h1>
                <p className="text-3xl font-semibold">
                    Start your free website trial today. <br /> No credit card
                    required.
                </p>
                <button className="w-fit bg-white px-10 py-5 text-xl text-black">
                    GET STARTED
                </button>
            </div>
        </section>
    );
}
