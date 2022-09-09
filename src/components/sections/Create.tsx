import { WithChildrenProps } from '../../types';
import screenshot from 'images/restaurant-landing-page-desktop.png';

import Image from 'next/future/image';
import { motion } from 'framer-motion';

const listVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
    },
};
const listItemVariants = {
    hidden: { opacity: 0, x: -25 },
    show: { opacity: 1, x: 0 },
};

function ListItem({
    index,
    title,
    children,
}: { index: number; title: string } & WithChildrenProps) {
    return (
        <motion.li
            className="flex gap-16"
            variants={listItemVariants}
            transition={{ duration: 1 }}>
            <div className="w-36 text-center text-9xl font-semibold">
                {index}
            </div>
            <div className="flex flex-col gap-4 font-semibold">
                <div className="text-3xl">{title}</div>
                <div>
                    <div className="w-4/5">{children}</div>
                </div>
            </div>
        </motion.li>
    );
}

export function Create() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-black px-12 py-36 text-white md:gap-36">
            <div className="2xl:text-11xl sticky top-[25%] flex w-full flex-col items-start justify-center  font-title text-4xl font-semibold sm:text-8xl md:text-8xl lg:w-2/3 lg:text-8xl xl:text-9xl">
                <div>CREATE A</div>
                <div className="self-end">WEBSITE</div>
            </div>
            <div className="z-10 flex w-full flex-col items-center justify-center  gap-12 lg:px-24">
                <Image
                    src={screenshot}
                    className="h-auto w-full py-12 lg:w-4/5"
                />
                <div className="flex w-full w-1/2 flex-col gap-6 self-start">
                    <h2 className="font-title text-4xl font-semibold">
                        Website templates <br /> for every purpose
                    </h2>
                    <p>
                        Start with a flexible template, then customize to fit
                        your style and professional needs with our website
                        builder.
                    </p>
                </div>
            </div>
        </div>
    );
}
