import { useContext } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ParticlesBackground from "./components/ParticlesBackground";
import PostForm from "./components/PostForm";
import PostFeed from "./components/PostFeed";
import Footer from "./components/Footer";

import { ThemeContext } from "./context/ThemeContext";

export default function App() {

  const { dark } = useContext(ThemeContext);

  return (

    <div
      className="
      relative
      min-h-screen
      overflow-hidden
      transition-all
      duration-500
      "

      style={{
        background: dark
          ? "linear-gradient(to bottom right, #000000, #06121e)"
          : "linear-gradient(to bottom right, #e0f7ff, #ffffff)"
      }}
    >

      {/* Particles */}

      <ParticlesBackground />

      <div className="relative z-10">

        <Navbar />

        <Hero />

        <div className="px-5">

          <PostForm />

          <PostFeed />

        </div>

        <Footer />

      </div>

    </div>
  );
}