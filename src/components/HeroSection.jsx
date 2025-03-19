function HeroSection() {
  return (
    <div id="hero" className="flex items-center justify-center flex-col py-20">
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl mb-1 md:mb-3 text-customColor dark:text-customColor font-semibold">
          Hi, This is Erwin 👋
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
