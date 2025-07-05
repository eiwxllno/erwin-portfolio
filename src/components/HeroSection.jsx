function HeroSection() {
  return (
    <div id="hero" className="flex items-center justify-center flex-col py-20">
      {/* Add a div for the circular image */}
      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-4">
        <img
          src="https://i.imgur.com/4Om1C3l.jpeg"
          alt="Erwin"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl mb-1 md:mb-3 text-customColor dark:text-customColor font-semibold">
          Hi, This is Erwin!{" "}
          <span className="inline-block animate-wave">👋</span>
        </h1>
        <p className="text-md md:text-xl max-w-md mb-6 text-gray-600 dark:text-gray-300">
          Experienced in building scalable & dynamic websites and web
          applications{" "}
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#works"
            className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-customColor hover:bg-customColor/90 transition-all duration-300 transform hover:scale-105"
          >
            See Works
          </a>
          <a
            href="https://fiverr.com/erwinllano"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 border border-customColor text-base font-medium rounded-md text-customColor bg-transparent hover:bg-customColor/10 transition-all duration-300 transform hover:scale-105"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
