import { useEffect, useState } from 'react';
import { ScreenSize, sizes } from './types';

function isMatch(media: ScreenSize) {
    const query = `(min-width: ${sizes[media]})`;
    return window.matchMedia(query).matches;
}

function findClosest(queries: ScreenSize[]) {
    for (let i = queries.length - 1; i >= 0; i--) {
        if (isMatch(queries[i])) {
            return queries[i];
        }
    }
    return 'sm';
}

const queries = Object.keys(sizes) as ScreenSize[];

export const useClosestMedia = () => {
    const [closest, setClosest] = useState<ScreenSize>('sm');

    useEffect(() => {
        const listener = () => setClosest(findClosest(queries));
        listener();
        window.addEventListener('resize', listener);
        return () => window.removeEventListener('resize', listener);
    }, []);

    useEffect(() => {
        console.log(closest);
    }, [closest]);
    return closest;
};
