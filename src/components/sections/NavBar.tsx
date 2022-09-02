import clsx from 'clsx';
import { motion, useViewportScroll, Variants } from 'framer-motion';
import { useMediaQuery } from 'hooks/useMediaQuery';
import React, { useState } from 'react';
import { FaLeaf } from 'react-icons/fa';

function Logo() {
    return (
        <div className="flex w-fit items-center justify-center gap-2 text-white">
            <FaLeaf />
            <div className="font-bold">CHUNKIES</div>
        </div>
    );
}

function NavLinks({ inverted }: { inverted: boolean }) {
    return (
        <motion.div
            className={clsx(
                'flex items-center gap-8 px-4 text-xl transition-all',
                inverted ? 'text-primary' : 'text-white'
            )}>
            <a href="#hero">home</a>
            <a>about us</a>
            <a>contact us</a>
            <a
                className={clsx(
                    'rounded-full px-5 py-2 transition-all',
                    inverted ? 'bg-primary text-white' : 'bg-white text-primary'
                )}>
                order
            </a>
        </motion.div>
    );
}

export function NavSpacer() {
    return <div className="absolute top-0 z-10 flex h-20"></div>;
}

export function NavBar() {
    const lg = useMediaQuery('lg');
    const { scrollYProgress } = useViewportScroll();

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
            className="absolute top-0 z-10 flex h-20 w-full items-center justify-between px-4 font-title text-3xl lg:px-12 lg:text-2xl"
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
