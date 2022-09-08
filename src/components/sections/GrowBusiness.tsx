import { WithChildrenProps } from '../../types';
import orangeWoman from 'images/orange-woman.webp';
import Image from 'next/future/image';
import {
    motion,
    useScroll,
    useTime,
    useTransform,
    Variants,
} from 'framer-motion';
import { AnimatedImage } from '../AnimatedImage';

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

function List() {
    let index = 1;
    return (
        <motion.ol
            className="flex flex-col gap-10 overflow-clip"
            initial="hidden"
            whileInView="show"
            transition={{
                staggerChildren: 0.5,
            }}
            viewport={{ once: true }}>
            <ListItem index={index++} title="Sign Up">
                Select from any of our industry-leading website templates,
                designer fonts, and color palettes that best fit your personal
                style and professional needs.
            </ListItem>
            <ListItem index={index++} title="Sell anything">
                Explore which tools you want to add—whether it’s setting up an
                online store, booking services, or adding your favorite
                third-party extensions.
            </ListItem>
            <ListItem index={index++} title="Market your business">
                Stand out in every inbox and social feed. On-brand email
                campaigns and social tools make it easy to retain customers and
                grow your audience.
            </ListItem>
        </motion.ol>
    );
}

export function GrowBusiness() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-36 px-12 py-36">
            <div className="2xl:text-11xl flex w-full flex-col items-start justify-center  font-title text-4xl font-semibold sm:text-8xl md:text-8xl lg:w-3/4 lg:text-8xl xl:text-9xl">
                <div>GET YOUR</div>
                <div className="self-end">VITAMIN C</div>
                <div className="pl-[10%]">ONLINE</div>
            </div>
            <div className="grid w-full grid-cols-2 items-center justify-center px-12">
                <div>
                    <AnimatedImage className="m-auto h-[36rem] w-fit overflow-clip">
                        <Image src={orangeWoman} className="h-full w-auto" />
                    </AnimatedImage>
                </div>
                <List />
            </div>
        </div>
    );
}
