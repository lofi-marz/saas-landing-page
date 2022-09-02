import { useEffect, useState } from 'react';
import { ScreenSize, sizes } from './types';

export const useMediaQuery = (screen: ScreenSize) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const query = `(min-width: ${sizes[screen]})`;
        const media = window.matchMedia(query);
        console.log(media);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        const listener = () => setMatches(media.matches);
        window.addEventListener('resize', listener);
        return () => window.removeEventListener('resize', listener);
    }, [matches, screen]);

    return matches;
};
