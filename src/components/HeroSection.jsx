function HeroSection() {
  return (
    <div id="hero" className="flex items-center justify-center flex-col py-20">
      {/* Add a div for the circular image */}
      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-4">
        <img
          src="https://i.imgur.com/4Om1C3l.jpeg" //
          alt="Erwin"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl mb-1 md:mb-3 text-customColor dark:text-customColor font-semibold">
          Hi, This is Erwin! 👋
        </h1>
        <p className="text-md md:text-xl max-w-md mb-3 text-gray-600 dark:text-gray-300">
          7+ Years of Building Scalable & Dynamic Websites and Web App.{" "}
        </p>
        <a
          href="#works"
          className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-customColor hover:bg-customColor/90 md:text-md "
        >
          See Works
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
