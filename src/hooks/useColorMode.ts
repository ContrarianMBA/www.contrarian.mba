import React from 'react';
import { ColorMode } from '@/types';
import { DEFAULT_COLOR_MODE } from '../constants';

export function useColorMode() {
    const savedTheme =
        typeof window !== 'undefined'
            ? (window.localStorage.getItem('colorMode') as ColorMode)
            : DEFAULT_COLOR_MODE;
    const [colorMode, setColorMode] = React.useState<ColorMode>(
        savedTheme || DEFAULT_COLOR_MODE,
    );

    const toggleColorMode = () => {
        setColorMode(() => {
            const newMode = colorMode === 'light' ? 'dark' : 'light';
            window.localStorage.setItem('colorMode', newMode);
            return newMode;
        });
    };

    return { colorMode, toggleColorMode };
}
