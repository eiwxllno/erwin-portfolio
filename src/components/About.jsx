import React from "react";
import myImg from "../images/hero.jpg";
import SectionTitle from "./SectionTitle";

function About() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-12">
      <div className="w-full md:w-6/12">
        <SectionTitle>About Me</SectionTitle>
        <p className="text-md text-gray-600 dark:text-gray-300">
          A Front-end Software Engineer with 7+ years of experience in website
          development, I specialize in both CMS-based and custom web development
          solutions. My expertise lies in crafting high-performing websites
          using platforms like wordpress, along with fully customized solutions.
          JavaScript Programming is my language of choice, allowing me to build
          dynamic and interactive web applications. Additionally, I have some
          experience in C#, expanding my capabilities beyond front-end and CMS
          development. Explore my work and let’s collaborate to bring your ideas
          to life! 🚀 — Erwin Llano
        </p>
        <a
          href="mailto:erwinllano95@gmail.com"
          className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-customColor hover:bg-customColor/90 md:text-md mt-6"
        >
          Contact
        </a>
      </div>

      <img
        src={myImg}
        alt="Arfan"
        className="w-full md:w-6/12 rounded-lg object-cover"
      />
    </div>
  );
}

export default About;
