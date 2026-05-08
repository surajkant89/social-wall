import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Footer() {
    const { dark } = useContext(ThemeContext);

    return (
        <footer className={`py-6 text-center border-t transition-all duration-500 mt-20
            ${dark ? "border-cyan-400/20 text-white/60 bg-black/20" : "border-gray-200 text-gray-600 bg-white/20"}
            backdrop-blur-xl
        `}>
            <p className="text-sm font-bold tracking-widest">
                ALL RIGHT RESERVED @ 2026 SURAJ KANT
            </p>
        </footer>
    );
}
