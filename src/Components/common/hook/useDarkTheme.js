import { useState, useEffect } from "react";

export default function useDarkTheme() {
    // Initialize theme from localStorage or default to "light"
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light";
    });

    // Determine the opposite theme
    const colorTheme = theme === "dark" ? "light" : "dark";

    useEffect(() => {
        const root = window.document.documentElement;

        // Apply the current theme to the document
        root.classList.remove(colorTheme);
        root.classList.add(theme);

        // Persist the theme in localStorage
        localStorage.setItem("theme", theme);
    }, [theme, colorTheme]);

    return [colorTheme, setTheme];
}
