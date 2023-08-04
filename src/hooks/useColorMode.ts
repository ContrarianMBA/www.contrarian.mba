import React from 'react';
import { ColorMode } from '@/types';
import { COLOR_MODE_STORAGE_KEY, DEFAULT_COLOR_MODE } from '@/constants';

export function useColorMode() {
    const [colorMode, setColorMode] =
        React.useState<ColorMode>(DEFAULT_COLOR_MODE);

    React.useEffect(() => {
        const savedColorMode = window.localStorage.getItem(
            COLOR_MODE_STORAGE_KEY,
        ) as ColorMode;
        setColorMode(savedColorMode || DEFAULT_COLOR_MODE);
    }, []);

    const toggleColorMode = () => {
        setColorMode(() => {
            const newMode = colorMode === 'light' ? 'dark' : 'light';
            window.localStorage.setItem(COLOR_MODE_STORAGE_KEY, newMode);
            return newMode;
        });
    };

    return { colorMode, toggleColorMode };
}
