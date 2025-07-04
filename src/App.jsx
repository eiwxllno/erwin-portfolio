import React, { useState, useEffect } from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Works from "./components/Works";

function App() {
  const [theme, setTheme] = useState("dark"); // Set dark as default

  useEffect(() => {
    // Only check system preference if no theme is set (though we've set default now)
    if (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }
  }, []);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      <button
        type="button"
        onClick={handleThemeSwitch}
        className="fixed z-10 right-2 top-2 bg-customColor/90 text-lg p-1 rounded-md"
      >
        {theme === "dark" ? "🔅" : "🔆"}
      </button>
      <div className="bg-white dark:bg-slate-900 min-h-screen font-inter ">
        <div className="max-w-5xl w-11/12 mx-auto">
          <HeroSection />
          <Services />
          <Skills />
          <Works />
          <About />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
