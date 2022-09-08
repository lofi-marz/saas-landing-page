import React from 'react';
import herosm from './hero-sm.webp';
import heromd from './hero-md.webp';
import herolg from './hero-lg.webp';
import heroxl from './hero-xl.webp';
import hero2xl from './hero-2xl.webp';
import desktop from 'images/site-scroll-desktop-v2.webp';
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
            className="relative flex h-screen w-full items-center justify-center sm:h-auto"
            key={closest}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            variants={fadeInVariants}>
            <Image
                src={images[closest]}
                className="h-full w-full object-cover sm:h-auto"
            />
            <div className="absolute top-[51%] mx-auto hidden h-[37.17647059%] w-[65.49479167%] overflow-clip bg-white md:block lg:top-[43.8%] lg:left-[48.8%] lg:h-[40.29411765%] lg:w-[42.54901961%] xl:top-[33.9%] xl:left-[47%] xl:h-[50%] xl:w-[44.0625%] 2xl:top-[30%] 2xl:left-[43.8%] 2xl:h-[50.5%] 2xl:w-[44.89583333%]">
                <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: ['0%', '-21%', '-39.5%', '-58%'] }}
                    transition={{
                        duration: 5,
                        delay: 1,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}>
                    <Image src={desktop} />
                </motion.div>
            </div>
        </motion.div>
    );
}

export function Hero() {
    return (
        <section className="section relative flex h-full w-full w-full grow flex-col gap-4 font-title font-semibold text-white">
            <Background />
            <div className="absolute flex h-full w-full flex-col items-center gap-4 bg-gradient-to-b from-[#00000040] to-transparent px-12 text-center lg:items-start lg:text-start">
                <NavSpacer />
                <h1 className="font-title text-4xl md:text-8xl">
                    NUTRITION <br /> AS A SERVICE
                </h1>
                <p className="text-xl font-semibold lg:text-3xl">
                    Start your free trial today. <br /> No credit card required.
                </p>
                <div className="grow lg:hidden"></div>
                <button className="my-12 w-full bg-white px-10 py-5 text-xl text-black lg:w-fit">
                    GET STARTED
                </button>
            </div>
        </section>
    );
}
