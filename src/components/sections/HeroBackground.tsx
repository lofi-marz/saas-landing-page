import herosm from './hero-sm.webp';
import heromd from './hero-md.webp';
import herolg from './hero-lg.webp';
import heroxl from './hero-xl.webp';
import hero2xl from './hero-2xl.webp';
import { useClosestMedia } from '../../hooks/useClosestMedia';
import { motion } from 'framer-motion';
import { fadeInVariants } from '../../animations';
import Image from 'next/future/image';
import desktop from '../../images/site-scroll-desktop-v2.webp';
import React from 'react';

export function HeroBackground() {
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
            className="top-0 -z-10 flex h-screen w-full items-center justify-center sm:h-auto"
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
