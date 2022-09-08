import React from 'react';
import { HeroBackground } from './HeroBackground';
import { NavBar, NavSpacer } from './NavBar';

export function Hero() {
    return (
        <section className="section relative flex h-full w-full w-full grow flex-col gap-4 font-title font-semibold text-white">
            <HeroBackground />
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
