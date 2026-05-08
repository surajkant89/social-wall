import { useContext } from "react";

import { ReactTyped } from "react-typed";

import { ThemeContext } from "../context/ThemeContext";

export default function Hero() {

    const { dark } = useContext(ThemeContext);

    return (

        <div
            className="
      flex
      flex-col
      justify-center
      items-center
      text-center
      min-h-[60vh]
      px-5
      "
        >

            {/* Main Heading */}

            <h1
                className="
        text-5xl
        md:text-7xl
        font-extrabold
        mb-5
        bg-gradient-to-r
        from-cyan-400
        to-blue-500
        bg-clip-text
        text-transparent
        "
            >
                Suraj's Social Wall
            </h1>

            {/* Typing Animation */}

            <ReactTyped

                strings={[
                    "Beautiful App",
                    "Realtime Posting",
                    "Animated UI",
                    "Modern Design"
                ]}

                typeSpeed={50}

                backSpeed={40}

                loop

                className={`
          text-xl
          md:text-3xl
          ${dark ? "text-cyan-300" : "text-blue-600"}
        `}
            />

        </div>
    );
}