import {
    motion,
    useScroll,
    useTime,
    useTransform,
    Variants,
} from 'framer-motion';

import { map } from 'utils/map';

import { WithChildrenProps } from '../types';

const imageVariants: Variants = {
    initial: {
        scale: 0.25,
        transition: { duration: 1, type: 'spring' },
    },
    animate: {
        scale: 1,
        transition: { duration: 1, type: 'spring' },
    },
};
export function AnimatedImage({
    className,
    children,
}: { className: string } & WithChildrenProps) {
    const randomOffsets = [...new Array(8)].map(() => Math.random());
    const MAX_CHANGE = 8;
    const time = useTime();
    //Sin time, offset it so that opposite corners have the same offset, and add a random offset
    //Map that value to a value from 0 - MAX_CHANGE
    //Offset the corners of a square by that value

    const path = useTransform(time, (v) => {
        const square = [0, 0, 100, 0, 100, 100, 0, 100]; //The clip path for a square to start off with
        const offsets = [...new Array(8)].map((_, i) => {
            return Math.abs(
                square[i] -
                    map(
                        Math.sin(v / 1000 + (i % 4) + randomOffsets[i]),
                        -1,
                        1,
                        0,
                        MAX_CHANGE
                    )
            );
        });

        return `polygon(${offsets[0]}% ${offsets[1]}%, ${offsets[2]}% ${offsets[3]}%, ${offsets[4]}% ${offsets[5]}%, ${offsets[6]}% ${offsets[7]}%)`;
    });
    return (
        <motion.div
            className={className}
            style={{
                clipPath: path,
            }}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={imageVariants}
            transition={{ duration: 1, type: 'spring' }}
            layout>
            {children}
        </motion.div>
    );
}
