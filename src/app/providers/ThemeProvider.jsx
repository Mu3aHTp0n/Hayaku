import {useLayoutEffect, useState} from "react";

const isDarkTheme = window?.matchMedia('(prefers-color-scheme: dark)').matches
const defaultTheme = isDarkTheme ? 'dark' : 'light'

export default function useTheme() {

    const [theme, setTheme] = useState(localStorage.getItem('app-theme') || defaultTheme)

    useLayoutEffect(() => {
        document.documentElement.setAttribute('theme', theme);
        localStorage.setItem('app-theme', theme)
    }, [theme]);

    return {theme, setTheme}
}