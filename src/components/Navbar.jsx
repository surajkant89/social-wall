import { useContext } from "react";

import { FaMoon, FaSun } from "react-icons/fa";

import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {

    const { dark, setDark } = useContext(ThemeContext);

    return (

        <div
            className="
      sticky
      top-0
      z-50
      backdrop-blur-xl
      border-b
      transition-all
      duration-500
      "

            style={{
                background: dark
                    ? "rgba(0,0,0,0.2)"
                    : "rgba(255,255,255,0.2)"
            }}
        >

            <div
                className="
        max-w-7xl
        mx-auto
        px-6
        py-4
        flex
        justify-between
        items-center
        "
            >

                <h1
                    className="
          text-2xl
          md:text-3xl
          font-extrabold
          bg-gradient-to-r
          from-cyan-400
          to-blue-500
          bg-clip-text
          text-transparent
          "
                >
                    Suraj Social Wall
                </h1>

                <button

                    onClick={() => setDark(!dark)}

                    className="
          p-3
          rounded-full
          bg-white/10
          hover:scale-110
          transition-all
          duration-300
          border
          border-cyan-400/20
          text-cyan-300
          "
                >

                    {dark ? <FaSun /> : <FaMoon />}

                </button>

            </div>

        </div>
    );
}