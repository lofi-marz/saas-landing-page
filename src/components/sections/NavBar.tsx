import clsx from 'clsx';
import { motion, useScroll, Variants } from 'framer-motion';
import { useMediaQuery } from 'hooks/useMediaQuery';
import React, { useState } from 'react';
import { FaLeaf } from 'react-icons/fa';

function Logo() {
    return (
        <div className="flex w-fit items-center justify-center gap-2 text-white">
            <FaLeaf />
            <div className="font-bold">CITRUS</div>
        </div>
    );
}

function NavLinks({ inverted }: { inverted: boolean }) {
    return (
        <motion.div
            className={clsx(
                'flex items-center gap-8 px-4 text-base transition-all',
                inverted ? 'text-primary' : 'text-white'
            )}>
            <a href="#hero">home</a>
            <a>about us</a>
            <a>contact us</a>
            <button className="w-fit bg-white px-6 py-4  text-black">
                GET STARTED
            </button>
        </motion.div>
    );
}

export function NavSpacer() {
    return <div className="h-20 w-full"></div>;
}

export function NavBar() {
    const lg = useMediaQuery('lg');
    const { scrollYProgress } = useScroll();

    const [atPageStart, setAtPageStart] = useState(true);
    const [scrollingDown, setScrollingDown] = useState(false);
    scrollYProgress.onChange((v) => {
        //console.log(scrollYProgress.getVelocity());
        //TODO: This feels like there should be a better way
        //setAtPageStart(v < 0.1);
        //setScrollingDown(v > 0.5 && scrollYProgress.getVelocity() <= 0);
    });

    const containerVariants: Variants = {
        transparent: { backgroundColor: '#00000000' },
        solid: { backgroundColor: '#FFFFFF' },
        hidden: { opacity: 0 },
        show: { opacity: 1 },
    };

    return (
        <motion.nav
            className="sticky top-0 z-10 flex h-20 w-full items-center justify-between px-4 font-title text-3xl lg:px-12 lg:text-2xl"
            variants={containerVariants}
            animate={[
                atPageStart ? 'transparent' : 'transparent',
                scrollingDown ? 'hidden' : 'show',
            ]}
            layout>
            <Logo />
            {lg && <NavLinks inverted={!atPageStart} />}
        </motion.nav>
    );
}
