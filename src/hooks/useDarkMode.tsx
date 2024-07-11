import React, { useState, useEffect, createContext, useContext } from "react";

interface DarkModeContext {
    isDark: boolean;
    toggleDarkMode: () => void;
}

const DARK_MODE_KEY = "dark_mode";

const DarkModeContext = createContext<DarkModeContext | undefined>(undefined);

export const DarkModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        const savedDM = localStorage.getItem(DARK_MODE_KEY);

        if (savedDM) {
            setIsDark(JSON.parse(savedDM));
        } else {
            localStorage.setItem(DARK_MODE_KEY, JSON.stringify(isDark));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(DARK_MODE_KEY, JSON.stringify(isDark));
    }, [isDark]);

    const toggleDarkMode = () => {
        setIsDark(!isDark);
    };

    return <DarkModeContext.Provider value={{ isDark, toggleDarkMode }}>{children}</DarkModeContext.Provider>;
};

const useDarkMode = () => {
    const context = useContext(DarkModeContext);

    if (!context) throw new Error("Welp, I broke the context in some way");

    return context;
};

export default useDarkMode;
