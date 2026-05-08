import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {

    const [dark, setDark] = useState(() => {

        const savedTheme = localStorage.getItem("theme");

        return savedTheme === "light" ? false : true;
    });

    useEffect(() => {

        if (dark) {

            document.documentElement.classList.add("dark");

            localStorage.setItem("theme", "dark");
        }

        else {

            document.documentElement.classList.remove("dark");

            localStorage.setItem("theme", "light");
        }

    }, [dark]);

    return (

        <ThemeContext.Provider value={{ dark, setDark }}>

            {children}

        </ThemeContext.Provider>
    );
}