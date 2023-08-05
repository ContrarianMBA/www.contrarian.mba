import React from 'react';
import { ColorMode } from '@/types';
import { COLOR_MODE_STORAGE_KEY, DEFAULT_COLOR_MODE } from '@/constants';

export function useColorMode() {
    const [colorMode, setColorMode] =
        React.useState<ColorMode>(DEFAULT_COLOR_MODE);

    React.useEffect(() => {
        const savedColorMode =
            (window.localStorage.getItem(
                COLOR_MODE_STORAGE_KEY,
            ) as ColorMode) || DEFAULT_COLOR_MODE;
        setColorMode(savedColorMode);
        const $html = document.querySelector('html');
        $html!.dataset.bsTheme = savedColorMode;
    }, []);

    const toggleColorMode = () => {
        setColorMode(() => {
            const newMode = colorMode === 'light' ? 'dark' : 'light';
            window.localStorage.setItem(COLOR_MODE_STORAGE_KEY, newMode);
            const $html = document.querySelector('html');
            $html!.dataset.bsTheme = newMode;
            return newMode;
        });
    };

    return { colorMode, toggleColorMode };
}
